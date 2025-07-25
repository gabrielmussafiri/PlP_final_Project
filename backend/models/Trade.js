import mongoose from 'mongoose';

const TradeSchema = new mongoose.Schema({
  fromUser: { type: String, required: true },
  toUser: { type: String, required: true },
  lessonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson', required: true },
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Trade', TradeSchema); 