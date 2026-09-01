import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import authRoutes from "./routes/auth";
import delegationRoutes from "./routes/delegations";
import leaderboardRoutes from "./routes/leaderboard";
import publicRoutes from "./routes/public";

const app = express();
const PORT = parseInt(process.env.PORT || "3001", 10);
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

// --------------- Security middleware ---------------

// Helmet — sensible HTTP security headers
app.use(helmet());

// CORS — only allow the frontend origin
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true, // allow cookies
  })
);

// Body parsing (allow up to 10MB for base64 images)
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

// Rate limiting on auth endpoints (10 requests per 15 min per IP)
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many attempts. Please try again later." },
});

// --------------- Routes ---------------

app.use("/api/auth", authLimiter, authRoutes);
app.use("/api/delegations", delegationRoutes);
app.use("/api/leaderboard", leaderboardRoutes);
app.use("/api/public", publicRoutes);

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// --------------- Global Error Handler ---------------

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (err instanceof SyntaxError && "status" in err && err.status === 400 && "body" in err) {
    res.status(400).json({ error: "Invalid JSON format" });
    return;
  }
  
  if (err.type === "entity.too.large") {
    res.status(413).json({ error: "Payload too large. Please use a smaller image." });
    return;
  }
  
  res.status(err.status || 500).json({ error: err.message || "Internal server error" });
});

// --------------- Start ---------------

app.listen(PORT, () => {
  console.log(`🚀 Suvakta API running on http://localhost:${PORT}`);
});
