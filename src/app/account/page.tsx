import Link from 'next/link';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import LogoutButton from '@/components/LogoutButton';

const sections = [
  {
    href: '/account',
    title: 'نظرة عامة',
    description: 'معلومات حسابك الأساسية وحالة الجلسة.',
  },
  {
    href: '/account/profile',
    title: 'الملف الشخصي',
    description: 'إدارة معلوماتك الشخصية.',
    disabled: true,
  },
  {
    href: '/account/security',
    title: 'الأمان',
    description: 'إعدادات كلمة المرور والجلسة.',
    disabled: true,
  },
  {
    href: '/account/contributions',
    title: 'مساهماتي',
    description: 'اقتراحاتك وتصميماتك ونماذجك ومشاركاتك في ASLAN.',
  },
  {
    href: '/account/orders',
    title: 'طلباتي',
    description: 'متابعة طلبات المنتجات.',
    disabled: true,
  },
  {
    href: '/account/services',
    title: 'خدماتي',
    description: 'متابعة طلبات الخدمات.',
    disabled: true,
  },
  {
    href: '/account/academy',
    title: 'الأكاديمية',
    description: 'الدورات والتكوينات المرتبطة بحسابك.',
    disabled: true,
  },
];

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
        <p className="muted">بوابتك الشخصية داخل منظومة ASLAN.</p>

        <div className="card" style={{ marginBottom: 24 }}>
          <h2 style={{ marginTop: 0 }}>
            {profile?.full_name || user.email || 'مستخدم ASLAN'}
          </h2>
          <p><strong>البريد الإلكتروني:</strong> {user.email || '—'}</p>
          {profile?.created_at && (
            <p className="muted">
              تاريخ إنشاء الحساب: {new Date(profile.created_at).toLocaleDateString('ar-DZ')}
            </p>
          )}
        </div>

        <div className="grid three">
          {sections.map((item) => (
            item.disabled ? (
              <article className="card" key={item.href} style={{ opacity: 0.65 }}>
                <span className="kicker">قريبًا</span>
                <h3>{item.title}</h3>
                <p className="muted">{item.description}</p>
              </article>
            ) : (
              <Link className="card" href={item.href} key={item.href}>
                <h3>{item.title}</h3>
                <p className="muted">{item.description}</p>
                <span className="gold">فتح القسم ↗</span>
              </Link>
            )
          ))}
        </div>

        <div style={{ marginTop: 28 }}>
          <LogoutButton />
        </div>
      </div>
    </main>
  );
}
