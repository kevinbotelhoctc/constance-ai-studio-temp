# Design System: Constance AI Studio
**Project ID:** 7100095418244507932

## 1. Visual Theme & Atmosphere

A polished, feminine-luxury aesthetic with a clean, modern feel. The design evokes sophistication and empowerment — reflecting the Constance brand's premium women's footwear identity. The atmosphere is airy with generous whitespace, balanced by vibrant magenta/fuchsia accents that bring energy and a fashion-forward attitude. The overall impression is of a premium SaaS tool built specifically for a fashion brand.

- **Mood:** Sophisticated, empowering, fashion-forward, clean
- **Density:** Spacious — generous padding and margins creating breathing room
- **Color Mode:** Light theme with bright surfaces and bold accent pops
- **Font:** Manrope — a modern geometric sans-serif conveying professionalism with warmth

## 2. Color Palette & Roles

| Color Name | Hex Code | Role |
|---|---|---|
| Vibrant Fuchsia | `#ec13b6` | Primary accent — sidebar active state, primary buttons, key highlights, links |
| Deep Evening Purple | `#1a1028` | Sidebar background — creates dramatic contrast for navigation |
| Pure Snow White | `#ffffff` | Main content background, card surfaces |
| Soft Cloud Gray | `#f5f5f7` | Page background behind content area, subtle surfaces |
| Warm Charcoal | `#1d1d1f` | Primary text — headings, body copy |
| Cool Slate Gray | `#6e6e73` | Secondary text — descriptions, metadata, timestamps |
| Gentle Mist Gray | `#e5e5ea` | Borders, dividers, input outlines |
| Soft Blush Pink | `#fce4f4` | Light accent backgrounds, tags, subtle highlights |
| Success Emerald | `#34c759` | Approved status badges |
| Warm Amber | `#ff9500` | Pending/review status badges |
| Danger Coral | `#ff3b30` | Rejected status, error states |

## 3. Typography Rules

- **Font Family:** Manrope (Google Fonts geometric sans-serif)
- **Headings (H1):** Bold (700), 28–32px, Warm Charcoal (#1d1d1f), tight letter-spacing (-0.02em)
- **Headings (H2):** Semi-Bold (600), 20–24px, Warm Charcoal
- **Body Text:** Regular (400), 14–16px, Warm Charcoal
- **Captions/Metadata:** Regular (400), 12–13px, Cool Slate Gray (#6e6e73)
- **Buttons:** Semi-Bold (600), 14–15px, uppercase or title-case depending on context
- **Line Height:** 1.5 for body text, 1.2 for headings

## 4. Component Stylings

### Buttons
- **Primary:** Pill-shaped with generously rounded corners (8px), Vibrant Fuchsia (#ec13b6) background, white text, medium shadow on hover. Transitions smoothly with a subtle scale-up on hover.
- **Secondary:** Transparent background with Vibrant Fuchsia border and text, same pill shape. Fills on hover.
- **Disabled:** Reduced opacity (0.5), muted gray background

### Cards / Containers
- **Post Cards:** White (#ffffff) background, gently rounded corners (12px), whisper-soft shadow (0 2px 8px rgba(0,0,0,0.06)). Subtle border (1px solid #e5e5ea). Hover lifts slightly with increased shadow.
- **Content Area:** Clean white or Soft Cloud (#f5f5f7) background with generous internal padding (24px–32px)

### Status Badges
- **Approved:** Small pill badge with Success Emerald background, white text
- **Pending:** Warm Amber background, white text
- **Rejected:** Danger Coral background, white text

### Inputs / Forms
- Background: White (#ffffff)
- Border: 1px solid Gentle Mist Gray (#e5e5ea)
- Rounded corners (8px)
- Focus state: Vibrant Fuchsia border with a soft fuchsia glow ring

## 5. Layout Principles

### Sidebar Navigation
- **Collapsed state (default):** Narrow (64–72px wide), showing only Material Design icons centered vertically. Deep Evening Purple (#1a1028) background.
- **Expanded state:** Slides out to ~240px revealing icon + text label. Smooth CSS transition (300ms ease).
- **Active item:** Vibrant Fuchsia (#ec13b6) icon and text, with a subtle fuchsia left-border indicator or background highlight.
- **Inactive items:** White/light gray icons and text at reduced opacity.
- **Sidebar icons (Material Symbols):** home, auto_awesome, visibility, account_circle

### Content Area
- Occupies remaining width after sidebar
- Max content width within the area for readability
- Consistent padding: 32px on all sides
- Cards arranged in a responsive grid (2–3 columns)

### Spacing
- Section gaps: 24–32px
- Card gaps: 16–20px
- Internal card padding: 16–20px
- Consistent 8px grid system

## 6. Design System Notes for Stitch Generation

When prompting Stitch to generate new screens for this project, ALWAYS include:

```
DESIGN SYSTEM (REQUIRED):
- Platform: Web, Desktop-first
- Theme: Light, sophisticated, fashion-forward, premium
- Background: Soft Cloud Gray (#f5f5f7) for page, Pure Snow White (#ffffff) for cards
- Primary Accent: Vibrant Fuchsia (#ec13b6) for buttons, active states, key highlights
- Sidebar: Deep Evening Purple (#1a1028) background, collapsible (collapsed by default showing only icons, ~64px wide)
- Text Primary: Warm Charcoal (#1d1d1f) for headings and body
- Text Secondary: Cool Slate Gray (#6e6e73) for metadata and descriptions
- Borders: Gentle Mist Gray (#e5e5ea) for cards, inputs, dividers
- Font: Manrope (Google Fonts), geometric sans-serif
- Buttons: Pill-shaped (8px radius), Fuchsia primary, subtle shadow
- Cards: White with 12px radius, soft shadow, 1px border
- Status Badges: Emerald (#34c759) approved, Amber (#ff9500) pending, Coral (#ff3b30) rejected
- Sidebar icons: Material Symbols — home, auto_awesome, account_circle
- Spacing: 8px grid, generous whitespace, 32px content padding
- Layout: Collapsible left sidebar (collapsed by default, icons only) + main content area. NO bottom navigation bar.
```
