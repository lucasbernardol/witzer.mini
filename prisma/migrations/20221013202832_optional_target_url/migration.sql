-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_shortenings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "target_url" TEXT,
    "original_url" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_shortenings" ("created_at", "hash", "id", "original_url", "target_url", "updated_at") SELECT "created_at", "hash", "id", "original_url", "target_url", "updated_at" FROM "shortenings";
DROP TABLE "shortenings";
ALTER TABLE "new_shortenings" RENAME TO "shortenings";
CREATE UNIQUE INDEX "shortenings_hash_key" ON "shortenings"("hash");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
