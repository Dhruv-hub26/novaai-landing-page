# NovaAI Landing Page

A pixel-faithful recreation of the **NovaAI** landing page featuring a dark cinematic AI aesthetic, scroll-scrubbed background visuals, frosted glass UI, and staggered viewport animations.

---

## 🚀 Tech Stack

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Inter (Google Fonts)

---

## ✨ Features

- **Scroll-Scrubbed Canvas Video:** Decoupled frame-rendering canvas layer driven by scroll position with linear interpolation (LERP) smoothing for jitter-free scrub effects.
- **Glassmorphic UI Components:** Dark frosted glass cards, navigation bar, and interactive panels with backdrop blur and low-contrast borders.
- **Staggered Reveal Animations:** Custom lightweight `IntersectionObserver` hook (`useReveal`) for performant fade-up transitions without heavy animation runtimes.
- **Responsive Layout:** Adaptive layouts designed for smooth scaling across mobile, tablet, and desktop viewports.

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Navbar.tsx         # Fixed navigation with glass CTA and center links
│   ├── ScrollVideo.tsx    # Canvas-based scroll-scrubbed video controller
│   ├── SectionOne.tsx     # Hero section with intro typography & contact card
│   └── SectionTwo.tsx     # Insight on Demand section with frosted capability panel
├── hooks/
│   └── useReveal.ts       # IntersectionObserver hook for viewport reveals
├── App.tsx                # Main composition and scroll-spacer structure
├── index.css              # Tailwind base imports, selection & global styling
└── main.tsx               # Application entry point
🛠️ Getting Started
Prerequisites
Node.js (v18 or higher recommended)

npm or pnpm / yarn

Installation
Clone the repository:

Bash
git clone [https://github.com/your-username/novaai-landing-page.git](https://github.com/your-username/novaai-landing-page.git)
cd novaai-landing-page
Install dependencies:

Bash
npm install
Start the local development server:

Bash
npm run dev
Open http://localhost:5173 in your browser.

⚙️ Build & Deployment
To generate an optimized production bundle:

Bash
npm run build
To preview the production build locally:

Bash
npm run preview
📄 License
This project is licensed under the MIT License.# novaai-landing-page
