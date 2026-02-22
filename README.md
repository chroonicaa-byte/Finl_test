# FounderUnfiltered9

> Real HR. Real Business. No Fluff.

HR consulting, compliance, training, and career advisory for founders, SMEs, and professionals.

## Pages (6)

| Route | Description |
|---|---|
| `/` | Home — 3 pillars, stats, testimonials, CTA |
| `/about` | Story, values, who we work with |
| `/services` | All services with inline pricing, 6 categories |
| `/pricing` | 4 bundled plans + add-on à la carte menu |
| `/podcast` | Episode list, player UI, paid session booking |
| `/contact` | Form with inquiry type selector → mailto |

## Quick Start

```bash
npm install
npm run dev
```

No env vars. No database. Deploy to Vercel in one click.

## Customise

- **Email**: `src/app/contact/page.tsx` → `mailto:` address
- **Episodes**: `src/app/podcast/page.tsx` → `episodes` array
- **Pricing**: `src/app/pricing/page.tsx` → `plans` array
- **Services**: `src/app/services/page.tsx` → `categories` array
- **Colors**: `tailwind.config.ts` → `brand` and `gold` tokens
- **Fonts**: `src/app/layout.tsx` → swap Playfair/DM Sans

## Stack
- Next.js 14 App Router + TypeScript
- Tailwind CSS (Playfair Display + DM Sans)
- No database, no auth, no backend
