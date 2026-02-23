
import mongoose from 'mongoose';

const CouponSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true, index: true },
  type: { type: String, enum: ['percentage','fixed','free_shipping'], default: 'percentage' },
  value: { type: Number, required: true },
  minOrderValue: Number,
  usageLimit: Number,
  usagePerUser: Number,
  usedCount: { type: Number, default: 0 },
  startsAt: Date,
  expiresAt: Date,
  active: { type: Boolean, default: true },
  applicableProductIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  applicableCategoryIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }]
}, { timestamps: true });

export default mongoose.models.Coupon || mongoose.model('Coupon', CouponSchema);
