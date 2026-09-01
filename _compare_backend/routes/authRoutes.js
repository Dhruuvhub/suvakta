import express from 'express';
import { createMember, loginUser, getMyProfile } from '../controllers/authController.js';
import { requireAuth } from '../middlewares/authMiddleware.js';
import { requireAdmin } from '../middlewares/adminMiddleware.js';

const router = express.Router();

// Public: Member / Admin Login
router.post('/login', loginUser);

// Protected (Members & Admins): View own profile
router.get('/me', requireAuth, getMyProfile);

// Protected (Admin Only): Create new member accounts
router.post('/create-member', requireAuth, requireAdmin, createMember);

export default router;