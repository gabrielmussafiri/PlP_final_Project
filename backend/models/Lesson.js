import mongoose from 'mongoose';

const LessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  tags: [String],
  videoUrl: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Lesson', LessonSchema); 