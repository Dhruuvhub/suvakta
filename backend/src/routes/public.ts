import { Router } from "express";
import type { Request, Response } from "express";
import { prisma } from "../db";

const router = Router();

// ---------- GET /api/public/team ----------
// Returns team members ordered by displayOrder. No auth required.

router.get("/team", async (_req: Request, res: Response) => {
  try {
    const team = await prisma.teamMember.findMany({
      orderBy: { displayOrder: "asc" },
    });

    res.json({ team });
  } catch (err) {
    console.error("Team fetch error:", err);
    res.status(500).json({ error: "Internal server error." });
  }
});

export default router;
