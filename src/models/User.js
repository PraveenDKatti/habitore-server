import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // No duplicate emails allowed
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false, // Default is a regular customer
  },
  // We can store saved addresses here later
  address: {
    street: String,
    city: String,
    postalCode: String,
    country: String,
  }
}, {
  timestamps: true // Automatically adds 'createdAt' and 'updatedAt'
});

const User = mongoose.model('User', userSchema);

export default User;