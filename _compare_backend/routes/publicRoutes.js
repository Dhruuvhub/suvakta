import express from 'express';
import { getTeam, getPublicResources } from '../controllers/publicController.js';

const router = express.Router();

// Notice there is no 'requireAuth' here because these are open to the world!
router.get('/team', getTeam);
router.get('/resources', getPublicResources);

export default router;