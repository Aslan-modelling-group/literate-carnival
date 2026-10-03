import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const fullName = typeof body.fullName === 'string' ? body.fullName.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const password = typeof body.password === 'string' ? body.password : '';

    if (!fullName || !email || password.length < 6) {
      return NextResponse.json(
        { error: 'بيانات التسجيل غير مكتملة أو كلمة السر قصيرة.' },
        { status: 400 },
      );
    }

    const supabase = await createClient();
    const origin = new URL(request.url).origin;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
        emailRedirectTo: origin + '/auth/callback?next=/',
      },
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({
      ok: true,
      hasSession: Boolean(data.session),
      message: data.session
        ? 'تم إنشاء الحساب.'
        : 'تم إنشاء طلب الحساب. تحقق من بريدك الإلكتروني لتأكيد الحساب.',
    });
  } catch {
    return NextResponse.json(
      { error: 'تعذر الاتصال بخدمة الحسابات.' },
      { status: 500 },
    );
  }
}
