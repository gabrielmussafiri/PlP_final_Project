import express from 'express';
import Lesson from '../models/Lesson.js';

const router = express.Router();

// Get all lessons
router.get('/', async (req, res) => {
  const lessons = await Lesson.find().sort({ createdAt: -1 });
  res.json(lessons);
});

// Get lesson by id
router.get('/:id', async (req, res) => {
  const lesson = await Lesson.findById(req.params.id);
  if (!lesson) return res.status(404).json({ error: 'Lesson not found' });
  res.json(lesson);
});

// Create lesson
router.post('/', async (req, res) => {
  const lesson = new Lesson(req.body);
  await lesson.save();
  res.status(201).json(lesson);
});

// Update lesson
router.put('/:id', async (req, res) => {
  const lesson = await Lesson.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!lesson) return res.status(404).json({ error: 'Lesson not found' });
  res.json(lesson);
});

// Delete lesson
router.delete('/:id', async (req, res) => {
  const lesson = await Lesson.findByIdAndDelete(req.params.id);
  if (!lesson) return res.status(404).json({ error: 'Lesson not found' });
  res.json({ message: 'Lesson deleted' });
});

export default router; 