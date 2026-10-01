import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

const FALLBACK_SUPABASE_URL = 'https://zyenfobyorjfwkdgeube.supabase.co';
const FALLBACK_SUPABASE_PUBLISHABLE_KEY =
  'sb_publishable_lVsRs4sp45ZM2BgnMnKATA_c5l8QxZH';

export async function createClient() {
  const cookieStore = await cookies();

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || FALLBACK_SUPABASE_URL;
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    FALLBACK_SUPABASE_PUBLISHABLE_KEY;

  return createServerClient(url, key, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {}
      },
    },
  });
}