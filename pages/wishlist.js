import { useEffect, useState } from 'react';

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    setWishlist(stored);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">قائمة المفضلات</h1>
      {wishlist.length === 0 ? (
        <p>لا توجد منتجات في المفضلات بعد.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-4 flex flex-col items-center"
            >
              <img src={product.image} alt={product.name} className="w-full h-48 object-contain rounded mb-4" />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
