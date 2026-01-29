# 🚀 PhonixQuest: Interactive Phonics Explorer

**Live Demo:** [https://alfredang.github.io/PhonixQuest/](https://alfredang.github.io/PhonixQuest/)

PhonixQuest is a vibrant, interactive phonics learning platform designed to make learning to read fun and engaging for children. Combining modern web technologies with AI-powered feedback, PhonixQuest guides young learners through a series of "missions" to master letters, sounds, and word formation.

## ✨ What is PhonixQuest?

PhonixQuest transforms phonics education into an epic adventure. It covers everything from basic letter sounds to complex blending rules across five magical worlds:

*   **📍 Level 1: Letters Land** - Master the complete set of 44 English phonemes (Short Vowels, Consonants, Digraphs, and more).
*   **📍 Level 2: Blend Bridge** - Learn to slide sounds together (Blends like "ST").
*   **📍 Level 3: Rule City** - Discover secret phonics rules (like the Magic Silent E).
*   **📍 Level 4: Rhythm Road** - Practice sentence reading and intonation.
*   **📍 Level 5: Story Kingdom** - Read complete paragraphs and stories.

## 🌟 Key Features

*   **🗺️ Adventure Map:** A gamified progression system where kids unlock new levels as they master sounds.
*   **🎙️ AI Voice Feedback:** Uses **Google Gemini AI** to listen to the child's pronunciation and provide encouraging, real-time feedback.
*   **🎮 Interactive Games:** "Pop the Phoneme," "Build the Word," and more to keep engagement high.
*   **📈 Progress Tracking:** Earn XP, collect stars, and maintain streaks to build a consistent learning habit.
*   **🎨 Premium UI:** A beautiful, responsive design built with **Tailwind CSS 4** and **Framer Motion** for smooth, playful animations.

## 🛠️ Tech Stack

*   **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
*   **AI Integration:** [Google Generative AI (Gemini)](https://ai.google.dev/)
*   **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/), [Lottie React](https://github.com/LottieFiles/lottie-react)
*   **Icons:** [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

Follow these steps to set up PhonixQuest on your local machine for development.

### Prerequisites

*   [Node.js](https://nodejs.org/) (Version 20 or later recommended)
*   [npm](https://www.npmjs.com/) (usually comes with Node.js)
*   A Google Gemini API Key (Get one for free at [AI Studio](https://aistudio.google.com/))

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/alfredang/PhonixQuest.git
    cd PhonixQuest
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env.local` file in the root directory and add your Gemini API key:
    ```env
    VITE_GEMINI_API_KEY=your_gemini_api_key_here
    ```

4.  **Launch the Development Server:**
    ```bash
    npm run dev
    ```
    The app will be available at `http://localhost:3000` (or `3001` if 3000 is busy).

### 🚢 Deployment

This project is set up to automatically deploy to **GitHub Pages** using GitHub Actions. Any push to the `main` branch will trigger a build and update the live site.

## 📄 License

This project is private and for educational purposes.

---

<div align="center">
  Made with ❤️ for the next generation of readers.
</div>
