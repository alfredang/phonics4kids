import { GoogleGenAI, Modality } from "@google/genai";

// Browser TTS Fallback
export const speakText = (text: string, rate: number = 0.9) => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = rate; // Slightly slower for learning
    utterance.pitch = 1.1; // Friendly tone
    window.speechSynthesis.speak(utterance);
  }
};

// Gemini TTS (If API Key available)
export const playGeminiTTS = async (text: string): Promise<void> => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        speakText(text);
        return;
    }

    try {
        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-preview-tts",
            contents: [{ parts: [{ text }] }],
            config: {
                responseModalities: [Modality.AUDIO],
                speechConfig: {
                    voiceConfig: {
                        prebuiltVoiceConfig: { voiceName: 'Kore' }, // Friendly female voice
                    },
                },
            },
        });

        const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        if (base64Audio) {
             const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
             const audioBuffer = await decodeAudioData(base64Audio, audioContext);
             const source = audioContext.createBufferSource();
             source.buffer = audioBuffer;
             source.connect(audioContext.destination);
             source.start(0);
        } else {
            speakText(text);
        }

    } catch (error) {
        console.warn("Gemini TTS failed, falling back to browser.", error);
        speakText(text);
    }
};

// Helper for decoding Gemini Audio
async function decodeAudioData(base64: string, ctx: AudioContext): Promise<AudioBuffer> {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return ctx.decodeAudioData(bytes.buffer);
}

// Browser STT
export const startListening = (
  onResult: (transcript: string) => void,
  onEnd: () => void
) => {
  const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  
  if (!SpeechRecognition) {
    console.error("Browser does not support Speech Recognition");
    onEnd();
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event: any) => {
    const transcript = event.results[0][0].transcript;
    onResult(transcript);
  };

  recognition.onerror = (event: any) => {
    console.error("Speech recognition error", event.error);
    onEnd();
  };

  recognition.onend = () => {
    onEnd();
  };

  recognition.start();
  return recognition; // Return instance to allow manual stop
};
