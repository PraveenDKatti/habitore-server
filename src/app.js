/**
 * app.js
 * * Configures the Express Application
 * * Sets up Middleware (CORS, JSON parsing)
 * * Mounts Routes
 */

import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';

const app = express();

// --- Middlewares ---

// 1. Allow Frontend to communicate
app.use(cors({
  origin: 'http://localhost:5173', // Vite Frontend URL
  credentials: true
}));

// 2. Parse JSON bodies (for POST requests)
app.use(express.json());

// --- Routes ---
app.use('/api/products', productRoutes);

// Health Check Endpoint (to test if server is running)
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Habitore API is running' });
});

// will mount /api/products and /api/auth here

export default app;