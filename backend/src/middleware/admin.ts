import type { Request, Response, NextFunction } from "express";
import { prisma } from "../db";

/**
 * Middleware: requires the authenticated user to have role === "admin".
 * Must be used AFTER requireAuth (needs req.user.userId).
 * On failure, responds with 403.
 */
export async function requireAdmin(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user!.userId },
      select: { role: true },
    });

    if (!user || user.role !== "admin") {
      res.status(403).json({ error: "Forbidden: Admin privileges required." });
      return;
    }

    next();
  } catch {
    res.status(500).json({ error: "Internal server error." });
  }
}
