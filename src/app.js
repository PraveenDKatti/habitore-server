/**
 * app.js
 * * Configures the Express Application
 * * Sets up Middleware (CORS, JSON parsing)
 * * Mounts Routes
 */

import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

const app = express();

// 1. Allow Frontend to communicate
app.use(cors({
  origin: 'http://localhost:5173', // Vite Frontend URL
  credentials: true
}));

// 2. Parse JSON bodies (for POST requests)
app.use(express.json());

// --- Routes ---
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes); // Mount User Routes

// Health Check Endpoint (to test if server is running)
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Habitore API is running' });
});

// --- MIDDLEWARE HERE (Must be after routes) ---

// 1. Handle 404 errors (Routes that don't exist)
app.use(notFound);

// 2. Handle 500 errors (Crashes/Logic errors)
app.use(errorHandler);

export default app;