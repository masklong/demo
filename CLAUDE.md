# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript + Vite demo project for internal communication and demonstration purposes. It features a multi-page application with routing and is configured with shadcn/ui components using the "new-york" style.

## Development Commands

### Package Manager
This project uses **pnpm** as the package manager (evidenced by `pnpm-lock.yaml`).

### Common Commands
- `pnpm dev` - Start development server
- `pnpm build` - Type check with TypeScript and build for production
- `pnpm lint` - Run ESLint on the codebase
- `pnpm preview` - Preview production build locally

## Architecture

### Tech Stack
- **Framework**: React 19.2 with React Router DOM 7.11
- **Build Tool**: Vite 7.2
- **Language**: TypeScript 5.9
- **Styling**: Tailwind CSS with shadcn/ui components (new-york style)
- **UI Libraries**:
  - lucide-react for icons
  - class-variance-authority for component variants
  - tailwindcss-animate for animations

### Project Structure
```
src/
├── main.tsx           # Application entry point
├── App.tsx            # Root component with routing configuration
├── lib/
│   └── utils.ts       # Utility functions (cn helper for className merging)
├── pages/
│   ├── Home/          # Home page route (/)
│   └── BigScreen/     # Dashboard page route (/big)
└── index.css          # Global styles and Tailwind imports
```

### Routing
The application uses React Router with the following routes:
- `/` - Home page (minimal placeholder)
- `/big` - BigScreen dashboard with data visualization layout

### Path Aliases
The project uses `@/` as an alias for the `src/` directory:
- `@/components` → `src/components`
- `@/lib/utils` → `src/lib/utils`

### Styling System
- Uses Tailwind CSS with CSS variables for theming
- Dark mode support via class strategy
- Custom color system based on HSL CSS variables (--primary, --secondary, etc.)
- shadcn/ui configuration in `components.json` with:
  - Style: new-york
  - Base color: zinc
  - CSS variables enabled
  - No prefix

### Component Patterns
- Pages are organized in `src/pages/[PageName]/index.tsx`
- Use the `cn()` utility from `@/lib/utils` for conditional className merging
- BigScreen page demonstrates a responsive grid layout with dark theme

## Adding shadcn/ui Components
When adding new shadcn/ui components, they should be placed in `src/components/` following the configuration in `components.json`.
