
# Unified Style Guide: Selfix ProHealers

## 1. Typography System

Our typography system is designed for clarity, readability, and technical precision.

### Font Families
- **Primary (Body/UI)**: `Inter` (sans-serif). Used for all UI elements, body text, and general content.
- **Secondary (Code/Technical)**: `IBM Plex Mono` (monospace). Used for code snippets, logs, hashes, API responses, and technical data.

### Heading Scale (Desktop)
All headings use `Inter`.

| Level | Size (rem/px) | Weight | Line Height | Letter Spacing | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **H1** | 3.75 / 60 | 700 (Bold) | 1.1 | -0.02em | Hero headlines, major page titles |
| **H2** | 3.0 / 48 | 700 (Bold) | 1.2 | -0.01em | Section titles, feature blocks |
| **H3** | 2.25 / 36 | 600 (SemiBold) | 1.25 | -0.01em | Card titles, subsection headers |
| **H4** | 1.875 / 30 | 600 (SemiBold) | 1.3 | 0 | Widget titles, small section headers |
| **H5** | 1.5 / 24 | 500 (Medium) | 1.4 | 0 | Modal titles, group headers |
| **H6** | 1.25 / 20 | 500 (Medium) | 1.4 | 0 | Small headers, labels |

### Body Text Variants

| Variant | Size (rem/px) | Weight | Line Height | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Body Large** | 1.125 / 18 | 400 (Regular) | 1.6 | Introductions, lead paragraphs |
| **Body Base** | 1.0 / 16 | 400 (Regular) | 1.5 | Standard content, form inputs |
| **Body Small** | 0.875 / 14 | 400 (Regular) | 1.5 | Metadata, captions, tooltips |
| **Body Tiny** | 0.75 / 12 | 500 (Medium) | 1.5 | Badges, small labels |

### Code Styles
Uses `IBM Plex Mono`.

| Variant | Size | Usage |
| :--- | :--- | :--- |
| **Code Block** | 0.875rem | Multi-line code snippets, logs |
| **Inline Code** | 0.875em | Variable names, paths, hashes |

## 2. Accessibility Rules

1.  **Contrast**: All text must meet WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text).
2.  **Focus Indicators**: All interactive elements must have a visible focus ring (Custom Emerald Ring).
3.  **Semantic HTML**: Use proper heading hierarchy (h1 -> h6). Do not skip levels.
4.  **Motion**: Respect `prefers-reduced-motion` settings.
