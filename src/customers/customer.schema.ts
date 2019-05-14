import { Schema } from 'mongoose';

export const CustomerSchema = new Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
    uniqueCaseInsensitive: true,
  },
  address: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
}, {
  versionKey: false,
  timestamps: true,
});
