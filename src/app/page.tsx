import Link from 'next/link';
import { site } from '@/lib/config';
import { getProducts } from '@/lib/data';

export default async function HomePage() {
  const products = (await getProducts()).slice(0, 3);

  return (
    <main>
      {/* HERO */}
      <section className="section">
        <div className="wrap">
          <span className="kicker">{site.name}</span>

          <h1 className="display">
            نبني الجودة.{' '}
            <span className="gold">نصنع الثقة.</span>
          </h1>

          <p className="lead">
            تنجيد • خياطة • تفصيل — منتجات مخصصة، خدمات تنفيذية،
            وتكوين مهني ضمن منظومة ASLAN.
          </p>

          <div className="actions">
            <Link className="button primary" href="/products">
              استكشف المنتجات
            </Link>

            <Link className="button secondary" href="/services">
              اطلب خدمة
            </Link>
          </div>
        </div>
      </section>

      {/* ASLAN ACTIVITIES */}
      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <span className="kicker">ASLAN</span>
            <h2>منظومة تنتج وتخدم وتكوّن وتتوسع</h2>
            <p>
              نبني العمل حول مهاراتنا ومنتجاتنا وخدماتنا، مع بنية رقمية
              قابلة للتوسع تدريجيًا.
            </p>
          </div>

          <div className="grid three">
            <article className="card">
              <span className="number">01</span>
              <h3>تنجيد • خياطة • تفصيل</h3>
              <p>
                منتجات ومنفذات مخصصة تجمع بين الحرفة والتصميم وجودة التنفيذ.
              </p>
              <Link href="/products">استكشف المنتجات ↗</Link>
            </article>

            <article className="card">
              <span className="number">02</span>
              <h3>الخدمات التنفيذية</h3>
              <p>
                خدمات تقنية وتنفيذية مرتبطة بخبرة ASLAN في الكهرباء،
                التكييف، التدفئة، السباكة وتجهيز الورش.
              </p>
              <Link href="/services">استكشف الخدمات ↗</Link>
            </article>

            <article className="card">
              <span className="number">03</span>
              <h3>الأكاديمية</h3>
              <p>
                تكوين مهني وتقني يحول الخبرة العملية إلى معرفة قابلة
                للتعلم والتطبيق والتوسع.
              </p>
              <Link href="/academy">استكشف الأكاديمية ↗</Link>
            </article>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section">
        <div className="wrap">
          <div className="section-heading row">
            <div>
              <span className="kicker">COLLECTION</span>
              <h2>مختارات ASLAN</h2>
            </div>

            <Link href="/products">كل المنتجات ↗</Link>
          </div>

          {products.length > 0 ? (
            <div className="grid three">
              {products.map((product, index) => (
                <article className="card product-card" key={product.id}>
                  <span className="number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3>
                    {product.name || `منتج ASLAN ${index + 1}`}
                  </h3>

                  {product.description && (
                    <p>{product.description}</p>
                  )}

                  <Link href="/products">عرض المنتج ↗</Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="card">
              <h3>منتجات ASLAN</h3>
              <p>
                سيتم عرض المنتجات هنا عند توفر بيانات المنتجات في المصدر
                الحالي.
              </p>
              <Link href="/products">الانتقال إلى المنتجات ↗</Link>
            </div>
          )}
        </div>
      </section>

      {/* SERVICES / ACADEMY / PARTNERS */}
      <section className="section dark">
        <div className="wrap">
          <div className="grid three">
            <article>
              <span className="kicker">SERVICES</span>
              <h2>خدمات تنفيذية</h2>
              <p>
                حلول عملية مبنية على الخبرة الفنية والتنفيذ الميداني.
              </p>
              <Link href="/services">اطلب خدمة ↗</Link>
            </article>

            <article>
              <span className="kicker">ACADEMY</span>
              <h2>تكوين مهني</h2>
              <p>
                تحويل الخبرة والحرفة إلى برامج تكوين قابلة للتطبيق.
              </p>
              <Link href="/academy">تعرف على الأكاديمية ↗</Link>
            </article>

            <article>
              <span className="kicker">PARTNERS</span>
              <h2>الشركاء</h2>
              <p>
                منظومة علاقات وشراكات قابلة للنمو وفق قواعد واضحة.
              </p>
              <Link href="/partners">استكشف الشراكات ↗</Link>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section">
        <div className="wrap">
          <div className="cta">
            <span className="kicker">ASLAN MODELLING GROUP</span>

            <h2>لنبنِ العمل معًا.</h2>

            <p>
              للاستفسارات، طلب خدمة، أو التواصل مع ASLAN، انتقل إلى صفحة
              التواصل الرسمية.
            </p>

            <Link className="button primary" href="/contact">
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
