
# Gradient System

## 1. CTA Gradient
**Usage**: Primary buttons, hero text highlights, key interactive elements.
**Definition**: `linear-gradient(to right, #36FFB5, #13C296)`
**Tailwind**: `bg-gradient-to-r from-accent to-primary`

## 2. Dashboard Background
**Usage**: Full-screen backgrounds for admin/dashboard areas to reduce eye strain.
**Definition**: `linear-gradient(to bottom right, #0A2342, #0A0A0A)`
**Tailwind**: `bg-gradient-to-br from-[#0A2342] to-background`

## 3. Icon Glows
**Usage**: Behind icons in feature cards to create depth and emphasis.
**Definition**: `radial-gradient(circle, rgba(54,255,181,0.2) 0%, rgba(19,194,150,0) 70%)`
**Tailwind**: custom utility or inline style.

## 4. Status Gradients (Badges/Indicators)
- **Success**: `bg-gradient-to-r from-emerald-500/20 to-emerald-500/10`
- **Warning**: `bg-gradient-to-r from-amber-500/20 to-amber-500/10`
- **Critical**: `bg-gradient-to-r from-red-500/20 to-red-500/10`

## Usage Guidelines
- **Subtlety**: Gradients should enhance, not distract. Use low opacity for backgrounds.
- **Text**: When using gradients on text (`bg-clip-text`), ensure the fallback color matches contrast requirements.
- **Consistency**: Do not mix cool and warm gradients in the same immediate view area.
