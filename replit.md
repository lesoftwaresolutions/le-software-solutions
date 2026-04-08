# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

## Artifacts

### LE Software Solutions (`artifacts/le-software-solutions`)
- **Type**: React + Vite static website (no backend)
- **Preview path**: `/`
- **Pages**: Home, About Us, What We Do (Services), Case Studies, Shop, Pricing, Contact
- **Tech**: React functional components, Tailwind CSS, Wouter router
- **Key components**:
  - `Navbar.tsx` — sticky top nav with mobile hamburger
  - `Footer.tsx` — 4-column footer with company info
  - `ProductCard.tsx` — shop product card with hover effects
  - `ModalPopup.tsx` — animated "coming soon" modal for Buy Now clicks
- **Shop**: 6 products displayed in grid; Buy Now/Add to Cart triggers modal
- **Modal**: backdrop blur, smooth scale animation, ESC key close, click-outside close

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
