const SUPABASE_URL = 'https://afufblastxlsqhbfwhdd.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmdWZibGFzdHhsc3FoYmZ3aGRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI4Mjc5NzgsImV4cCI6MjEwODQwMzk3OH0.j5197_xVq9yXFG3QmlZa710S637w1idC3b_cMjgw69I';

// Explicitly attach to window so all HTML files can access it globally
window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);