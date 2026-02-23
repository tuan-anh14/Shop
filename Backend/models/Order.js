import mongoose from 'mongoose';

const OrderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  name: String,
  sku: String,
  price: Number,
  qty: Number,
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { _id: false });

const AddressSchema = new mongoose.Schema({
  fullName: String,
  phone: String,
  line1: String,
  line2: String,
  city: String,
  state: String,
  postalCode: String,
  country: String
}, { _id: false });

const OrderSchema = new mongoose.Schema({
  orderNumber: { type: String, unique: true, index: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },
  items: [OrderItemSchema],
  shippingAddress: AddressSchema,
  billingAddress: AddressSchema,
  subtotal: Number,
  tax: Number,
  shippingCost: Number,
  discount: Number,
  total: Number,
  currency: { type: String, default: 'USD' },
  status: { type: String, enum: ['pending','paid','processing','shipped','delivered','cancelled','refunded'], default: 'pending' },
  trackingNumber: String,
  paymentInfo: { type: mongoose.Schema.Types.Mixed }
}, { timestamps: true });

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
