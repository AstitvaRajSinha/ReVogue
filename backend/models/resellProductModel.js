import mongoose from 'mongoose';

const resellProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: Array, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  sizes: { type: Array, required: true },
  date: { type: Number, required: true },
  condition: { type: String, enum: ['new', 'like new', 'used'], default: 'used' },
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  approved: { type: Boolean, default: false },
  status: { type: String, enum: ['available', 'sold'], default: 'available' }
});

const resellProductModel = mongoose.models.resellProduct || mongoose.model('resellProduct', resellProductSchema);

export default resellProductModel;
