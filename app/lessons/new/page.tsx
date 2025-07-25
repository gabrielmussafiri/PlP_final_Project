import Link from 'next/link';

export default function NewLessonPage() {
  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Post a New Micro-Lesson</h1>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input className="w-full border px-3 py-2 rounded" placeholder="Lesson title" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea className="w-full border px-3 py-2 rounded" placeholder="Short description" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Video Upload</label>
          <input type="file" className="w-full" />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
      <Link href="/lessons" className="block mt-6 text-blue-600 underline">Back to Lessons</Link>
    </main>
  );
} 