# Button Workflows & Interactions

## 1. Header Navigation

### "Book Demo" Button
- **Location**: Top right of Header.
- **Type**: `Link` (React Router).
- **Destination**: `/contact`.
- **Action**: Navigates user to contact form.
- **Data Flow**: None.

### "Certifications" Dropdown Items
- **Location**: Header > Resources > Certifications.
- **Items**: Academy, Level 1, Level 2, Level 3.
- **Action**: Navigates to respective routes (`/academy`, `/certification/level1`, etc.).

## 2. Level Pages (Level1Page, Level2Page, Level3Page)

### Module List Item (Clickable Row)
- **Location**: Inside "Course Modules" card.
- **Trigger**: `onClick` event on the div.
- **Function**: `updateModuleStatus(level, moduleId)`.
- **Workflow**:
    1.  User clicks module row.
    2.  `CertificationContext` triggers optimistic UI update (toggles checkmark).
    3.  `useCertificationData` hook calls Supabase `upsert` on `user_modules`.
    4.  Backend calculates new progress.
    5.  `certifications` table is updated with new percentage.
    6.  UI receives confirmation and re-renders progress bar.

### "Download Certificate" Button
- **Location**: Bottom of Progress Card (Visible only when progress = 100%).
- **Trigger**: `onClick`.
- **Function**: (Placeholder) Should trigger PDF generation/download.
- **Current State**: Visual only.

### "Next Level" Button
- **Location**: Bottom CTA section.
- **Action**: Navigates to the next level route (e.g., Level 1 -> Level 2).

## 3. Admin Dashboard

### "Export Report" Button
- **Location**: Top right of Admin Dashboard.
- **Trigger**: `onClick` -> `exportCSV()`.
- **Workflow**:
    1.  Iterates through `filteredUsers` state.
    2.  Formats data into CSV string (ID, Name, Email, Levels).
    3.  Creates a Blob and temporary `<a>` tag.
    4.  Triggers browser download of `certification_report.csv`.

### Search Input
- **Location**: Top of User Table.
- **Trigger**: `onChange`.
- **Workflow**: Updates `searchTerm` state -> Filters `users` array -> Re-renders Table.

## 4. Auth Forms (Conceptual)

### "Sign In" Button
- **Location**: Login Form.
- **Function**: `signIn(email, password)`.
- **Workflow**: Calls `supabase.auth.signInWithPassword` -> Updates `AuthContext` -> Redirects to previous page.