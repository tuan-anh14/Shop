import mongoose from 'mongoose';

const AddressSchema = new mongoose.Schema({
  fullName: String,
  phone: String,
  line1: String,
  line2: String,
  city: String,
  state: String,
  postalCode: String,
  country: String,
  isDefault: { type: Boolean, default: false },
  type: { type: String, enum: ['shipping', 'billing'], default: 'shipping' }
}, { _id: false });

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, index: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['customer', 'seller', 'admin'], default: 'customer' },
  isVerified: { type: Boolean, default: false },
  phone: { type: String },
  avatarUrl: { type: String },
  addresses: [AddressSchema],
  metadata: { type: mongoose.Schema.Types.Mixed },
  lastLogin: Date
}, { timestamps: true });

// Password reset fields
UserSchema.add({
  resetPasswordToken: String,
  resetPasswordExpires: Date
});

UserSchema.methods.toPublic = function() {
  const obj = this.toObject();
  delete obj.passwordHash;
  return obj;
};

export default mongoose.models.User || mongoose.model('User', UserSchema);
