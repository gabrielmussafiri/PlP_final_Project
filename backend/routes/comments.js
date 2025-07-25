import express from 'express';
import Comment from '../models/Comment.js';

const router = express.Router();

// Get all comments for a lesson
router.get('/:lessonId', async (req, res) => {
  const comments = await Comment.find({ lessonId: req.params.lessonId }).sort({ createdAt: -1 });
  res.json(comments);
});

// Post a new comment
router.post('/', async (req, res) => {
  const comment = new Comment(req.body);
  await comment.save();
  res.status(201).json(comment);
});

export default router; 