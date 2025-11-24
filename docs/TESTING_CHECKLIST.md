# Pre-Deployment Testing Checklist

## 1. Authentication Flow
- [ ] **Sign Up**: Create a new user account. Verify entry in Supabase `auth.users` and `public.users`.
- [ ] **Sign In**: Log in with valid credentials. Verify redirection and header state change.
- [ ] **Sign Out**: Click logout. Verify session is cleared and protected routes are inaccessible.
- [ ] **Persistence**: Refresh page. Verify user remains logged in.

## 2. Certification Logic
- [ ] **Initial Load**: Visit Level 1 page. Verify progress is 0% and status is "not_started".
- [ ] **Module Completion**: Click a module. Verify checkmark appears and progress bar updates.
- [ ] **Persistence**: Refresh page. Verify module remains checked.
- [ ] **Completion**: Check all modules. Verify progress hits 100% and "Download Certificate" button appears.
- [ ] **Cross-Level**: Switch to Level 2. Verify Level 1 progress does not bleed over.

## 3. Admin Dashboard
- [ ] **Access**: Visit `/admin/dashboard`. Verify table loads.
- [ ] **Data Accuracy**: Verify the user created in step 1 appears with correct progress percentages.
- [ ] **Search**: Type user email. Verify table filters correctly.
- [ ] **Export**: Click "Export Report". Verify CSV downloads and contains correct data.

## 4. Responsive Design
- [ ] **Mobile Menu**: Open site on mobile width (<768px). Verify hamburger menu works.
- [ ] **Tables**: Check Admin table on mobile. Verify horizontal scroll or stack.
- [ ] **Cards**: Check Level page cards on mobile.

## 5. Edge Cases
- [ ] **Network Failure**: Disconnect internet and click a module. Verify error toast appears.
- [ ] **Unauthenticated Access**: Try to click a module while logged out. Verify "Please sign in" prompt or redirection.