# Environment Variables

These variables must be set in your `.env` file (local) or your deployment platform's environment configuration.

| Variable | Required | Description | Example Value |
| :--- | :--- | :--- | :--- |
| `VITE_SUPABASE_URL` | Yes | The unique URL of your Supabase project. | `https://xyzproject.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | Yes | The public anonymous key for your Supabase project. Safe to expose in client bundle. | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` |

## Notes
- Variables prefixed with `VITE_` are exposed to the client-side code automatically by Vite.
- Do **NOT** include the `SERVICE_ROLE_KEY` in your client-side `.env` file. That key bypasses Row Level Security and should only be used in server-side Edge Functions.