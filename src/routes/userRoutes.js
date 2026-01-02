import express from 'express';
import { authUser, registerUser } from '../controllers/userController.js';

const router = express.Router();

// Register Route (POST /api/users)
router.route('/').post(registerUser);

// Login Route (POST /api/users/login)
router.post('/login', authUser);

export default router;