import { Router } from "express";
import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import { prisma } from "../db";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../lib/tokens";
import { requireAuth } from "../middleware/auth";
import { requireAdmin } from "../middleware/admin";

const router = Router();

const SALT_ROUNDS = 12;
const REFRESH_COOKIE = "suvakta_refresh";
const COOKIE_MAX_AGE = 7 * 24 * 60 * 60 * 1000; // 7 days

// ---------- helpers ----------

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function setRefreshCookie(res: Response, token: string) {
  res.cookie(REFRESH_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
    maxAge: COOKIE_MAX_AGE,
    path: "/",
  });
}

// ---------- POST /api/auth/signup ----------

router.post("/signup", async (req: Request, res: Response) => {
  try {
    const { name, email, password, confirmPassword, department, year, collegeEmail } = req.body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 1) {
      res.status(400).json({ error: "Student name is required." });
      return;
    }
    if (!email || !isValidEmail(email)) {
      res.status(400).json({ error: "A valid email address is required." });
      return;
    }
    if (collegeEmail && !collegeEmail.toLowerCase().trim().endsWith("@mirandahouse.ac.in")) {
      res.status(400).json({ error: "Miranda House Mail ID must end with @mirandahouse.ac.in" });
      return;
    }
    if (!password || typeof password !== "string" || password.length < 8) {
      res.status(400).json({ error: "Password must be at least 8 characters." });
      return;
    }
    if (password !== confirmPassword) {
      res.status(400).json({ error: "Passwords do not match." });
      return;
    }

    // Check uniqueness
    const existing = await prisma.user.findUnique({ where: { email: email.toLowerCase().trim() } });
    if (existing) {
      res.status(409).json({ error: "An account with this email already exists." });
      return;
    }

    if (collegeEmail) {
      const existingCollege = await prisma.user.findUnique({ where: { collegeEmail: collegeEmail.toLowerCase().trim() } });
      if (existingCollege) {
        res.status(409).json({ error: "An account with this college email already exists." });
        return;
      }
    }

    // Create user
    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await prisma.user.create({
      data: {
        email: email.toLowerCase().trim(),
        name: name.trim(),
        passwordHash,
        ...(department && { department: department.trim() }),
        ...(year && { year: year.trim() }),
        ...(collegeEmail && { collegeEmail: collegeEmail.toLowerCase().trim() }),
      },
    });

    // Issue tokens
    const payload = { userId: user.id, email: user.email };
    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);

    setRefreshCookie(res, refreshToken);

    res.status(201).json({
      accessToken,
      user: { id: user.id, email: user.email, name: user.name },
    });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Internal server error." });
  }
});

// ---------- POST /api/auth/signin ----------

router.post("/signin", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !isValidEmail(email)) {
      res.status(400).json({ error: "A valid email address is required." });
      return;
    }
    if (!password) {
      res.status(400).json({ error: "Password is required." });
      return;
    }

    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase().trim() },
    });

    if (!user || !user.passwordHash) {
      res.status(401).json({ error: "Invalid email or password." });
      return;
    }

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      res.status(401).json({ error: "Invalid email or password." });
      return;
    }

    const payload = { userId: user.id, email: user.email };
    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);

    setRefreshCookie(res, refreshToken);

    res.json({
      accessToken,
      user: { id: user.id, email: user.email, name: user.name },
    });
  } catch (err) {
    console.error("Signin error:", err);
    res.status(500).json({ error: "Internal server error." });
  }
});

// ---------- POST /api/auth/refresh ----------

router.post("/refresh", async (req: Request, res: Response) => {
  try {
    const token = req.cookies?.[REFRESH_COOKIE];

    if (!token) {
      res.status(401).json({ error: "No refresh token." });
      return;
    }

    const payload = verifyRefreshToken(token);

    // Verify user still exists
    const user = await prisma.user.findUnique({ where: { id: payload.userId } });
    if (!user) {
      res.status(401).json({ error: "User not found." });
      return;
    }

    const newPayload = { userId: user.id, email: user.email };
    const accessToken = generateAccessToken(newPayload);
    const refreshToken = generateRefreshToken(newPayload);

    setRefreshCookie(res, refreshToken);

    res.json({ accessToken });
  } catch {
    res.status(401).json({ error: "Invalid or expired refresh token." });
  }
});

// ---------- POST /api/auth/signout ----------

router.post("/signout", (_req: Request, res: Response) => {
  res.clearCookie(REFRESH_COOKIE, { path: "/" });
  res.json({ message: "Signed out." });
});

// ---------- GET /api/auth/me ----------

router.get("/me", requireAuth, async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user!.userId },
      select: {
        id: true, email: true, name: true, avatarUrl: true,
        role: true, department: true, year: true, collegeEmail: true,
        createdAt: true,
      },
    });

    if (!user) {
      res.status(404).json({ error: "User not found." });
      return;
    }

    res.json({ user });
  } catch (err) {
    console.error("Me error:", err);
    res.status(500).json({ error: "Internal server error." });
  }
});

// ---------- PUT /api/auth/profile ----------

router.put("/profile", requireAuth, async (req: Request, res: Response) => {
  try {
    const { name, avatarUrl } = req.body;

    if (!name || typeof name !== "string" || name.trim().length < 1) {
      res.status(400).json({ error: "Name cannot be empty." });
      return;
    }

    const user = await prisma.user.update({
      where: { id: req.user!.userId },
      data: {
        name: name.trim(),
        ...(avatarUrl !== undefined && { avatarUrl }),
      },
      select: {
        id: true, email: true, name: true, avatarUrl: true,
        role: true, department: true, year: true, collegeEmail: true,
        createdAt: true,
      },
    });

    res.json({ user });
  } catch (err) {
    console.error("Profile update error:", err);
    res.status(500).json({ error: "Internal server error." });
  }
});

// ---------- POST /api/auth/create-member ----------
// Admin-only: create a new member or admin account

router.post("/create-member", requireAuth, requireAdmin, async (req: Request, res: Response) => {
  try {
    const { email, password, name, role, department, year, collegeEmail } = req.body;

    if (!email || !password || !name) {
      res.status(400).json({ error: "Email, password, and name are required." });
      return;
    }

    if (password.length < 8) {
      res.status(400).json({ error: "Password must be at least 8 characters." });
      return;
    }

    // Check uniqueness
    const existing = await prisma.user.findUnique({ where: { email: email.toLowerCase().trim() } });
    if (existing) {
      res.status(409).json({ error: "An account with this email already exists." });
      return;
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: {
        email: email.toLowerCase().trim(),
        name: name.trim(),
        passwordHash,
        role: role === "admin" ? "admin" : "member",
        ...(department && { department: department.trim() }),
        ...(year && { year: year.trim() }),
        ...(collegeEmail && { collegeEmail: collegeEmail.toLowerCase().trim() }),
      },
      select: {
        id: true, email: true, name: true, role: true,
        department: true, year: true, collegeEmail: true,
        createdAt: true,
      },
    });

    res.status(201).json({ message: "User created successfully.", user });
  } catch (err) {
    console.error("Create member error:", err);
    res.status(500).json({ error: "Internal server error." });
  }
});

export default router;
