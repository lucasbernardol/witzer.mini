-- CreateTable
CREATE TABLE "shortenings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "target_url" TEXT NOT NULL,
    "original_url" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "shortenings_hash_key" ON "shortenings"("hash");
