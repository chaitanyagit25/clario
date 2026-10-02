# Clario Design System

## Visual Philosophy

Clario's interface should feel **minimal, refined, and trustworthy** — the kind of tool a business owner opens daily and never thinks twice about. Every visual choice exists to improve clarity, not to impress.

**Guiding principles:**

1. **Restraint over decoration** — If an element doesn't aid comprehension, remove it.
2. **Consistency over novelty** — Reuse tokens; don't invent one-off styles.
3. **Hierarchy through typography and spacing** — Not through color or motion.
4. **Accessibility first** — All text meets WCAG AA contrast ratios (4.5:1 body, 3:1 large text).

---

## Color Tokens

### Backgrounds

| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#FAFAF8` | Page background — warm off-white |
| `--bg-secondary` | `#F2F1EE` | Sections, cards, sidebars |
| `--bg-tertiary` | `#E8E7E4` | Hover states, subtle highlights |
| `--bg-inverse` | `#1C1C1A` | Dark sections (footer, modals) |

### Text

| Token | Value | Usage |
|---|---|---|
| `--text-primary` | `#1C1C1A` | Headings, primary body text |
| `--text-secondary` | `#5C5C57` | Supporting text, descriptions |
| `--text-tertiary` | `#8A8A85` | Placeholders, captions, metadata |
| `--text-inverse` | `#FAFAF8` | Text on dark backgrounds |

### Accent

| Token | Value | Usage |
|---|---|---|
| `--accent` | `#2A7D7B` | Primary actions, links, active states |
| `--accent-hover` | `#236866` | Hovered primary actions |
| `--accent-subtle` | `#E6F0F0` | Accent-tinted backgrounds (badges, tags) |

### Borders

| Token | Value | Usage |
|---|---|---|
| `--border-default` | `#DDDDD8` | Card borders, dividers |
| `--border-strong` | `#C4C4BF` | Focused inputs, emphasized dividers |

### Feedback / Status

| Token | Value | Usage |
|---|---|---|
| `--status-success` | `#3B7A57` | Success messages, online indicators |
| `--status-warning` | `#B8860B` | Warnings, pending states |
| `--status-error` | `#C4453C` | Errors, destructive actions |
| `--status-info` | `#2A7D7B` | Informational (reuses accent) |

---

## Typography

**Font stack:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

Load Inter from Google Fonts (weights 400, 500, 600).

| Token | Size | Weight | Line-height | Letter-spacing | Usage |
|---|---|---|---|---|---|
| `--font-display` | 2.25rem (36px) | 600 | 1.2 | -0.02em | Hero headings |
| `--font-heading-1` | 1.75rem (28px) | 600 | 1.3 | -0.015em | Page titles |
| `--font-heading-2` | 1.25rem (20px) | 600 | 1.35 | -0.01em | Section headings |
| `--font-heading-3` | 1.0rem (16px) | 600 | 1.4 | 0 | Card titles, labels |
| `--font-body` | 0.9375rem (15px) | 400 | 1.6 | 0 | Body text |
| `--font-body-small` | 0.8125rem (13px) | 400 | 1.5 | 0 | Captions, metadata |
| `--font-mono` | 0.8125rem (13px) | 400 | 1.5 | 0 | Code, data values |

**Mono font stack:** `'JetBrains Mono', 'Fira Code', 'Consolas', monospace`

---

## Spacing Scale

Based on a 4px grid. Use these tokens instead of arbitrary pixel values.

| Token | Value |
|---|---|
| `--space-1` | 0.25rem (4px) |
| `--space-2` | 0.5rem (8px) |
| `--space-3` | 0.75rem (12px) |
| `--space-4` | 1rem (16px) |
| `--space-5` | 1.25rem (20px) |
| `--space-6` | 1.5rem (24px) |
| `--space-8` | 2rem (32px) |
| `--space-10` | 2.5rem (40px) |
| `--space-12` | 3rem (48px) |
| `--space-16` | 4rem (64px) |
| `--space-20` | 5rem (80px) |
| `--space-24` | 6rem (96px) |

---

## Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 4px | Small elements (tags, badges) |
| `--radius-md` | 6px | Buttons, inputs, cards |
| `--radius-lg` | 8px | Modals, larger containers |
| `--radius-full` | 9999px | Avatars, status dots only |

---

## Shadows

| Token | Value | Usage |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(28,28,26,0.05)` | Subtle lift (cards at rest) |
| `--shadow-md` | `0 2px 8px rgba(28,28,26,0.08)` | Elevated cards, dropdowns |
| `--shadow-lg` | `0 8px 24px rgba(28,28,26,0.12)` | Modals, popovers |

---

## Layout

| Token | Value | Usage |
|---|---|---|
| `--container-max` | 1120px | Max content width |
| `--container-narrow` | 720px | Text-heavy pages, docs |
| `--sidebar-width` | 260px | Admin sidebar |

---

## Interaction States

- **Hover:** Shift background by one tier (e.g. `--bg-primary` → `--bg-secondary`).
- **Focus:** 2px solid `--accent` outline with 2px offset. Never remove focus rings.
- **Active/Pressed:** Darken accent by one step (`--accent` → `--accent-hover`).
- **Disabled:** 50% opacity, `cursor: not-allowed`.

---

## Component Guidelines (for future reference)

### Buttons
- **Primary:** `--accent` background, `--text-inverse` text, `--radius-md`.
- **Secondary:** Transparent background, `--border-default` border, `--text-primary` text.
- **Destructive:** `--status-error` background, `--text-inverse` text.
- Minimum touch target: 36px height.
- Horizontal padding: `--space-4` to `--space-5`.

### Inputs
- Background: `--bg-primary`.
- Border: `--border-default`, changing to `--accent` on focus.
- Height: 40px.
- Padding: `--space-3` horizontal.

### Cards
- Background: `--bg-primary`.
- Border: 1px solid `--border-default`.
- Radius: `--radius-md`.
- Padding: `--space-5` to `--space-6`.
- Shadow: `--shadow-sm` at rest, `--shadow-md` on hover (only if interactive).

---

## Responsive Breakpoints

| Name | Width | Behaviour |
|---|---|---|
| Mobile | < 640px | Single column, stacked layout |
| Tablet | 640–1023px | Condensed grid, collapsible sidebar |
| Desktop | >= 1024px | Full layout with sidebar |

---

## Anti-patterns (do not use)

- Purple / violet gradients
- Neon colors or excessive glow
- Glassmorphism (frosted-glass blur effects)
- Decorative blobs, floating orbs, or abstract SVG shapes
- Pill-shaped buttons (use `--radius-md` instead)
- Fake testimonials, fabricated logos, or made-up statistics
- Animations that don't serve a functional purpose
