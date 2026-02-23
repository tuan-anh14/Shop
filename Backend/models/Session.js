import mongoose from 'mongoose';

const SessionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },
  refreshTokenHash: String,
  deviceInfo: String,
  ip: String,
  expiresAt: Date
}, { timestamps: true });

// Consider adding a TTL index on expiresAt in production
export default mongoose.models.Session || mongoose.model('Session', SessionSchema);
