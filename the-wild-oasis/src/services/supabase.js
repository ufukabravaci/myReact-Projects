import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zutllkkkwnoejsnjhxii.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1dGxsa2trd25vZWpzbmpoeGlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4NzM2OTYsImV4cCI6MjAxNDQ0OTY5Nn0.PaOi-M6UCg3Hs5IrstehIzR3ybeK08JYpbnaPd6B-vE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
