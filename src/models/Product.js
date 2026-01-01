import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  // Link to the User who created the product (useful for Admin tracking)
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true, // Main thumbnail
  },
  images: [
    { type: String } // Gallery images
  ],
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0,
  },
  // Arrays for variants
  colors: [{ type: String }],
  sizes: [{ type: String }],
  
  badge: {
    type: String, // e.g., "New", "Sale"
    default: null
  }
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);

export default Product;