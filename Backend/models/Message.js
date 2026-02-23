
import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  conversation: { type: mongoose.Schema.Types.ObjectId, ref: 'Conversation', index: true },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  text: String,
  attachments: [String],
  type: { type: String, enum: ['text','system','attachment'], default: 'text' }
}, { timestamps: true });

export default mongoose.models.Message || mongoose.model('Message', MessageSchema);
