import Link from 'next/link';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

const contributionTypes = [
  {
    title: 'اقتراح',
    description: 'فكرة لتحسين منتج أو خدمة أو تجربة ASLAN.',
  },
  {
    title: 'تصميم',
    description: 'تصميم أو تصور يمكن مشاركته مع ASLAN.',
  },
  {
    title: 'نموذج',
    description: 'نموذج أو ملف أو عمل تريد عرضه للمراجعة.',
  },
  {
    title: 'مشاركة',
    description: 'محتوى أو تجربة أو معرفة مفيدة لمنظومة ASLAN.',
  },
];

export default async function ContributionsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login?next=/account/contributions');
  }

  return (
    <main className="section" style={{ minHeight: '70vh' }}>
      <div className="wrap">
        <span className="kicker">ASLAN CONTRIBUTIONS</span>
        <h1>مساهماتي</h1>
        <p className="muted">
          مساحة مخصصة لكل ما تضيفه إلى منظومة ASLAN.
        </p>

        <div className="grid three" style={{ marginTop: 28 }}>
          {contributionTypes.map((item) => (
            <article className="card" key={item.title}>
              <h2>{item.title}</h2>
              <p className="muted">{item.description}</p>
              <span className="gold">سيتم التفعيل في المرحلة التالية</span>
            </article>
          ))}
        </div>

        <div className="card" style={{ marginTop: 28 }}>
          <span className="kicker">سجل المساهمات</span>
          <h2>لا توجد مساهمات بعد</h2>
          <p className="muted">
            عندما يبدأ المستخدم بإرسال مساهمات، ستظهر هنا مع حالتها:
            قيد المراجعة، تحتاج تعديل، مقبولة أو منشورة.
          </p>
        </div>

        <div style={{ marginTop: 24 }}>
          <Link className="btn secondary" href="/account">
            ← العودة إلى حسابي
          </Link>
        </div>
      </div>
    </main>
  );
}
