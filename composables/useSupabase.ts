import { createClient } from '@supabase/supabase-js'

const config = useRuntimeConfig();
const supabaseKey = config.SUPABASE_KEY
const supabaseUrl = config.SUPABASE_URL

export default function useSupabase() {
    const supabase = createClient(supabaseUrl,supabaseKey )
    
    return {
      //data
      supabase,
      //methods
    };
  }