import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// 1. Initialize Supabase Client
import './config/supabase.js';

// 2. Import Route Handlers
import publicRoutes from './routes/publicRoutes.js';
import authRoutes from './routes/authRoutes.js';
import delegationRoutes from './routes/delegationRoutes.js';

dotenv.config();

const app = express();
import leaderboardRoutes from './routes/leaderboardRoutes.js';

// 3. Global Middlewares
app.use(express.json());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL || 'http://localhost:5173', 'https://suvakta.vercel.app'],
    credentials: true,
  })
);

// 4. API Endpoints
app.use('/api/auth', authRoutes);
app.use('/api/delegations', delegationRoutes);
app.use('/api/leaderboard', leaderboardRoutes);
// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'Suvakta API is running with Supabase' });
});

app.use('/api/delegations', delegationRoutes);
app.use('/api/public', publicRoutes);

// 5. Server Listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});