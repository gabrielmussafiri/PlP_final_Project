"use client";

import Link from 'next/link';
import { UserCircle, BookOpen, ArrowRightLeft, Pencil } from 'lucide-react';
import { useState } from 'react';

export default function ProfilePage() {
  const [showEdit, setShowEdit] = useState(false);
  return (
    <main className="max-w-4xl mx-auto px-2 sm:px-4 py-8 sm:py-12">
      <div className="flex flex-col items-center mb-8 sm:mb-10">
        <div className="relative group">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User Avatar" className="w-20 sm:w-28 h-20 sm:h-28 rounded-full border-4 border-indigo-200 shadow-lg object-cover transition-transform duration-200 group-hover:scale-105 group-active:scale-95" />
          <button onClick={() => setShowEdit(true)} className="absolute bottom-2 right-2 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full shadow transition active:scale-90"><Pencil className="w-4 h-4" /></button>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-4">Alex Johnson</h1>
        <p className="text-gray-600 mt-2 text-center max-w-md text-sm sm:text-base">Designer, educator, and lifelong learner. Passionate about sharing quick tips and learning new skills every day.</p>
      </div>
      {showEdit && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 w-full max-w-md relative">
            <button onClick={() => setShowEdit(false)} className="absolute top-3 right-3 text-gray-400 hover:text-gray-700">✕</button>
            <h2 className="text-lg sm:text-xl font-bold mb-4">Edit Profile (Coming Soon)</h2>
            <p className="text-gray-500 text-sm sm:text-base">Profile editing functionality will be available in a future update.</p>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mt-8 sm:mt-10">
        <section className="bg-white rounded-2xl shadow-xl p-6 border border-indigo-100 transition-all duration-200 hover:shadow-2xl hover:scale-[1.015] active:scale-95">
          <h2 className="text-xl font-bold text-indigo-700 mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5" /> My Lessons</h2>
          <ul className="space-y-3">
            <li className="border p-4 rounded-lg bg-indigo-50">How to design a logo in Canva</li>
          </ul>
        </section>
        <section className="bg-white rounded-2xl shadow-xl p-6 border border-indigo-100 transition-all duration-200 hover:shadow-2xl hover:scale-[1.015] active:scale-95">
          <h2 className="text-xl font-bold text-indigo-700 mb-4 flex items-center gap-2"><ArrowRightLeft className="w-5 h-5" /> My Trades</h2>
          <ul className="space-y-3">
            <li className="border p-4 rounded-lg bg-indigo-50">Traded with User B for "Basic Excel formulas"</li>
          </ul>
        </section>
      </div>
      <Link href="/lessons" className="block mt-8 sm:mt-12 text-indigo-600 hover:text-indigo-800 font-semibold underline text-center text-sm sm:text-base">Back to Lessons</Link>
    </main>
  );
} 