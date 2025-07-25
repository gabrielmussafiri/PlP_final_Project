import express from 'express';
import Trade from '../models/Trade.js';

const router = express.Router();

// Get all trades
router.get('/', async (req, res) => {
  const trades = await Trade.find().sort({ createdAt: -1 });
  res.json(trades);
});

// Get trade by id
router.get('/:id', async (req, res) => {
  const trade = await Trade.findById(req.params.id);
  if (!trade) return res.status(404).json({ error: 'Trade not found' });
  res.json(trade);
});

// Create trade
router.post('/', async (req, res) => {
  const trade = new Trade(req.body);
  await trade.save();
  res.status(201).json(trade);
});

// Update trade
router.put('/:id', async (req, res) => {
  const trade = await Trade.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!trade) return res.status(404).json({ error: 'Trade not found' });
  res.json(trade);
});

// Delete trade
router.delete('/:id', async (req, res) => {
  const trade = await Trade.findByIdAndDelete(req.params.id);
  if (!trade) return res.status(404).json({ error: 'Trade not found' });
  res.json({ message: 'Trade deleted' });
});

export default router; 