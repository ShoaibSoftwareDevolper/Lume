# Lume Fine Jewelry Collection

A luxury, pixel-perfect e-commerce fine jewelry collection storefront crafted by **Undiegravity**.

[![Next.js](https://img.shields.io/badge/Next.js-16.4.2-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-blue)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8)](https://tailwindcss.com/)
[![Provided by Undiegravity](https://img.shields.io/badge/Provided%20by-Undiegravity-black)](https://undiegravity.com)

## Overview

A production-ready fine jewelry collection page built by **Undiegravity**. The interface mirrors high-end luxury jewelry houses with pixel-perfect attention to typography, balanced margins, subtle color palettes, and structured multi-column catalog grids. Every section has been crafted to luxury standards with zero placeholders and zero unnecessary abstractions.

## Key Features

* Pixel-perfect reproduction of luxury e-commerce collection aesthetics
* Cormorant Garamond serif wordmark and heading typography with Inter body font
* Structured multi-span responsive product grid covering 1-column, 2-column landscape, and 2-row tall statement tiles
* High-resolution transparent product jewelry imagery centered on neutral #f5f3ef studio tiles
* State-driven pagination component with active page indication
* Fully responsive navigation with desktop layout and slide-out mobile drawer
* Lightweight zero-comment codebase complying strictly with Next.js App Router conventions
* Optimized image rendering through next/image with AVIF and WebP formatting

## Technology Stack

| Layer | Technology | Version |
| :--- | :--- | :--- |
| Framework | Next.js (App Router) | 16.4.2 |
| UI Library | React | 19.3.0 |
| Styling | Tailwind CSS | ^4.0.0 |
| Typography | next/font/google (Cormorant Garamond & Inter) | Built-in |
| Optimization | next/image (AVIF & WebP) | Built-in |
| Tooling | ESLint | ^9.0.0 |

## Project Structure

```text
lume/
├── app/
│   ├── checkout/
│   │   └── page.js
│   ├── journal/
│   │   └── page.js
│   ├── our-story/
│   │   └── page.js
│   ├── product/
│   │   ├── [slug]/
│   │   │   └── page.js
│   │   └── page.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── checkout/
│   │   ├── CheckoutForm.jsx
│   │   ├── OrderConfirmation.jsx
│   │   └── OrderSummary.jsx
│   ├── home/
│   │   ├── Hero.jsx
│   │   ├── Newsletter.jsx
│   │   └── TrustStrip.jsx
│   ├── layout/
│   │   ├── AnnouncementBar.jsx
│   │   ├── Footer.jsx
│   │   ├── MobileNav.jsx
│   │   └── Navbar.jsx
│   ├── overlays/
│   │   ├── AccountModal.jsx
│   │   ├── CartSidebar.jsx
│   │   ├── SearchModal.jsx
│   │   └── WishlistSidebar.jsx
│   └── product/
│       ├── FilterDrawer.jsx
│       ├── Pagination.jsx
│       ├── ProductDetail.jsx
│       ├── ProductGrid.jsx
│       └── ProductToolbar.jsx
├── context/
│   └── ShopContext.jsx
├── data/
│   ├── articles.js
│   ├── footer.js
│   ├── navigation.js
│   ├── products.js
│   ├── story.js
│   └── trust.js
├── public/
│   ├── images/
│   │   ├── hero/
│   │   └── products/
│   ├── favicon.ico
│   └── icon.svg
├── jsconfig.json
├── LICENSE
├── next.config.mjs
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

* Node.js 18.18.0 or higher
* npm, yarn, or pnpm package manager

### Installation

Clone the repository and install project dependencies:

```bash
npm install
```

### Development Server

Run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the collection page.

## Available Scripts

| Command | Purpose |
| :--- | :--- |
| `npm run dev` | Starts Next.js development server on port 3000 with Turbopack |
| `npm run build` | Compiles an optimized production build |
| `npm run start` | Starts Next.js production server |
| `npm run lint` | Runs ESLint validation across all project files |

## Environment Variables

This project does not require external environment variables for baseline presentation.

## License

Provided by **Undiegravity**. See your purchase license for usage terms.
