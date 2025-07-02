import Head from 'next/head';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('✅ تم إرسال رسالتك بنجاح');
    setName('');
    setMessage('');
  };

  return (
    <>
      <Head>
        <title>📞 تواصل معنا - DZ Stor</title>
      </Head>

      <main className="max-w-2xl mx-auto p-6 bg-gradient-to-b from-green-50 to-blue-50 min-h-screen">
        <h1 className="text-3xl text-center font-extrabold text-green-600 mb-8">📞 تواصل معنا</h1>
        
        <div className="bg-white rounded-3xl shadow-xl p-6">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="اسمك"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border p-3 rounded-xl"
            />
            <textarea
              placeholder="رسالتك"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className="border p-3 rounded-xl"
            ></textarea>
            <button
              type="submit"
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-blue-400 text-white py-3 rounded-xl hover:from-green-600 hover:to-blue-500 transition"
            >
              <Send />
              <span>إرسال</span>
            </button>
          </form>
          <div className="mt-8 space-y-2 text-gray-700">
            <p className="flex items-center space-x-2"><Phone /> <span>+213 555 555 555</span></p>
            <p className="flex items-center space-x-2"><Mail /> <span>support@dzstor.com</span></p>
            <p className="flex items-center space-x-2"><MapPin /> <span>الجزائر، الجزائر العاصمة</span></p>
          </div>
        </div>
      </main>
    </>
  );
}
