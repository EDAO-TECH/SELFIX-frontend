# Troubleshooting Guide

## Common Issues

### 1. "VITE_SUPABASE_URL is not defined"
**Symptoms**: App crashes on load, white screen.
**Cause**: Missing `.env` file or variables not prefixed with `VITE_`.
**Solution**:
1. Ensure `.env` exists in project root.
2. Ensure variables are named exactly `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
3. Restart Vite server (`npm run dev`).

### 2. Database Permissions Error (403/401)
**Symptoms**: Data doesn't load, "Error fetching progress" toasts.
**Cause**: Row Level Security (RLS) policies are blocking access.
**Solution**:
1. Go to Supabase Dashboard > Authentication > Policies.
2. Ensure `users` table has "Enable read access for authenticated users".
3. Ensure `user_modules` has "Enable insert/update for users based on user_id".

### 3. Module Progress Not Saving
**Symptoms**: UI updates but reverts on refresh.
**Cause**: `upsert` failing due to missing unique constraint or RLS.
**Solution**:
1. Check browser console for red API errors.
2. Verify `user_modules` table has a unique constraint on `(user_id, module_id)`.

### 4. Admin Dashboard Empty
**Symptoms**: "No users found" or infinite loading.
**Cause**: The current user does not have admin permissions or RLS is blocking reading *other* users.
**Solution**:
1. Check RLS policy on `users` table. It likely defaults to "Users can view their own data".
2. Create a specific policy: `CREATE POLICY "Admins can view all" ON users FOR SELECT USING (auth.jwt() ->> 'role' = 'admin');`

## Debugging Procedures
1.  **Browser DevTools**: Check Network tab for failed fetch requests.
2.  **Supabase Logs**: Check "Postgres Logs" in Supabase Dashboard for SQL errors.
3.  **Console Logging**: The `useCertificationData` hook logs errors to the console.