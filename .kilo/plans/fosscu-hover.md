# Plan: FOSSCU Hover Effect (MDB Studio Inspired)

## Overview
Create a standalone `fosscu-hover.html` file in the project root with a premium text hover effect for "FOSSCU", inspired by the clean, minimal typography style of mdb.studio.

## Design Analysis (from mdb.studio)
- Dark/black background (`bg-black`)
- Clean Matter font with `font-light` weight, negative letter-spacing (`tracking-[-0.02em]`)
- Minimal, premium aesthetic with smooth transitions
- The site uses `transition-colors` on interactive elements

## Implementation Plan

### File
- **Location**: `C:\Users\Shivam Kumar\OneDrive\Desktop\FOSSC\fosscu-hover.html` (standalone HTML file)
- Single self-contained HTML file with embedded CSS + JS

### Fonts (Google Fonts)
1. **Inter** — clean sans-serif (default state)
2. **Space Mono** — monospace (hover state)
3. **Playfair Display** — bold serif (hover state, per-letter random selection for variety)

### Default State
- `font-family: Inter, sans-serif`
- `font-weight: 300` (light)
- `color: #eee` (off-white on black)
- `letter-spacing: 0.15em`
- `font-size: clamp(60px, 12vw, 180px)`

### Hover Animation (per-letter staggered)
Each letter wrapped in a `<span>` with `transition-delay` based on index:
- **Font family**: Inter → random choice between Space Mono / Playfair Display
- **Font weight**: 300 → 700
- **Letter-spacing**: `0.15em` → `0.35em`
- **Color**: `#eee` → gradient-like shift (white → soft cyan/accent per letter)
- **Scale**: 1 → 1.05 (slight scale-up)
- **Y-offset**: 0 → subtle upward translate

### Mouse Leave (reverse)
- Same transitions in reverse with staggered delays (left-to-right dissolution)
- CSS `transition` with `cubic-bezier` easing for smooth morphing feel

### Layout
- Full-viewport dark background (`#0a0a0a`)
- Centered "FOSSCU" text
- Subtle ambient glow/gradient behind text for depth
- Cursor: pointer on the text area

### CSS Approach
- `display: inline-block` on each letter `<span>` for transform support
- `transition: all 0.5s cubic-bezier(...)` for premium easing
- CSS custom properties for per-letter delays

### JS Responsibilities
- Split "FOSSCU" into individual `<span>` letters on load
- On `mouseenter`: apply staggered delays and toggle hover class
- On `mouseleave`: reverse staggered delays, remove hover class
- Randomly assign font (Space Mono or Playfair Display) per letter on hover

## Verification
- Open `fosscu-hover.html` in a browser
- Hover over each letter and verify smooth staggered animation
- Move mouse away and verify smooth reverse animation
- Check on dark background that colors pop
