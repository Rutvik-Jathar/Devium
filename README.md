# Devium Website

> The official landing page and promotional website for **Devium**, the AI-first realtime collaborative code editor built for teams and developers.

![Devium Banner](/public/screenshots/dashboard.png)

## 🚀 Overview

The Devium website is a modern, premium SaaS landing page designed to showcase the features and capabilities of the Devium desktop application. It features a stunning dark theme, glassmorphism UI elements, smooth Framer Motion animations, and a developer-centric aesthetic that mirrors the actual application experience.

### ✨ Key Sections & Features

- **Dynamic Hero Section:** Features an animated typing effect and a simulated real-time multi-cursor editor that dynamically changes users and colors to visually demonstrate collaboration.
- **Bento-Grid Screenshot Showcase:** A fully responsive, modern layout that displays core app interfaces (Dashboard, Signup, Profile, Chat & Room) using CSS object fitting to ensure the best parts of the UI are always visible.
- **Features Page:** Highlights the core capabilities of Devium with highly interactive, glowing animated cards:
  - Real-time Multi-Cursor Editing
  - Real-time Chat
  - Role-based Access Control
  - Real-time Code Synchronization
- **Download Hub:** Clear, accessible links for downloading the Devium v1.104 client for various operating systems.

## 🛠️ Tech Stack

This project is built using modern web development standards to ensure maximum performance and beautiful design:

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Routing:** [React Router v7](https://reactrouter.com/) (HashRouter configured for easy deployment)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** TypeScript

## 📁 Project Structure

```text
├── components/          # Reusable UI components
│   ├── Footer.tsx       # Global footer with links and social icons
│   ├── HeroSection.tsx  # Animated landing page header with fake editor
│   ├── Navbar.tsx       # Sticky navigation with glassmorphism
│   ├── ScreenshotShowcase.tsx # Bento grid of application screenshots
│   └── ...
├── pages/               # Main route views
│   ├── HomePage.tsx     # Landing page assembly
│   ├── FeaturesPage.tsx # Core feature highlights
│   ├── DownloadPage.tsx # App download links
│   └── ...
├── public/              
│   └── screenshots/     # Application screenshots (dashboard, chat-room, etc.)
├── media/               # Brand assets (devium.png logo)
├── index.css            # Global Tailwind imports & custom CSS variables
└── package.json         # Dependencies and scripts
```

## 💻 Running Locally

To get the project running on your local machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/devium-website.git
   cd devium-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🎨 Design System

The application relies heavily on Tailwind CSS variables defined in `index.css` to maintain its dark SaaS aesthetic:
- **Background:** `#0B0F19` (Deep dark blue)
- **Primary Accent:** Purple (`#8B5CF6`)
- **Secondary Accent:** Blue (`#3B82F6`)
- **Typography:** `Inter` for standard UI text, `JetBrains Mono` for developer/code snippets.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
