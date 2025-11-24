import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vivfjwonwrgtuixredlq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpdmZqd29ud3JndHVpeHJlZGxxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxNDc3MTQsImV4cCI6MjA2OTcyMzcxNH0.q4EL3qeXHXF7EZd3UW_OeRkMSwk8RnlJbsAiQ9Q7tJc';

const customSupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default customSupabaseClient;

export { 
    customSupabaseClient,
    customSupabaseClient as supabase,
};
