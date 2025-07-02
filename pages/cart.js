// pages/cart.js
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">🛒 سلة التسوق الخاصة بك</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">سلتك فارغة حاليا.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-contain rounded" />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-600">{item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                إزالة
              </button>
            </div>
          ))}

          <div className="text-right font-bold text-lg mt-4">الإجمالي: ${totalPrice.toFixed(2)}</div>

          <Link href="/checkout">
            <button className="w-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white py-3 rounded-full mt-4 font-semibold hover:from-pink-600 hover:to-yellow-500 transition">
              🚀 المتابعة إلى الدفع
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
