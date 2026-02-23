import mongoose from 'mongoose';

const ReturnItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  qty: Number,
  reason: String
}, { _id: false });

const ReturnRequestSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', index: true },
  items: [ReturnItemSchema],
  reason: String,
  status: { type: String, enum: ['requested','approved','rejected','received','refunded'], default: 'requested' },
  refundAmount: Number
}, { timestamps: true });

export default mongoose.models.ReturnRequest || mongoose.model('ReturnRequest', ReturnRequestSchema);
