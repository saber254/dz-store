import Head from 'next/head';
import { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Search, Menu, User, X } from 'lucide-react';
import Link from 'next/link';

const products = [
  { id: 1, name: 'iPhone 15 Pro Max', price: '$1099', image: '/images/p1.jpg' },
  { id: 2, name: 'MacBook Air M3', price: '$1299', image: '/images/p2.jpg' },
  { id: 3, name: 'iPad Pro M4', price: '$899', image: '/images/p3.jpg' },
  { id: 4, name: 'Apple Watch Ultra 2', price: '$799', image: '/images/p4.jpg' },
  { id: 5, name: 'AirPods Pro 2', price: '$249', image: '/images/p5.jpg' },
  { id: 6, name: 'HomePod Mini', price: '$99', image: '/images/p6.jpg' },
  { id: 7, name: 'iMac 24-inch', price: '$1299', image: '/images/p7.jpg' },
  { id: 8, name: 'Mac Studio M2', price: '$1999', image: '/images/p8.jpg' },
];

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartCount(storedCart.length);
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
  }, []);

  const addToCartAndBuy = (product) => {
    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    storedCart.push(product);
    localStorage.setItem('cartItems', JSON.stringify(storedCart));
    setCartCount(storedCart.length);
    window.location.href = '/cart';
  };

  const addToWishlist = (product) => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    const alreadyExists = storedWishlist.find((item) => item.id === product.id);
    if (alreadyExists) {
      alert('✅ المنتج موجود بالفعل في المفضلات');
      return;
    }
    storedWishlist.push(product);
    localStorage.setItem('wishlistItems', JSON.stringify(storedWishlist));
    alert('❤️ تمت إضافة المنتج إلى المفضلات');
  };

  return (
    <>
      <Head>
        <title>🛒 DZ Stor</title>
      </Head>

      {/* نافذة البحث */}
      {showSearch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 w-80 relative">
            <button
              onClick={() => setShowSearch(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
            >
              <X />
            </button>
            <input
              type="text"
              placeholder="ابحث عن منتج..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border p-2 rounded-lg"
            />
            <button
              onClick={() => {
                window.location.href = `/search?query=${searchQuery}`;
              }}
              className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
              🔍 ابحث الآن
            </button>
          </div>
        </div>
      )}

      {/* القائمة الجانبية */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 p-6 flex flex-col space-y-4">
          <button
            className="self-end text-gray-700 text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            ✖
          </button>
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-lg font-semibold hover:text-green-600">
            🏠 الرئيسية
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="text-lg font-semibold hover:text-green-600">
            🙋‍♂️ من نحن
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-lg font-semibold hover:text-green-600">
            📞 تواصل معنا
          </Link>
        </div>
      )}

      {/* الهيدر */}
      <header className="bg-gradient-to-r from-green-400 to-blue-400 p-4 shadow-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Menu
              className="text-white cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
            <h1 className="text-2xl font-extrabold text-white">🛒 DZ Stor</h1>
          </div>
          <div className="flex items-center space-x-5 text-white">
            <button onClick={() => setShowSearch(true)}>
              <Search className="cursor-pointer hover:scale-110 transition" />
            </button>
            <Link href="/wishlist">
              <Heart className="cursor-pointer hover:scale-110 transition" />
            </Link>
            <Link href={user ? "/account" : "/login"}>
              <User className="cursor-pointer hover:scale-110 transition" />
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingCart className="cursor-pointer hover:scale-110 transition" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
                {cartCount}
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* المحتوى */}
      <main className="max-w-7xl mx-auto p-6 bg-gradient-to-b from-white to-green-50 min-h-screen">
        <h2 className="text-center text-4xl font-extrabold text-green-600 mb-10 animate-pulse">
          🌟 اكتشف منتجات DZ Stor المميزة
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 p-4 flex flex-col items-center border border-green-200"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-contain rounded-2xl mb-4 hover:scale-105 transition"
              />
              <h3 className="text-lg font-semibold text-center text-gray-800 mb-1">
                {product.name}
              </h3>
              <p className="text-center text-gray-600 mb-2">{product.price}</p>
              <button
                onClick={() => addToCartAndBuy(product)}
                className="bg-gradient-to-r from-green-500 to-blue-400 text-white w-full py-2 rounded-full font-semibold hover:from-green-600 hover:to-blue-500 transition mb-2"
              >
                🚀 اشتري الآن
              </button>
              <button
                onClick={() => addToWishlist(product)}
                className="bg-pink-500 text-white w-full py-2 rounded-full font-semibold hover:bg-pink-600 transition"
              >
                ❤️ إضافة إلى المفضلات
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* الفوتر */}
      <footer className="text-center p-4 text-gray-500 mt-10">
        © 2025 DZ Stor - جميع الحقوق محفوظة - هذا المتجر مشروع تدريبي غير تابع لـ Apple أو Noon
      </footer>
    </>
  );
}
