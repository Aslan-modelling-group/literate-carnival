import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* 1. شريط التنقل العلوي (Header / Navigation) */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-bold text-slate-950 text-xl shadow-lg shadow-amber-500/20">
              A
            </div>
            <div>
              <span className="text-xl font-black tracking-wider bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
                ASLAN MODELLING GROUP
              </span>
              <span className="block text-xs text-slate-400 tracking-widest font-medium">
                تنجيد • خياطة • تفصيل
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 space-x-reverse text-sm font-medium text-slate-300">
            <Link href="/market" className="hover:text-amber-400 transition-colors">السوق والأثاث</Link>
            <Link href="/services" className="hover:text-amber-400 transition-colors">خدمات المقاولات</Link>
            <Link href="/academy" className="hover:text-amber-400 transition-colors">الأكاديمية المهنية</Link>
            <Link href="/talent" className="hover:text-amber-400 transition-colors">بنك الكفاءات</Link>
            <Link href="/partners" className="hover:text-amber-400 transition-colors">الشركاء</Link>
            <Link href="/company" className="hover:text-amber-400 transition-colors">عن الشركة</Link>
          </nav>

          <div className="flex items-center space-x-4 space-x-reverse">
            <Link
              href="/auth/login"
              className="px-4 py-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
            >
              تسجيل الدخول
            </Link>
            <Link
              href="/academy"
              className="px-5 py-2.5 text-sm font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
            >
              ابدأ التعلم الآن
            </Link>
          </div>
        </div>
      </header>

      {/* 2. قسم البطل الرئيسي (Hero Section) */}
      <section className="relative overflow-hidden py-24 lg:py-32 border-b border-slate-800/60 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            نظام رقمي متكامل • إطلاق النسخة التشغيلية الأولى V1
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-tight">
            نبني الجودة. <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">نصنع الثقة.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed font-light">
            مجموعة أعمال رائدة تجمع بين صناعة الأثاث الفاخر وتقنيات الكابيتوني، خدمات المقاولات والتشطيبات الدقيقة، والأكاديمية المهنية المتخصصة لتأهيل وصقل الكفاءات.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/market"
              className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl shadow-xl shadow-amber-500/20 transition-all text-center"
            >
              تصفح السوق والأثاث
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold rounded-xl transition-all text-center"
            >
              اطلب خدمات المقاولات
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-slate-800/80 text-center">
            <div>
              <div className="text-3xl font-black text-amber-400 mb-1">تنتج</div>
              <div className="text-sm text-slate-400">أثاث وتنجيد راقٍ</div>
            </div>
            <div>
              <div className="text-3xl font-black text-amber-400 mb-1">تخدم</div>
              <div className="text-sm text-slate-400">مقاولات وديكور شامل</div>
            </div>
            <div>
              <div className="text-3xl font-black text-amber-400 mb-1">تكوّن</div>
              <div className="text-sm text-slate-400">أكاديمية مهنية معتمدة</div>
            </div>
            <div>
              <div className="text-3xl font-black text-amber-400 mb-1">تتوسع</div>
              <div className="text-sm text-slate-400">بنية قابلة للتطور المستمر</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. الأنشطة والقطاعات الأساسية (Core Activities) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">أنشطتنا الرئيسية</h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-light">
            منظومة عمل متكاملة تلبي احتياجات الأسواق التجارية والمهنية بأعلى معايير الجودة والاحترافية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* قطاع الأثاث والسوق */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/50 transition-all group">
            <div className="w-14 h-14 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-2xl mb-6 group-hover:scale-110 transition-transform">
              🛋️
            </div>
            <h3 className="text-xl font-bold text-white mb-3">مبيعات الأثاث والتنجيد</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              صالونات عصرية فاخرة، تقنيات الكابيتوني المتقنة، غرف النوم، المفروشات والمنسوجات المصممة بعناية فائقة لتناسب أذواقكم.
            </p>
            <Link
              href="/market"
              className="inline-flex items-center text-sm font-semibold text-amber-400 hover:text-amber-300"
            >
              استكشف المتجر ←
            </Link>
          </div>

          {/* قطاع خدمات المقاولات */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/50 transition-all group">
            <div className="w-14 h-14 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-2xl mb-6 group-hover:scale-110 transition-transform">
              🏗️
            </div>
            <h3 className="text-xl font-bold text-white mb-3">خدمات المقاولات والتشطيبات</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              خدمات احترافية تشمل التشطيبات الداخلية، أعمال الديكور، الصيانة العامة، والنجارة والحدادة بإشراف خبراء متخصصين.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center text-sm font-semibold text-amber-400 hover:text-amber-300"
            >
              اطلب خدمة الآن ←
            </Link>
          </div>

          {/* قطاع الأكاديمية */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/50 transition-all group">
            <div className="w-14 h-14 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-2xl mb-6 group-hover:scale-110 transition-transform">
              🎓
            </div>
            <h3 className="text-xl font-bold text-white mb-3">الأكاديمية المهنية والتقنية</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              دورات تدريبية متخصصة في فنون التنجيد، الخياطة، البرمجة وإنشاء المواقع، التسويق الرقمي، والمهارات التقنية المعاصرة.
            </p>
            <Link
              href="/academy"
              className="inline-flex items-center text-sm font-semibold text-amber-400 hover:text-amber-300"
            >
              سجل في الدورات ←
            </Link>
          </div>
        </div>
      </section>

      {/* 4. تذييل الصفحة (Footer) */}
      <footer className="border-t border-slate-800 bg-slate-950 py-12 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center font-bold text-slate-950 text-sm">
              A
            </div>
            <span className="font-bold text-white">ASLAN MODELLING GROUP</span>
          </div>
          <p className="text-center text-slate-500 text-xs">
            © 2026 ASLAN Modelling Group. جميع الحقوق محفوظة. منصة تجارية وأكاديمية متعددة الأنشطة.
          </p>
          <div className="flex items-center space-x-6 space-x-reverse text-xs">
            <Link href="/company" className="hover:text-amber-400 transition-colors">سياسة الخصوصية</Link>
            <Link href="/company" className="hover:text-amber-400 transition-colors">الشروط والأحكام</Link>
            <Link href="/company" className="hover:text-amber-400 transition-colors">اتصل بنا</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
