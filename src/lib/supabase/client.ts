import { createBrowserClient } from '@supabase/ssr';

const FALLBACK_URL = 'https://iwmhdwqikjqslzfcljay.supabase.co';
const FALLBACK_KEY = 'sb_publishable_CfzaVIikl6ezqLM41dm_eQ_MsrkTk9G';

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || FALLBACK_URL;
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    FALLBACK_KEY;

  return createBrowserClient(url, key);
}
