import { Router } from "express";
import type { Request, Response } from "express";
import { prisma } from "../db";
import { requireAuth } from "../middleware/auth";

const router = Router();

// ---------- GET /api/leaderboard ----------
// Computes the leaderboard dynamically from approved delegation points.
// No stale data — always computed fresh from the delegation records.

router.get("/", requireAuth, async (_req: Request, res: Response) => {
  try {
    // 1. Fetch all members (not admins)
    const members = await prisma.user.findMany({
      where: { role: "member" },
      select: {
        id: true,
        name: true,
        department: true,
        year: true,
        avatarUrl: true,
      },
    });

    // 2. Fetch all approved delegations
    const approvedDelegations = await prisma.delegation.findMany({
      where: { status: "approved" },
      select: {
        userId: true,
        points: true,
      },
    });

    // 3. Sum points per user
    const pointsMap = new Map<string, { totalPoints: number; totalDelegations: number }>();
    for (const d of approvedDelegations) {
      const entry = pointsMap.get(d.userId) ?? { totalPoints: 0, totalDelegations: 0 };
      entry.totalPoints += d.points;
      entry.totalDelegations += 1;
      pointsMap.set(d.userId, entry);
    }

    // 4. Build the leaderboard
    const leaderboard = members.map((member) => {
      const stats = pointsMap.get(member.id) ?? { totalPoints: 0, totalDelegations: 0 };
      return {
        id: member.id,
        name: member.name,
        department: member.department,
        year: member.year,
        avatarUrl: member.avatarUrl,
        totalPoints: stats.totalPoints,
        totalDelegations: stats.totalDelegations,
      };
    });

    // 5. Sort by total points descending
    leaderboard.sort((a, b) => b.totalPoints - a.totalPoints);

    // 6. Assign ranks (1-indexed)
    const ranked = leaderboard.map((entry, index) => ({
      rank: index + 1,
      ...entry,
    }));

    res.json({ leaderboard: ranked });
  } catch (err) {
    console.error("Leaderboard error:", err);
    res.status(500).json({ error: "Internal server error." });
  }
});

export default router;
