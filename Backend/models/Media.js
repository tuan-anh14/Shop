import mongoose from 'mongoose';

const MediaSchema = new mongoose.Schema({
  url: { type: String, required: true },
  type: String,
  providerId: String,
  alt: String,
  ownerRef: { type: mongoose.Schema.Types.ObjectId },
  meta: mongoose.Schema.Types.Mixed
}, { timestamps: true });

export default mongoose.models.Media || mongoose.model('Media', MediaSchema);
