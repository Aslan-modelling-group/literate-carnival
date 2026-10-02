'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const next = (() => {
    const value = searchParams.get('next');
    return value && value.startsWith('/') && !value.startsWith('//') ? value : '/';
  })();

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      const supabase = createClient();
      const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });

      if (signInError) {
        setError('بيانات الدخول غير صحيحة.');
        return;
      }

      router.replace(next);
      router.refresh();
    } catch {
      setError('تعذر تسجيل الدخول. حاول مرة أخرى.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="section" style={{ minHeight: '75vh', display: 'grid', placeItems: 'center' }}>
      <form className="card" onSubmit={submit} style={{ width: 'min(430px, 100%)', display: 'grid', gap: 14 }}>
        <span className="kicker">ASLAN ACCOUNT</span>
        <h1>تسجيل الدخول</h1>

        <input
          required
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="البريد الإلكتروني"
          autoComplete="email"
        />

        <input
          required
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="كلمة السر"
          autoComplete="current-password"
        />

        <button className="btn primary" type="submit" disabled={loading}>
          {loading ? 'جارٍ الدخول...' : 'دخول'}
        </button>

        {error && <p style={{ color: '#ef8b8b' }}>{error}</p>}

        <p>
          لا تملك حسابًا؟ <Link href="/register">إنشاء حساب</Link>
        </p>
      </form>
    </main>
  );
}
