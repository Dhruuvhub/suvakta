import express from 'express';
import { 
  submitDelegation, 
  getPendingDelegations, 
  verifyDelegation, 
  getMyDelegations 
} from '../controllers/delegationController.js';
import { requireAuth } from '../middlewares/authMiddleware.js';
import { requireAdmin } from '../middlewares/adminMiddleware.js';

const router = express.Router();

// Member Routes (Requires Login)
router.post('/submit', requireAuth, submitDelegation);
router.get('/my-submissions', requireAuth, getMyDelegations);

// Admin Routes (Requires Login AND Admin status)
router.get('/pending', requireAuth, requireAdmin, getPendingDelegations);
router.put('/verify/:id', requireAuth, requireAdmin, verifyDelegation);

export default router;