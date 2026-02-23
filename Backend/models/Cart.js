import mongoose from 'mongoose';

const CartItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  variantSku: String,
  qty: { type: Number, default: 1 },
  priceAtTime: Number
}, { _id: false });

const CartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },
  sessionId: { type: String, index: true },
  items: [CartItemSchema],
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Cart || mongoose.model('Cart', CartSchema);
