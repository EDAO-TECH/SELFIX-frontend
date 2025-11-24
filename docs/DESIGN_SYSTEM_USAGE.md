
# Design System Implementation Guide

## 1. Using Design Tokens
All tokens are integrated into Tailwind classes. Avoid hardcoding hex values or pixel sizes.

### Colors
- **Correct**: `bg-primary`, `text-muted-foreground`, `border-destructive`
- **Incorrect**: `bg-[#13C296]`, `text-gray-500`, `border-red-500`

### Spacing
- Use the 4px grid scale (1 = 4px).
- **Margins/Padding**: `p-4` (16px), `m-8` (32px), `gap-2` (8px).

## 2. Typography Hierarchy
- **Page Title**: `h1` (text-4xl/5xl font-bold)
- **Section Header**: `h2` (text-3xl font-bold)
- **Component Title**: `h3` (text-2xl font-semibold)
- **Body Text**: `p` (text-base text-muted-foreground)
- **Small Text**: `p` (text-sm text-muted-foreground)

## 3. Component Composition
Build complex UIs using `shadcn/ui` primitives and utility classes.

**Example: Feature Card**
