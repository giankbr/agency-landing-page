# Sengiku Monorepo

This is a monorepo containing the Sengiku Studio landing page and related packages.

## Structure

```
.
├── apps/
│   └── web/          # Main landing page application
├── packages/          # Shared packages (future)
└── package.json       # Root workspace configuration
```

## Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0 (recommended) or npm/yarn

## Getting Started

1. **Install dependencies:**
   ```bash
   pnpm install
   # or
   npm install
   ```

2. **Set environment variables:**
   Create a `.env.local` file in `apps/web/` with:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

3. **Run the development server:**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Build for production:**
   ```bash
   pnpm build
   # or
   npm run build
   ```

## Workspace Scripts

- `pnpm dev` - Start development server for the web app
- `pnpm build` - Build the web app for production
- `pnpm preview` - Preview the production build
- `pnpm clean` - Clean all node_modules and build artifacts

## Apps

### `apps/web`

The main landing page application built with:
- React 19
- Vite
- TypeScript
- React Router
- Tailwind CSS (via CDN)

## Packages

Shared packages will be added here as the project grows.
