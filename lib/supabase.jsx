import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://ebvgxfuqqodscbvfcrnr.supabase.co'
export const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVidmd4ZnVxcW9kc2NidmZjcm5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3ODY3MTksImV4cCI6MjA0NTM2MjcxOX0.tijrPPSDjaznxRiMTcY6q6KLvPbMGcQmM9gbqxbFxQg'

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
