# Alfinder GTM Strategy Presentation Website

A stunning, executive-level presentation website for showcasing Alfinder's comprehensive Go-to-Market strategy and research findings.

## Features

- 📊 **Executive Dashboard**: Beautiful home page with key metrics, unit economics, and strategic summaries
- 🎨 **Startup/Vibrant Design**: Modern gradient-based UI with purple/pink color scheme
- 📱 **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- 🧭 **Sidebar Navigation**: Easy navigation to GTM stories and research artifacts
- 📈 **Interactive Charts**: Static visualizations for funnels, timelines, and metrics
- 🔄 **Auto-Update**: Content syncs automatically from markdown files in `_bmad-output`
- ⚡ **Fast**: Built with Next.js 16, React 19, and Tailwind CSS 4
- 🚀 **Deployed on Vercel**: One-click deployment with automatic updates

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building Content

The website content is automatically built from markdown files in the parent directory:

```bash
npm run build:content
```

This reads from:
- `../_bmad-output/GTM/Stories/*.md` (7 files)
- `../_bmad-output/planning-artifacts/**/*.md` (67+ files)

## Deployment

### Deploy to Vercel

1. Push to GitHub repository
2. Import project in Vercel
3. Deploy!

Vercel will automatically:
- Run the build script
- Build content from markdown files
- Deploy the static website
- Set up automatic updates on git push

### Manual Build

```bash
npm run build
npm start
```

## Content Updates

To update the website content:

1. Edit markdown files in `_bmad-output/`
2. Run `npm run build:content`
3. Commit and push changes

The website will automatically update on next deployment.

## Project Structure

```
gtm-presentation/
├── app/
│   ├── page.tsx                 # Home page (executive presentation)
│   ├── globals.css              # Global styles and theme
│   └── data/
│       └── content.json         # Auto-generated from markdown files
├── components/
│   ├── sidebar.tsx              # Navigation sidebar
│   ├── charts/
│   │   ├── funnel-chart.tsx     # Conversion funnel visualization
│   │   └── metric-card.tsx      # Key metric cards
│   └── ui/                      # Reusable UI components
├── scripts/
│   └── build-content.js         # Markdown → JSON converter
├── lib/
│   ├── utils.ts                 # Utility functions
│   └── markdown.ts              # Markdown file utilities
└── vercel.json                  # Vercel deployment config
```

## Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **React**: 19.2.3
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Charts**: Custom SVG + CSS
- **Deployment**: Vercel

---

Built with ❤️ for Alfinder's Go-to-Market success.
