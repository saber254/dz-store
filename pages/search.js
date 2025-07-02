import Head from 'next/head';
import { useRouter } from 'next/router';

export default function SearchPage() {
  const router = useRouter();
  const { query } = router.query;

  return (
    <>
      <Head>
        <title>🔍 نتائج البحث - DZ Stor</title>
      </Head>

      <main className="max-w-4xl mx-auto p-6 bg-gradient-to-b from-white to-green-50 min-h-screen">
        <h1 className="text-3xl text-center font-extrabold text-green-600 mb-8">🔍 نتائج البحث</h1>
        {query ? (
          <p className="text-center text-lg">نتائج البحث عن: <span className="font-bold text-blue-600">{query}</span></p>
        ) : (
          <p className="text-center text-lg">لم تقم بكتابة كلمة للبحث بعد</p>
        )}

        {/* يمكنك لاحقًا إضافة عرض نتائج المنتجات هنا */}
      </main>
    </>
  );
}
