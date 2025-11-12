# SoulToSoul

Engineering Agency + Intentional Product Studio + Team Wellbeing

A minimal, modern website built with Next.js 16, featuring oversized typography, smooth animations, and canvas-based interactive elements.

## Features

- **Oversized Brand Typography**: Large-scale "SOULTOSOUL" title with animated letter reveals
- **Smooth Animations**: Staggered fade-in animations with 3D transforms and glow effects
- **Interactive Canvas Wave**: Dynamic wave animation that responds to hover interactions
- **Scroll Indicator**: Smart scroll guide that updates based on current section
- **Fully Responsive**: Fluid typography using CSS clamp() for perfect scaling
- **Minimal Design**: Clean black & white aesthetic with subtle gradients
- **Custom Fonts**: Roboto Condensed for headlines, Open Sans for body text

## Tech Stack

- **Framework**: Next.js 16.0.1 (App Router)
- **Styling**: Tailwind CSS 3.4.17
- **Fonts**: Google Fonts (Roboto Condensed, Open Sans)
- **Animations**: CSS keyframes with cubic-bezier easing
- **Canvas**: Custom Canvas API animations (no heavy 3D libraries)

## Getting Started

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
soultosoul/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles & animations
├── components/
│   ├── wave-animation.tsx  # Canvas wave component
│   └── scroll-indicator.tsx # Scroll navigation
└── public/                 # Static assets
```

## Design System

### Typography

- **Headlines**: Roboto Condensed (weights: 300, 700)
- **Body**: Open Sans
- **Sizing**: Fluid with `clamp(min, ideal, max)`
- **Letter Spacing**: Tight (-0.02em) for headlines

### Colors

- **Background**: #000000 (black)
- **Foreground**: #EDEDED (off-white)
- **Borders**: white/10 to white/20 opacity
- **Gradients**: Blue→Purple, Purple→Pink, Pink→Red (20% opacity)

### Animations

1. **Letter Reveal**: 3D transform with blur and brightness
2. **Glow Pulse**: Continuous text-shadow animation
3. **Fade In Up**: Translate + scale + blur reveal

### Spacing

- **Horizontal**: 32px (px-8)
- **Vertical**: 96px (py-24) between sections
- **Max Width**: 80rem (7xl) for content

## Key Components

### WaveAnimation
Canvas-based flowing wave with:
- Multiple sine wave layers
- Spinning circular elements
- Pulsing dots
- Hover interaction (increased amplitude)

### ScrollIndicator
Smart scroll navigation that:
- Changes text based on current section
- Animated bouncing arrow
- Auto-hides at page bottom
- Smooth scroll behavior

## Sections

1. **Hero** (Sticky)
   - Oversized SOULTOSOUL title
   - Tagline and description
   - Primary CTAs

2. **What We Do**
   - Three-column service grid
   - Icons with gradient glows
   - Engineering, Strategy, Wellbeing

3. **Our Approach**
   - 90/10 Engineering
   - Complete Systems
   - Business-First Thinking
   - Wellbeing as Advantage

4. **Contact**
   - Call to action
   - Get in touch CTAs

## Deployment

This is a standard Next.js application that can be deployed to:
- Vercel (recommended)
- Netlify
- AWS
- Any Node.js hosting

## Inspiration

Design inspired by the Nexus project with:
- Oversized typography
- Minimal black & white aesthetic
- Canvas-based animations
- Smooth staggered reveals
- Subtle glow effects

## License

All rights reserved - SoulToSoul
