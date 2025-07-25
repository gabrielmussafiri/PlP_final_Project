import Link from 'next/link';
import { ArrowRightLeft, Inbox, Send, User, MessageCircle } from 'lucide-react';

const received = [
  { user: 'User A', avatar: 'https://randomuser.me/api/portraits/women/55.jpg', lesson: 'How to design a logo in Canva', status: 'Pending' },
];
const sent = [
  { user: 'User B', avatar: 'https://randomuser.me/api/portraits/men/45.jpg', lesson: 'Basic Excel formulas', status: 'Pending' },
];

export default function TradesPage() {
  return (
    <main className="max-w-4xl mx-auto px-2 sm:px-4 py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 flex items-center justify-center gap-2"><ArrowRightLeft className="text-indigo-600 w-8 h-8" /> Trade Requests</h1>
        <p className="text-base sm:text-lg text-gray-600">Manage your skill swap requests below.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
        <section className="bg-white rounded-2xl shadow-xl p-6 border border-indigo-100">
          <h2 className="text-xl font-bold text-indigo-700 mb-4 flex items-center gap-2"><Inbox className="w-5 h-5" /> Received Requests</h2>
          <ul className="space-y-3">
            {received.map((item, i) => (
              <li key={i} className="border rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-5 md:p-6">
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <span className="relative group">
                    <img src={item.avatar} alt={item.user} className="w-12 h-12 rounded-full border-2 border-indigo-200 bg-white group-hover:ring-4 group-hover:ring-indigo-200 transition-all duration-200" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-1">
                      <span className="font-semibold text-gray-800 dark:text-gray-100 truncate">{item.user}</span>
                      <span className="text-gray-500 dark:text-gray-300">wants to trade for your lesson</span>
                      <span className="font-semibold text-indigo-700 dark:text-indigo-300 truncate">"{item.lesson}"</span>
                    </div>
                    <span className="inline-block mt-1 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 text-yellow-900 shadow-sm border border-yellow-300">{item.status}</span>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-3 items-stretch md:items-center mt-2 md:mt-0">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-semibold transition active:scale-95 shadow w-full md:w-auto">Accept</button>
                  <button className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-3 py-2 rounded-full font-semibold transition flex items-center gap-1 active:scale-95 shadow w-full md:w-auto"><MessageCircle className="w-4 h-4" /> Message</button>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className="bg-white rounded-2xl shadow-xl p-6 border border-indigo-100">
          <h2 className="text-xl font-bold text-indigo-700 mb-4 flex items-center gap-2"><Send className="w-5 h-5" /> Sent Requests</h2>
          <ul className="space-y-3">
            {sent.map((item, i) => (
              <li key={i} className="border rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-5 md:p-6">
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <span className="relative group">
                    <img src={item.avatar} alt={item.user} className="w-12 h-12 rounded-full border-2 border-indigo-200 bg-white group-hover:ring-4 group-hover:ring-indigo-200 transition-all duration-200" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-1">
                      <span className="font-semibold text-gray-800 dark:text-gray-100 truncate">You</span>
                      <span className="text-gray-500 dark:text-gray-300">requested a trade with</span>
                      <span className="font-semibold text-indigo-700 dark:text-indigo-300 truncate">{item.user}</span>
                      <span className="text-gray-500 dark:text-gray-300">for</span>
                      <span className="font-semibold text-indigo-700 dark:text-indigo-300 truncate">"{item.lesson}"</span>
                    </div>
                    <span className="inline-block mt-1 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 text-yellow-900 shadow-sm border border-yellow-300">{item.status}</span>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-3 items-stretch md:items-center mt-2 md:mt-0">
                  <button className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-3 py-2 rounded-full font-semibold transition flex items-center gap-1 active:scale-95 shadow w-full md:w-auto"><MessageCircle className="w-4 h-4" /> Message</button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Link href="/lessons" className="block mt-8 sm:mt-12 text-indigo-600 hover:text-indigo-800 font-semibold underline text-center text-sm sm:text-base">Back to Lessons</Link>
    </main>
  );
} 