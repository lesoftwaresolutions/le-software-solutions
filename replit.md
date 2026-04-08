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
  - `Navbar.tsx` — sticky top nav with "L" blue icon logo + mobile hamburger
  - `Footer.tsx` — 4-column footer (brand, quick links, services, contact)
  - `ProductCard.tsx` — shop product card with stock photo, rating, price inline, dual buttons
  - `ModalPopup.tsx` — animated "coming soon" modal for Add to Cart / View clicks
- **Shop**: Exactly 4 products (Laptop Stand £34.99, Power Bank £29.99, Smart Door Bell £59.99, Indoor Security Camera £44.99) in a 4-column grid with real stock photos from `public/images/`
- **Case Studies**: LeCorn (Live) and LeCaffee (In Progress) with real food/cafe stock photos
- **Product images**: Local stock photos stored in `public/images/` (laptop-stand.jpg, power-bank.jpg, smart-doorbell.jpg, security-camera.jpg, lecorn-case-study.jpg, lecaffee-case-study.jpg)
- **Modal**: backdrop blur, smooth scale animation, ESC key close, click-outside close
- **Contact**: Hastings, East Sussex, UK | info@lesoftwaresolutions.com | +44 7393 454245
- **Pricing**: 3 tiers — Basic £99/mo, Medium £199/mo (Most Popular), Advanced £299/mo
- **Color palette**: Dark navy hero (`from-slate-900 via-blue-950 to-slate-900`), blue-600 accent, white content sections

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
