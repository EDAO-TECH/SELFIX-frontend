# Component Map

## Core Components

### `App.jsx`
- **Role**: Root component, Router definition, Context Provider wrapper.
- **Integrations**: `AuthProvider`, `CertificationProvider`, `Toaster`.

### `Layout.jsx`
- **Role**: Main layout wrapper.
- **Children**: `Header`, `Footer`, `main` content area.

### `Header.jsx`
- **Role**: Top navigation bar.
- **State**: `isOpen` (mobile menu), `isScrolled` (styling).
- **Props**: None.

### `Footer.jsx`
- **Role**: Site footer with links.
- **Props**: None.

## Feature Components

### `Breadcrumb.jsx`
- **Role**: Navigation trail.
- **Props**: `items` (Array of { label, path }).

### `AdminDashboard.jsx`
- **Role**: Admin view for user progress.
- **State**: `users` (Array), `loading` (Boolean), `searchTerm` (String).
- **Integrations**: `supabase.from('users')`, `supabase.from('certifications')`.

## Page Components

### `Level1Page.jsx` / `Level2Page.jsx` / `Level3Page.jsx`
- **Role**: Certification detail and progress tracking pages.
- **Integrations**: 
    - `useCertification()` context for progress data.
    - `useAuth()` for user status.
- **Sub-components**: `Card`, `Progress`, `Button`, `Breadcrumb`.

## Context Providers

### `AuthContext.jsx`
- **State**: `user`, `session`, `loading`.
- **Exports**: `signIn`, `signUp`, `signOut`.
- **Supabase**: `auth.getSession`, `auth.onAuthStateChange`.

### `CertificationContext.jsx`
- **State**: `certificationState` (Object with level1, level2, level3 data).
- **Exports**: `updateModuleStatus`.
- **Integrations**: `useCertificationData` hook.

## UI Components (shadcn/ui)
Located in `src/components/ui/`:
- `button.jsx`
- `card.jsx`
- `progress.jsx`
- `table.jsx`
- `toast.jsx`
- `input.jsx`