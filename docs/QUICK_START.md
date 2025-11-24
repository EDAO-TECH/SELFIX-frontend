# Engineer Quick Start Guide

## Essential Commands
| Command | Description |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local development server (Port 3000) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

## Key File Locations
- **Entry Point**: `src/main.jsx`
- **Routes**: `src/App.jsx`
- **Auth Logic**: `src/context/AuthContext.jsx`
- **Business Logic**: `src/context/CertificationContext.jsx`
- **Data Access**: `src/hooks/useCertificationData.js`
- **Supabase Client**: `src/lib/supabaseClient.js`
- **Styles**: `src/index.css` (Tailwind directives)

## Critical Information
- **Database**: Managed via Supabase. Do not run local migrations without syncing.
- **Styling**: Use Tailwind utility classes. For complex components, use `cn()` utility to merge classes.
- **Icons**: Use `lucide-react` for all icons.
- **Components**: Use `shadcn/ui` components located in `src/components/ui/`.

## Adding a New Page
1. Create `src/pages/NewPage.jsx`.
2. Add route in `src/App.jsx`.
3. Add link in `src/components/Header.jsx` (if needed).