
# Component Library Documentation

## 1. Button
**Path**: `@/components/ui/button`

### Variants
- **Default**: Solid Primary color. Main actions (Save, Submit).
- **Secondary**: Grey background. Secondary actions (Cancel, Back).
- **Outline**: Border only. Low priority actions.
- **Destructive**: Red background. Dangerous actions (Delete, Stop).
- **Ghost**: Transparent. Used in toolbars or inside other components.

### States
- **Hover**: Slight brightness increase or opacity change.
- **Active/Pressed**: Scale down (0.98) transform.
- **Disabled**: 50% opacity, pointer-events-none.
- **Focus**: Visible Ring (2px offset, 2px width).

## 2. Input
**Path**: `@/components/ui/input`

### Features
- Standard text, email, password, number types.
- **Validation**: Accepts `aria-invalid` and error styling classes.
- **Focus**: Matches Button focus ring style.

## 3. Card
**Path**: `@/components/ui/card`

### Variants
- **Default**: White/Dark background, 1px border, small shadow.
- **Elevated (`hover:shadow-md`)**: For interactive cards.
- **Glass (`card-glass` class)**: Backdrop blur, translucent background.

### Subcomponents
- `CardHeader`: Padding wrapper for title.
- `CardTitle`: H3 styling.
- `CardContent`: Main body padding.
- `CardFooter`: Bottom action area.

## 4. Badge
**Class**: `.badge` (CSS Component)

### Variants
- **Success**: Green background/text. Status: Active, Completed, Healthy.
- **Warning**: Amber background/text. Status: Drift, Pending, Warning.
- **Destructive**: Red background/text. Status: Error, Failed, Critical.
- **Outline**: Border only. Status: Neutral, Draft.

## 5. Table
**Path**: `@/components/ui/table`

### Structure
- `TableHeader`: Sticky top, muted background.
- `TableRow`: Border-bottom, hover state.
- `TableCell`: Padding 1rem, align-middle.

## 6. Hero Block
**Usage**: Main landing page headers.
**Style**: Full width, centered content, optional background gradient/image.
**Typography**: H1 for title, Body Large for subtitle.
