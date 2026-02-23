import mongoose from 'mongoose';

const InventorySchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true, index: true },
  variantSku: String,
  change: { type: Number, required: true },
  reason: String,
  referenceId: mongoose.Schema.Types.ObjectId,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

export default mongoose.models.Inventory || mongoose.model('Inventory', InventorySchema);
