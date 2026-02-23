import mongoose from 'mongoose';

const AuditLogSchema = new mongoose.Schema({
  actor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  action: String,
  objectRef: mongoose.Schema.Types.Mixed,
  before: mongoose.Schema.Types.Mixed,
  after: mongoose.Schema.Types.Mixed
}, { timestamps: true });

export default mongoose.models.AuditLog || mongoose.model('AuditLog', AuditLogSchema);
