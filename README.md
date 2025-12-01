# The Metal App Landing Page

A modern, dark-themed landing page for The Metal App - a blind-connection platform that prioritizes personality and values over appearances.

## Features

- 🎨 Dark theme with metallic accents (Gold, Silver, Bronze)
- 📱 Responsive design (mobile-first)
- ✨ Smooth animations with Framer Motion
- 🚀 Built with Next.js 14+ (App Router)
- 💅 Styled with Tailwind CSS
- 📊 Animated statistics counters
- 🎯 Interactive FAQ accordion
- 📱 Phone mockup components

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Font:** Inter (via next/font)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
metal-website/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── HowItWorks.tsx      # Timeline section
│   ├── Comparison.tsx      # Comparison cards
│   ├── Stats.tsx           # Statistics section
│   ├── FeatureSection.tsx  # Two-column feature
│   ├── Testimonials.tsx    # User testimonials
│   ├── FAQ.tsx             # FAQ accordion
│   ├── FooterCTA.tsx       # Footer call-to-action
│   ├── Footer.tsx          # Footer
│   ├── PhoneMockup.tsx     # Phone mockup component
│   └── CTAButton.tsx       # App store buttons
└── public/                 # Static assets
```

## Design System

### Colors

- **Gold:** #FFD700
- **Silver:** #C0C0C0
- **Bronze:** #CD7F32
- **Dark:** #0A0A0A (primary), #1A1A1A (secondary)

### Typography

- **Font:** Inter
- **Headings:** Bold, large sizes
- **Body:** Regular weight, readable sizes

## Customization

### Update App Store Links

Edit `components/CTAButton.tsx` to update the App Store and Google Play links.

### Modify Content

All content is in the component files. Update text, statistics, and testimonials directly in the components.

### Change Colors

Update the color palette in `tailwind.config.ts` under the `theme.extend.colors` section.

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy!

## License

Private project - All rights reserved.

# metal-website
