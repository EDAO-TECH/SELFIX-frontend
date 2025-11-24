
# Accessibility Standards (WCAG 2.1 AA)

## 1. Color Contrast
- **Normal Text (Under 18pt)**: Minimum 4.5:1 contrast ratio against background.
- **Large Text (18pt+ / 14pt Bold)**: Minimum 3:1 contrast ratio.
- **UI Components**: Borders and icons must have 3:1 contrast against background.
- **Tools**: Use Chrome DevTools or Axe DevTools to verify.

## 2. Focus Indicators
- **Requirement**: All interactive elements (buttons, inputs, links) must have a visible focus state.
- **Implementation**: Use Tailwind `focus-visible:ring-2` utilities.
- **Do Not**: Never use `outline: none` without providing an alternative style.

## 3. Screen Reader Support
- **Images**: All `<img>` tags must have meaningful `alt` text or `alt=""` if decorative.
- **Forms**: All inputs must have associated `<label>` elements or `aria-label`.
- **Structure**: Use semantic HTML (`<nav>`, `<main>`, `<aside>`, `<header>`, `<footer>`) to define landmarks.

## 4. Keyboard Navigation
- **Tab Order**: Logical flow (top to bottom, left to right).
- **Traps**: Ensure no keyboard traps exist (user can tab in AND out of all regions).
- **Skip Links**: Include "Skip to main content" link for keyboard users.

## 5. Motion
- **Reduced Motion**: Respect `prefers-reduced-motion` media query.
- **Animation**: Avoid flashing content (seizure risk) - max 3 flashes per second.
- **Control**: Allow users to pause continuous animations.
