
import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', index: true },
  provider: String,
  providerPaymentId: { type: String, index: true },
  amount: Number,
  currency: String,
  status: { type: String, enum: ['initiated','succeeded','failed','refunded'], default: 'initiated' },
  method: String,
  rawResponse: mongoose.Schema.Types.Mixed
}, { timestamps: true });

export default mongoose.models.Payment || mongoose.model('Payment', PaymentSchema);
