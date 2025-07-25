"use client";
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <nav className="max-w-5xl mx-auto mt-6 mb-10 flex items-center justify-between bg-white/90 dark:bg-gray-900/90 shadow-lg rounded-xl px-8 py-4 sticky top-4 z-40 backdrop-blur">
      <Link href="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 tracking-tight">SkillSwap</Link>
      <div className="flex gap-6 items-center">
        <Link href="/lessons" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">Lessons</Link>
        <Link href="/trades" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">Trades</Link>
        <Link href="/profile" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">Profile</Link>
        <button
          aria-label="Toggle Dark Mode"
          className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && (theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />)}
        </button>
      </div>
    </nav>
  );
} 