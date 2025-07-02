import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Head from "next/head";
import Link from "next/link";

export default function Admin() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("orders").select("*").order("created_at", { ascending: false });
    if (error) {
      console.error(error);
      alert("❌ فشل في جلب الطلبات");
    } else {
      setOrders(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <Head>
        <title>لوحة التحكم</title>
      </Head>
      <h1 className="text-2xl mb-4">لوحة التحكم - الطلبات</h1>
      <Link href="/checkout" className="block text-blue-600 mb-4 underline">
        العودة لصفحة الطلب
      </Link>
      {loading ? (
        <p>جاري التحميل...</p>
      ) : (
        <div>
          {orders.length === 0 ? (
            <p>لا توجد طلبات بعد</p>
          ) : (
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-1">الاسم</th>
                  <th className="border p-1">اللقب</th>
                  <th className="border p-1">الولاية</th>
                  <th className="border p-1">العنوان</th>
                  <th className="border p-1">الهاتف</th>
                  <th className="border p-1">طريقة الدفع</th>
                  <th className="border p-1">وقت الإنشاء</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td className="border p-1">{order.name}</td>
                    <td className="border p-1">{order.surname}</td>
                    <td className="border p-1">{order.state}</td>
                    <td className="border p-1">{order.address}</td>
                    <td className="border p-1">{order.phone}</td>
                    <td className="border p-1">{order.paymentMethod}</td>
                    <td className="border p-1">{new Date(order.created_at).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}
