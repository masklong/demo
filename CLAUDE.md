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
- **Styling**:
  - Tailwind CSS with shadcn/ui components (new-york style)
  - Less 4.5.1 for additional styling capabilities
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
- Less preprocessor support - import `.less` files directly in components
- shadcn/ui configuration in `components.json` with:
  - Style: new-york
  - Base color: zinc
  - CSS variables enabled
  - No prefix

### Component Patterns
- Pages are organized in `src/pages/[PageName]/index.tsx`
- Use the `cn()` utility from `@/lib/utils` for conditional className merging
- BigScreen page demonstrates a responsive grid layout with dark theme
- **Component Composition**: When implementing UI, break down large modules into reasonable components, always maintaining React component best practices and proper component composition

## Adding shadcn/ui Components
When adding new shadcn/ui components, they should be placed in `src/components/` following the configuration in `components.json`.

## UI Generation Style Rules

When creating UI components, follow these styling conventions:

### 1. Simple Styles (≤3 CSS properties)
Use Tailwind CSS classes directly in the component:
```tsx
<div className="flex items-center gap-4">
  <span className="text-lg font-bold">Title</span>
</div>
```

### 2. Complex Styles (>3 CSS properties)
Organize as a folder with separate style file:
```
src/components/MyComponent/
├── index.tsx       # Component logic
└── index.less      # Component styles
```

Example:
```tsx
// index.tsx
import './index.less';

export const MyComponent = () => {
  return <div className="my-component">Content</div>;
};
```

```less
// index.less
.my-component {
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: var(--background);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

### 3. Color Management
Use CSS variables for repeated colors instead of hardcoding values:

**Good:**
```less
.card {
  background: var(--primary);
  border-color: var(--primary);
  color: var(--primary-foreground);
}
```

**Bad:**
```less
.card {
  background: #1890ff;
  border-color: #1890ff;
  color: #ffffff;
}
```

Refer to existing CSS variables in `src/index.css` for the project's color system.

### 4. Handling Missing Icons and Images
When generating UI and icons or images are unavailable:
- Use open-source icons from lucide-react (already installed in the project)
- Use placeholder images or solid background colors as fallbacks
- When implementing from Figma using MCP:
  - Download images to the project directory when available
  - If images cannot be obtained, use open-source icons or background colors as placeholders

**Example with icon fallback:**
```tsx
import { Image as ImageIcon } from 'lucide-react';

// When image is unavailable
<div className="w-full h-48 bg-muted flex items-center justify-center">
  <ImageIcon className="w-12 h-12 text-muted-foreground" />
</div>
```

**Example with background color placeholder:**
```tsx
// Simple colored placeholder
<div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20" />
```

