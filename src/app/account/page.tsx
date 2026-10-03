import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import LogoutButton from '@/components/LogoutButton';

export default async function AccountPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login?next=/account');
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('full_name, role, created_at')
    .eq('id', user.id)
    .maybeSingle();

  return (
    <main className="section" style={{ minHeight: '70vh' }}>
      <div className="wrap">
        <span className="kicker">ASLAN ACCOUNT</span>
        <h1>حسابي</h1>
        <p>أنت مسجل الدخول حاليًا.</p>

        <div className="card" style={{ maxWidth: 620, display: 'grid', gap: 12 }}>
          <h2>{profile?.full_name || user.email || 'مستخدم ASLAN'}</h2>
          <p><strong>البريد الإلكتروني:</strong> {user.email || '—'}</p>
          <p><strong>الحساب:</strong> مستخدم</p>
          <p><strong>معرّف الحساب:</strong> {user.id}</p>
          {profile?.created_at && (
            <p><strong>تاريخ إنشاء الملف:</strong> {new Date(profile.created_at).toLocaleDateString('ar-DZ')}</p>
          )}
          <div style={{ marginTop: 8 }}>
            <LogoutButton />
          </div>
        </div>
      </div>
    </main>
  );
}
