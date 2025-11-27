# Nexron

A modern, production-ready Electron + Next.js starter template with TypeScript and Tailwind CSS. Built for developers who want to create beautiful desktop applications with the power of React and the performance of Electron.

## ✨ Features

- **⚡ Modern Stack**: Built with Electron 33, Next.js 16, React 19, and TypeScript
- **🎨 Beautiful UI**: Pre-configured with Tailwind CSS 4 and shadcn/ui components
- **🌓 Dark Mode**: Built-in theme support with system preference detection
- **📦 Ready to Use**: 60+ pre-built UI components from shadcn/ui
- **🔥 Hot Reload**: Development mode with instant updates
- **🚀 Production Ready**: Optimized build configuration for distribution
- **💾 Persistent Storage**: Electron Store integration for data persistence
- **🔧 Modern Tooling**: ESM modules, PostCSS, and Lightning CSS

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/M4YAVI/Nexron.git

# Navigate to project directory
cd Nexron

# Install dependencies
npm install

# Run in development mode
npm run dev
```

The application will launch automatically with hot reload enabled.

## 📁 Project Structure

```
nexron/
├── app/                 # Next.js app directory
├── components/          # React components (shadcn/ui)
├── electron/           # Electron main and preload scripts
│   ├── main.mjs        # Main process (ESM)
│   └── preload.js      # Preload script
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets
├── styles/             # Global styles
└── types/              # TypeScript type definitions
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build Next.js application
- `npm run build:electron` - Build complete Electron app for distribution
- `npm start` - Start Next.js production server
- `npm run lint` - Run ESLint

## 📦 Tech Stack

- **Electron** - Desktop application framework
- **Next.js 16** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **electron-serve** - Static file serving
- **electron-store** - Persistent data storage

## 🎨 UI Components

Includes 60+ production-ready components:
- Accordion, Alert, Avatar, Badge, Button
- Calendar, Card, Carousel, Chart, Checkbox
- Dialog, Drawer, Dropdown, Form, Input
- Navigation, Popover, Select, Sheet, Table
- Toast, Tooltip, and many more...

## 🏗️ Building for Production

```bash
# Build Next.js app and package Electron
npm run build:electron
```

Built applications will be available in the `dist/` directory for your platform.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

MIT

## 🙏 Credits

Built with:
- [Electron](https://www.electronjs.org/)
- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

Made with ❤️ by [M4YAVI](https://github.com/M4YAVI)
