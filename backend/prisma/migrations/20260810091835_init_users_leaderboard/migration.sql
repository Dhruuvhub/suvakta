-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT,
    "name" TEXT,
    "avatarUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "LeaderboardRun" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "label" TEXT NOT NULL,
    "fromDate" DATETIME NOT NULL,
    "toDate" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "LeaderboardRanking" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "rank" INTEGER NOT NULL,
    "value" INTEGER NOT NULL,
    "byline" TEXT,
    "displayed" BOOLEAN NOT NULL DEFAULT true,
    "userId" TEXT NOT NULL,
    "runId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "LeaderboardRanking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "LeaderboardRanking_runId_fkey" FOREIGN KEY ("runId") REFERENCES "LeaderboardRun" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "LeaderboardRanking_runId_rank_idx" ON "LeaderboardRanking"("runId", "rank");

-- CreateIndex
CREATE UNIQUE INDEX "LeaderboardRanking_runId_userId_key" ON "LeaderboardRanking"("runId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "LeaderboardRanking_runId_rank_key" ON "LeaderboardRanking"("runId", "rank");
