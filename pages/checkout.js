import { useState } from "react";
import { supabase } from "../lib/supabase"; // ✅ تم تصحيح المسار هنا
import Head from "next/head";
import Link from "next/link";

export default function Checkout() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.from("orders").insert([
      {
        name,
        surname,
        state,
        address,
        phone,
        paymentMethod,
      },
    ]);

    if (error) {
      console.error(error);
      alert("❌ حدث خطأ أثناء إرسال الطلب");
    } else {
      console.log("✅ تم إرسال الطلب:", data);
      setSuccess(true);
      setName("");
      setSurname("");
      setState("");
      setAddress("");
      setPhone("");
      setPaymentMethod("COD");
    }
    setLoading(false);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <Head>
        <title>إتمام الطلب</title>
      </Head>
      <h1 className="text-2xl mb-4">إتمام الطلب</h1>
      {success && (
        <p className="text-green-500 mb-4">✅ تم إرسال طلبك بنجاح</p>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          placeholder="الاسم"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border p-2"
        />
        <input
          placeholder="اللقب"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
          className="border p-2"
        />
        <input
          placeholder="الولاية"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
          className="border p-2"
        />
        <input
          placeholder="العنوان"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          className="border p-2"
        />
        <input
          placeholder="رقم الهاتف"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="border p-2"
        />
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="border p-2"
        >
          <option value="COD">الدفع عند الاستلام</option>
          <option value="CC">بطاقة بنكية</option>
        </select>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white p-2 mt-2"
        >
          {loading ? "جاري الإرسال..." : "إرسال الطلب"}
        </button>
      </form>
      <Link href="/admin" className="block text-blue-600 mt-4 underline">
        لوحة التحكم
      </Link>
    </div>
  );
}
