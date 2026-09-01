import express from 'express';
import { getLeaderboard } from '../controllers/leaderboardController.js';
import { requireAuth } from '../middlewares/authMiddleware.js';

const router = express.Router();

// PROTECTED: Only logged-in members (and admins) can see the rankings
router.get('/', requireAuth, getLeaderboard);

export default router;