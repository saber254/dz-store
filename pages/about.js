import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>من نحن | DZ Stor</title>
      </Head>

      <main className="max-w-3xl mx-auto p-6 bg-white min-h-screen">
        <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">🙋‍♂️ من نحن</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-4 text-center">
          مرحبًا بك في <span className="font-semibold text-green-600">DZ Stor</span>، وجهتك الموثوقة لشراء أحدث الأجهزة الإلكترونية الأصلية من Apple بأفضل الأسعار.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-4 text-center">
          نحن نسعى لتقديم تجربة تسوق مميزة وآمنة لعملائنا مع سرعة التوصيل وخدمة عملاء متجاوبة لضمان رضاكم التام.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-4 text-center">
          هذا المتجر هو مشروع تدريبي عملي لتعلم التجارة الإلكترونية باستخدام Next.js و Tailwind CSS.
        </p>

        <div className="flex justify-center mt-6">
          <Link href="/" className="text-white bg-green-500 px-4 py-2 rounded-full hover:bg-green-600 transition">
            🏠 العودة إلى الرئيسية
          </Link>
        </div>
      </main>
    </>
  );
}
