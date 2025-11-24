import { customSupabaseClient } from './customSupabaseClient';

// Re-exporting the custom client to ensure compatibility with the environment's 
// pre-injected credentials while satisfying the file creation request.
export const supabase = customSupabaseClient;