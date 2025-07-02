import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error, user } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      alert('❌ ' + error.message);
    } else {
      localStorage.setItem('user', JSON.stringify(user));
      alert('✅ تم تسجيل الدخول');
      router.push('/');
    }
    setLoading(false);
  };

  const handleSignUp = async () => {
    setLoading(true);
    const { error, user } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      alert('❌ ' + error.message);
    } else {
      alert('✅ تم إنشاء الحساب، تحقق من بريدك الإلكتروني لتأكيد الحساب.');
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">تسجيل الدخول / إنشاء حساب</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-green-500 text-white py-2 rounded"
        >
          {loading ? 'جاري المعالجة...' : 'تسجيل الدخول'}
        </button>
      </form>
      <button
        onClick={handleSignUp}
        disabled={loading}
        className="mt-4 text-blue-600 underline"
      >
        إنشاء حساب جديد
      </button>
    </div>
  );
}
