import mongoose, { Schema } from 'mongoose';

export const ProductSchema = new Schema({
  name: String,
  price: Number,
  images: [String],
  categories: [String],
});

export const ProductModel = mongoose.model('Product', ProductSchema);
