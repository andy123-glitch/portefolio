# Repository Guidelines

## Project Structure & Module Organization

This is a React 19 single-page portfolio built with TypeScript, Vite, and Tailwind CSS. Application entry and page composition live in `src/main.tsx`; global styles are in `src/index.css`.

- `src/layouts/` contains page sections such as `Hero.tsx`, `Projects.tsx`, and `Contact.tsx`.
- `src/components/` contains reusable UI pieces such as `Button.tsx`, `Badge.tsx`, and `ProjectCard.tsx`.
- `src/datas/` holds typed static content for sections. Update portfolio content here instead of hard-coding it in layouts.
- `src/types/` defines shared TypeScript types.
- `src/assets/` contains imported images; `public/` contains files served directly, including the CV and favicon.

## Build, Test, and Development Commands

Use Node.js 20+ and npm. Install dependencies with `npm install`.

- `npm run dev` starts the Vite development server.
- `npm run build` runs TypeScript project builds and creates the production bundle in `dist/`.
- `npm run preview` serves the production bundle locally after building.
- `npm run lint` runs ESLint and verifies Prettier formatting.
- `npm run format` applies Prettier formatting; use it before committing.

There is no automated test suite yet. Validate changes with `npm run lint`, `npm run build`, and a quick responsive browser check of affected sections.

## Coding Style & Naming Conventions

Use TypeScript for application code and functional React components. Follow the existing 2-space indentation, single quotes, and semicolon usage. Use PascalCase filenames and exports for components (`ExperienceCard.tsx`), camelCase for variables and data exports (`projects`), and descriptive data filenames ending in `Data.ts`.

Prefer Tailwind utility classes in JSX. Keep reusable UI in `components/`, page-level composition in `layouts/`, and content changes in `datas/`. Do not edit generated `dist/` output.

## Commit & Pull Request Guidelines

Recent history uses short French messages, often conventional prefixes, for example `feat: ajout ...` and `fix: ajustement ...`. Use the same concise format: `feat: add project card` or `fix: correct favicon path`.

Keep each commit focused. Pull requests should explain the visible change, link the relevant issue when applicable, confirm `npm run lint` and `npm run build` pass, and include screenshots for layout or visual changes. Call out updates to public assets, contact details, or downloadable files explicitly.
