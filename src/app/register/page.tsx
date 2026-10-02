'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';

export default function RegisterPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setMessage('');

    if (password.length < 6) {
      setError('كلمة السر يجب أن تحتوي على 6 أحرف على الأقل.');
      return;
    }

    if (password !== confirmPassword) {
      setError('كلمتا السر غير متطابقتين.');
      return;
    }

    setLoading(true);

    try {
      const supabase = createClient();
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName.trim() },
          emailRedirectTo: `${window.location.origin}/auth/callback?next=/`,
        },
      });

      if (signUpError) {
        setError(signUpError.message);
        return;
      }

      if (data.session) {
        window.location.href = '/';
        return;
      }

      setMessage('تم إنشاء طلب الحساب. تحقق من بريدك الإلكتروني لتأكيد الحساب.');
      setPassword('');
      setConfirmPassword('');
    } catch {
      setError('تعذر إنشاء الحساب. حاول مرة أخرى.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="section" style={{ minHeight: '75vh', display: 'grid', placeItems: 'center' }}>
      <form
        className="card"
        onSubmit={submit}
        style={{ width: 'min(430px, 100%)', display: 'grid', gap: 14 }}
      >
        <span className="kicker">ASLAN ACCOUNT</span>
        <h1>إنشاء حساب</h1>
        <p>حساب واحد يمكن أن يكون أساس وصولك إلى خدمات ASLAN المستقبلية.</p>

        <input
          required
          type="text"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          placeholder="الاسم الكامل"
          autoComplete="name"
        />

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
          autoComplete="new-password"
          minLength={6}
        />

        <input
          required
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          placeholder="تأكيد كلمة السر"
          autoComplete="new-password"
          minLength={6}
        />

        <button className="btn primary" type="submit" disabled={loading}>
          {loading ? 'جارٍ إنشاء الحساب...' : 'إنشاء الحساب'}
        </button>

        {message && <p>{message}</p>}
        {error && <p style={{ color: '#ef8b8b' }}>{error}</p>}

        <p>
          لديك حساب بالفعل؟ <Link href="/admin/login">تسجيل الدخول</Link>
        </p>
      </form>
    </main>
  );
}
