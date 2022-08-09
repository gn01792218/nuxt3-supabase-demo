import { createClient } from "@supabase/supabase-js";

export default function useSupabase() {
  const config = useRuntimeConfig();
  const supabaseKey = config.SUPABASE_KEY;
  const supabaseUrl = config.SUPABASE_URL;
  const supabase = createClient(supabaseUrl, supabaseKey);

  return {
    //data
    supabase,
    //methods
  };
}
