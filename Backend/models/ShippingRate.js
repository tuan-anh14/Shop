import mongoose from 'mongoose';

const ShippingRateSchema = new mongoose.Schema({
  carrier: String,
  service: String,
  price: Number,
  estimatedDays: Number,
  meta: mongoose.Schema.Types.Mixed
}, { timestamps: true });

export default mongoose.models.ShippingRate || mongoose.model('ShippingRate', ShippingRateSchema);
