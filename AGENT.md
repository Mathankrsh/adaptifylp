# Adaptify SEO Landing Page - Agent Documentation

## Project Overview
This project is a redesign of the Adaptify SEO landing page, focusing on a premium, clean, and highly automated aesthetic tailored for agencies. The goal was to modernize the UI, improve consistency, and showcase the features effectively.

## Branding & Design System

### Colors
- **Primary Brand Color**: `#4f47e6` (Indigo/Purple-ish Blue)
- **Backgrounds**: `bg-white` (Primary), `bg-neutral-50` (Secondary/Sections), `bg-neutral-900` (Hero Video Container)
- **Text**: `text-neutral-900` (Headings), `text-neutral-500` (Body/Subtext), `text-neutral-400` (Less important labels)
- **Borders**: `border-neutral-200` (Standard), `border-neutral-100` (Subtle)

### Typography
- **Font Family**: `Inter` (sans-serif)
- **Scale**:
    - **Hero Heading**: `text-[46px]` to `text-[56px]`, `font-[600]`, `tracking-[-0.04em]`, `leading-[1.1]`
    - **Section Headings**: `text-[42px]` to `text-[56px]`, `font-[600]`, `tracking-[-0.04em]`
    - **Subheadings (H3)**: `text-[20px]`, `font-[500]`, `leading-[32px]`, `tracking-[-0.02em]`
    - **Body**: `text-[18px]` to `text-[20px]`, `text-neutral-500`, `leading-[28px]`

### Core Design Elements
- **Grid Border System**: A defining feature where a global layout grid (vertical lines left/right) frames the content. This is implemented via a `GridLines` component (`max-w-[85rem]`) that sits wider than the content (`max-w-7xl`).
    - **Applied to**: Hero, Growth, Proposals, Process, Footer.
    - **Excluded from**: Testimonials, CTA.
- **Roundness**: Generous border radius (`rounded-[32px]`, `rounded-2xl`) for cards and containers.
- **Shadows**: Subtle shadows (`shadow-sm`, `shadow-lg` for CTAs) mixed with clean borders.
- **Minimalism**: Sections like "Process" use a clean `divide-x` grid layout instead of heavy cards.

## Development Journey

### 1. Initial Setup & Structure
- Analyzed the existing codebase and reorganized the `page.tsx` to include modular components: `Navbar`, `HeroSection`, `GrowthSection`, `ProposalsSection`, `ProcessSection`, `Testimonials`, `CTASection`, `Footer`.
- Integrated `lucide-react` for icons and `framer-motion` for smooth entrance animations.

### 2. Refined Hero Section
- **Typography Update**: Matched the specific font weights and sizes provided in design references (Inter, 56px headings).
- **Interactive CTA**: Replaced standard buttons with an "Interactive Demo" input card containing social proof (DiceBear avatars -> later updated to `demo-faces.webp`) and a "Try It Free" action.
- **Video Embed**: Added a high-quality YouTube embed (`tz1omwloexQ`) with auto-play on scroll behavior using `IntersectionObserver`.
- **Styling**: Removed the handwritten "Results in 60s" note to keep it clean.

### 3. Implementing the Grid Border System
- Created a `GridLines` component to render vertical guide lines.
- **Iteration 1**: Attempted global lines, but refined it to be section-specific for better control.
- **Iteration 2**: Extended the grid width (`max-w-[85rem]`) to avoid overlapping text content.
- Applied this system consistently to `Hero`, `Growth`, `Proposals`, `Process`, and `Footer` to create a unified "framed" look.

### 4. Section-Specific Improvements
- **Growth Section**: Implemented a clean, icon-based feature list with specific Cloudinary assets for visuals.
- **Process Section**: Refactored from card-based to a clean grid layout (`divide-x`) to match the minimal aesthetic.
- **Testimonials**: 
    - Implemented a "Marquee" effect for scrolling testimonials.
    - **G2 Badges**: Switched from individual badges to a single large scrolling image (`g2-badges.webp`) for a cleaner look.
- **Footer**: Aligned with the grid system and updated with proper branding/links.

### 5. Review & Final Polish
- Ensured responsiveness across all sections.
- Verified that the "Grid Border" flows seamlessly between sections.
- Confirmed asset usage (Logo, G2 Badges, Demo Faces).

## Assets Used
- `logo.svg`: Brand logo.
- `g2-badges.webp`: Horizontal strip of G2 awards.
- `demo-faces.webp`: User avatars for social proof.
- `Cloudinary Images`: Various feature screenshots for the Growth section.
