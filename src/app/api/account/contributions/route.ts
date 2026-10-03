import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

const allowedTypes = new Set(['suggestion', 'design', 'model', 'post']);

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'يجب تسجيل الدخول أولًا.' }, { status: 401 });
    }

    const body = await request.json();
    const type = typeof body.type === 'string' ? body.type : '';
    const title = typeof body.title === 'string' ? body.title.trim() : '';
    const content = typeof body.content === 'string' ? body.content.trim() : '';

    if (!allowedTypes.has(type) || !title || !content) {
      return NextResponse.json({ error: 'أكمل نوع المساهمة والعنوان والمحتوى.' }, { status: 400 });
    }

    if (title.length > 160 || content.length > 5000) {
      return NextResponse.json({ error: 'تجاوزت المساهمة الحد المسموح للنص.' }, { status: 400 });
    }

    const { error } = await supabase.from('contributions').insert({
      user_id: user.id,
      type,
      title,
      content,
    });

    if (error) {
      return NextResponse.json({ error: 'تعذر حفظ المساهمة.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'تعذر معالجة المساهمة.' }, { status: 500 });
  }
}
