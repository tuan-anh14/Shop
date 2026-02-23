import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema({
  url: String,
  alt: String,
  order: Number
}, { _id: false });

const VariantSchema = new mongoose.Schema({
  sku: String,
  attributes: { type: mongoose.Schema.Types.Mixed },
  price: Number,
  stock: { type: Number, default: 0 }
}, { _id: false });

const ProductSchema = new mongoose.Schema({
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },
  name: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, index: true },
  shortDescription: String,
  description: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', index: true },
  price: { type: Number, required: true },
  originalPrice: Number,
  currency: { type: String, default: 'USD' },
  images: [ImageSchema],
  variants: [VariantSchema],
  sku: { type: String, index: true },
  stock: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
  reviewsCount: { type: Number, default: 0 },
  isFeatured: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  attributes: { type: mongoose.Schema.Types.Mixed }
}, { timestamps: true });

ProductSchema.index({ name: 'text', description: 'text' });

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
