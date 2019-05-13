import { Schema } from 'mongoose';

export const CustomerSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    uniqueCaseInsensitive: true,
  },
  address: { type: String, trim: true, required: true },
  phone: { type: String, trim: true, required: true },
}, {
  versionKey: false,
  timestamps: true,
});
