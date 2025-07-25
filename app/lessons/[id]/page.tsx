"use client";
import Link from 'next/link';
import { UserCircle, MessageCircle, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const lesson = {
  id: 1,
  title: 'How to design a logo in Canva',
  desc: 'Quick tips for logo design in Canva. Learn the basics of layout, color, and exporting your logo in under a minute!',
  author: 'Alex Johnson',
  authorImg: 'https://randomuser.me/api/portraits/men/32.jpg',
  tags: ['Design', 'Canva'],
  video: 'https://www.w3schools.com/html/mov_bbb.mp4',
};
const comments = [
  { user: 'Sarah Chen', avatar: 'https://randomuser.me/api/portraits/women/44.jpg', text: 'Great tips! I made my first logo in 2 minutes.' },
  { user: 'Mike Rodriguez', avatar: 'https://randomuser.me/api/portraits/men/65.jpg', text: 'Super clear and helpful, thanks!' },
];
const related = [
  { id: 2, title: 'Basic Excel formulas', author: 'Sarah Chen', authorImg: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { id: 3, title: 'Speed Reading', author: 'Mike Rodriguez', authorImg: 'https://randomuser.me/api/portraits/men/65.jpg' },
];

export default function LessonDetailPage({ params }: { params: { id: string } }) {
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [requested, setRequested] = useState(false);

  const handleRequest = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRequested(true);
      toast.success('Trade request sent!');
    }, 1200);
  };

  return (
    <main className="max-w-3xl mx-auto px-2 sm:px-4 py-10">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 sm:p-10 mb-10">
        <div className="aspect-video rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 mb-6">
          <video controls poster="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=225" className="w-full h-full object-cover">
            <source src={lesson.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{lesson.title}</h1>
          <div className="flex items-center gap-2">
            <img src={lesson.authorImg} alt={lesson.author} className="w-9 h-9 rounded-full border-2 border-indigo-200" />
            <span className="text-gray-700 dark:text-gray-200 font-medium">{lesson.author}</span>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{lesson.desc}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {lesson.tags.map((tag, i) => (
            <span key={i} className="bg-indigo-50 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 px-2 py-0.5 rounded-full text-xs font-semibold">{tag}</span>
          ))}
        </div>
        <button
          className={`w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-200 active:scale-95 mb-4 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed`}
          onClick={handleRequest}
          disabled={loading || requested}
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : requested ? <CheckCircle2 className="w-5 h-5 text-white" /> : null}
          {loading ? 'Requesting...' : requested ? 'Requested' : 'Request a Trade'}
        </button>
        <Link href="/lessons" className="block text-indigo-600 hover:text-indigo-800 font-semibold underline text-center sm:text-left">Back to Lessons</Link>
      </div>
      <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 mb-10">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2"><MessageCircle className="w-5 h-5 text-indigo-600" /> Comments</h2>
        <ul className="space-y-4 mb-6">
          {comments.map((c, i) => (
            <li key={i} className="flex items-start gap-3">
              <img src={c.avatar} alt={c.user} className="w-8 h-8 rounded-full border-2 border-indigo-100" />
              <div>
                <span className="font-semibold text-gray-800 dark:text-gray-100">{c.user}</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{c.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <form className="flex gap-2" onSubmit={e => { e.preventDefault(); setComment(''); }}>
          <input value={comment} onChange={e => setComment(e.target.value)} className="flex-1 border rounded-full px-4 py-2 text-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Add a comment..." />
          <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full font-semibold transition-all duration-200 active:scale-95 flex items-center gap-1"><Send className="w-4 h-4" /> Post</button>
        </form>
      </section>
      <section>
        <h3 className="text-lg font-bold mb-4">Related Lessons</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {related.map(r => (
            <Link key={r.id} href={`/lessons/${r.id}`} className="bg-white dark:bg-gray-900 rounded-xl shadow p-4 flex items-center gap-3 hover:shadow-xl transition-all">
              <img src={r.authorImg} alt={r.author} className="w-8 h-8 rounded-full border-2 border-indigo-100" />
              <div>
                <div className="font-semibold text-gray-900 dark:text-gray-100">{r.title}</div>
                <div className="text-xs text-gray-500 dark:text-gray-300">by {r.author}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
} 