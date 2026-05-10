import { createClient } from '@supabase/supabase-js'

// ─── Client Supabase ─────────────────────────────────────────────────────────
// Ces variables viennent du fichier .env.local
const supabaseUrl  = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey  = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)
