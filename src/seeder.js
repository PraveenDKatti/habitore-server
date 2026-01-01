import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/User.js';
import Product from './models/Product.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // 1. Clear existing data
    await Product.deleteMany();
    await User.deleteMany();

    // 2. Insert Users
    const createdUsers = await User.insertMany(users);
    
    // 3. Get the Admin User (First one in our array)
    const adminUser = createdUsers[0]._id;

    // 4. Map products to include the Admin ID
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    // 5. Insert Products
    await Product.insertMany(sampleProducts);

    console.log('✅ Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();

    console.log('🔴 Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

// Check command line arguments (node src/seeder.js -d)
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}