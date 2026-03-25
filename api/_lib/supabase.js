import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://cugwntuxnsupdtivezdl.supabase.co';
const SUPABASE_SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1Z3dudHV4bnN1cGR0aXZlemRsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDQyNzcyMCwiZXhwIjoyMDkwMDAzNzIwfQ.nlfvYn-6fp-39V4L3YcQUlL_hC5L80YrfC_gzXOLwJ0';

export const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);
