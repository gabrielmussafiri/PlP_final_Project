"use client";

import Link from 'next/link';
import { Heart } from 'lucide-react';
import { useState } from 'react';

const lessons = [
  { id: 1, title: 'How to design a logo in Canva', desc: 'Quick tips for logo design in Canva.', author: 'Alex Johnson', authorImg: 'https://randomuser.me/api/portraits/men/32.jpg', tags: ['Design', 'Canva'], thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=225', trades: 5 },
  { id: 2, title: 'Basic Excel formulas', desc: 'Master SUM, AVERAGE, and more in 1 minute.', author: 'Sarah Chen', authorImg: 'https://randomuser.me/api/portraits/women/44.jpg', tags: ['Excel', 'Productivity'], thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=400&h=225', trades: 3 },
  { id: 3, title: 'Speed Reading', desc: 'Double your reading speed with this trick.', author: 'Mike Rodriguez', authorImg: 'https://randomuser.me/api/portraits/men/65.jpg', tags: ['Reading', 'Productivity'], thumbnail: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&h=225', trades: 7 },
];

export default function LessonsPage() {
  const [liked, setLiked] = useState([false, false, false]);
  return (
    <main className="max-w-5xl mx-auto px-2 sm:px-4 py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">Browse Micro-Lessons</h1>
        <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">Discover and learn from 1-minute lessons shared by the community.</p>
        <Link href="/lessons/new" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold shadow-lg transition-all text-sm sm:text-base">Post a New Lesson</Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        {lessons.map((lesson, idx) => (
          <div key={lesson.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow p-0 flex flex-col border border-indigo-100 group overflow-hidden transform-gpu hover:scale-[1.025] active:scale-95 duration-200">
            <div className="relative">
              <img src={lesson.thumbnail} alt={lesson.title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
              <button onClick={() => setLiked(liked => liked.map((l, i) => i === idx ? !l : l))} className={`absolute top-3 right-3 bg-white/80 rounded-full p-2 shadow hover:bg-pink-100 active:scale-90 transition-all duration-200 ${liked[idx] ? 'text-pink-600' : 'text-gray-400'}`}> <Heart fill={liked[idx] ? '#ec4899' : 'none'} className="w-5 h-5" /> </button>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold text-indigo-700 mb-2">{lesson.title}</h2>
                <p className="text-gray-600 mb-4">{lesson.desc}</p>
                <div className="flex items-center gap-2 mb-4">
                  <img src={lesson.authorImg} alt={lesson.author} className="w-7 h-7 rounded-full border-2 border-indigo-200" />
                  <span className="text-sm text-gray-700 font-medium">{lesson.author}</span>
                  <span className="ml-auto text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">{lesson.trades} trades</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {lesson.tags.map((tag, i) => (
                    <span key={i} className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full text-xs font-semibold">{tag}</span>
                  ))}
                </div>
              </div>
              <Link href={`/lessons/${lesson.id}`} className="mt-4 text-indigo-600 hover:text-indigo-800 font-semibold underline">View Lesson</Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 