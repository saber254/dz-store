import { useRouter } from 'next/router';

const products = [
  { id: 1, name: 'iPhone 15 Pro Max', price: '$1099', image: '/images/p1.jpg' },
  { id: 2, name: 'MacBook Air M3', price: '$1299', image: '/images/p2.jpg' },
  { id: 3, name: 'iPad Pro M4', price: '$899', image: '/images/p3.jpg' },
  { id: 4, name: 'Apple Watch Ultra 2', price: '$799', image: '/images/p4.jpg' },
];

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div className="p-6">🛑 المنتج غير موجود</div>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <img src={product.image} alt={product.name} className="w-full h-72 object-contain mb-4" />
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-xl text-gray-700 mb-4">{product.price}</p>
      <button className="bg-pink-500 text-white px-4 py-2 rounded-full">🛒 أضف إلى السلة</button>
    </div>
  );
}
