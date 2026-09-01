import { Router } from "express";
import type { Request, Response } from "express";
import { prisma } from "../db";
import { requireAuth } from "../middleware/auth";
import { requireAdmin } from "../middleware/admin";

const router = Router();

// ---------- POST /api/delegations/submit ----------
// Member submits a new MUN delegation (defaults to pending, 0 points)

router.post("/submit", requireAuth, async (req: Request, res: Response) => {
  try {
    const userId = req.user!.userId;
    const { munName, hostCollege, delegationType, awardsWon, certificateUrl } = req.body;

    if (!munName || !hostCollege || !delegationType) {
      res.status(400).json({ error: "MUN name, host college, and delegation type are required." });
      return;
    }

    const delegation = await prisma.delegation.create({
      data: {
        userId,
        munName: munName.trim(),
        hostCollege: hostCollege.trim(),
        delegationType: delegationType.trim(),
        awardsWon: awardsWon?.trim() || "None",
        certificateUrl: certificateUrl?.trim() || null,
        status: "pending",
        points: 0,
      },
    });

    res.status(201).json({
      message: "Delegation submitted successfully. Pending admin approval.",
      delegation,
    });
  } catch (err) {
    console.error("Delegation submit error:", err);
    res.status(500).json({ error: "Internal server error." });
  }
});

// ---------- GET /api/delegations/my-submissions ----------
// Member sees their own delegation history

router.get("/my-submissions", requireAuth, async (req: Request, res: Response) => {
  try {
    const delegations = await prisma.delegation.findMany({
      where: { userId: req.user!.userId },
      orderBy: { createdAt: "desc" },
    });

    res.json({ delegations });
  } catch (err) {
    console.error("My delegations error:", err);
    res.status(500).json({ error: "Internal server error." });
  }
});

// ---------- GET /api/delegations/pending ----------
// Admin sees all pending delegations with submitter info

router.get("/pending", requireAuth, requireAdmin, async (req: Request, res: Response) => {
  try {
    const delegations = await prisma.delegation.findMany({
      where: { status: "pending" },
      include: {
        user: {
          select: { id: true, name: true, email: true, department: true, year: true },
        },
      },
      orderBy: { createdAt: "asc" },
    });

    res.json({ delegations });
  } catch (err) {
    console.error("Pending delegations error:", err);
    res.status(500).json({ error: "Internal server error." });
  }
});

// ---------- GET /api/delegations/all ----------
// Admin sees ALL delegations (any status) with submitter info

router.get("/all", requireAuth, requireAdmin, async (req: Request, res: Response) => {
  try {
    const delegations = await prisma.delegation.findMany({
      include: {
        user: {
          select: { id: true, name: true, email: true, department: true, year: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    res.json({ delegations });
  } catch (err) {
    console.error("All delegations error:", err);
    res.status(500).json({ error: "Internal server error." });
  }
});

// ---------- PUT /api/delegations/verify/:id ----------
// Admin approves or rejects a delegation and assigns points

router.put("/verify/:id", requireAuth, requireAdmin, async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const { status, points } = req.body;

    if (!status || !["approved", "rejected"].includes(status)) {
      res.status(400).json({ error: "Status must be 'approved' or 'rejected'." });
      return;
    }

    // Ensure the delegation exists
    const existing = await prisma.delegation.findUnique({ where: { id } });
    if (!existing) {
      res.status(404).json({ error: "Delegation not found." });
      return;
    }

    const delegation = await prisma.delegation.update({
      where: { id },
      data: {
        status,
        points: status === "approved" ? (points ?? 0) : 0,
      },
    });

    res.json({
      message: `Delegation marked as ${status}.`,
      delegation,
    });
  } catch (err) {
    console.error("Verify delegation error:", err);
    res.status(500).json({ error: "Internal server error." });
  }
});

export default router;
