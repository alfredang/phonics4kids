---
name: Premium Documentation UI
description: Guidelines for building sleek, dark-blue themed documentation interfaces with left-side navigation and optimized user flows.
---

# Premium Documentation UI

This skill defines the aesthetic and functional standards for high-end documentation sites and dashboards, characterized by a "GitHub-meets-Modern-App" look.

## Core Visual Palette
- **Primary Background**: Deep Midnight Blue (`#0f172a` or slate-900).
- **Secondary Background**: Navy/Indigo Tint (`#1e293b` or slate-800) for sidebars and cards.
- **Accent Colors**: 
    - Brand Primary: Indigo-500 (`#6366f1`) or Electric Blue.
    - Accents: Violet-400 for highlights, Amber-400 for warnings/stars.
- **Text**: High-contrast white for headings, Slate-400 for secondary text.

## Layout Structure
1.  **Fixed Left Sidebar**: 
    - Width: 280px - 320px.
    - Contents: Branding/Logo at top, hierarchical navigation list in the middle, user profile/settings at the bottom.
    - Style: Slightly transparent with `backdrop-blur` when over dynamic content.
2.  **Main Content Area**:
    - Padding: Large margins (e.g., `p-6 md:p-12`).
    - Max-Width: Constrain text to `max-w-4xl` for readability.
3.  **Navigation Components**:
    - **Active States**: Use a subtle left border or a glowing background pill for the active route.
    - **Hover States**: Scaling icons or color shifts to slate-700.

## Implementation (React + Tailwind)
```tsx
const SidebarItem = ({ icon: Icon, label, isActive }) => (
  <button className={`flex items-center space-x-3 w-full p-3 rounded-xl transition-all ${
    isActive ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-slate-800'
  }`}>
    <Icon size={20} />
    <span className="font-bold">{label}</span>
  </button>
);
```

## UX Best Practices
- **Glassmorphism**: Use `bg-white/10` and `backdrop-blur-xl` for overlays.
- **Micro-interactions**: Animate state changes with `framer-motion` (e.g., `whileHover={{ scale: 1.02 }}`).
- **Responsive**: Move sidebar to a drawer/hamburger menu on mobile screens (<1024px).
