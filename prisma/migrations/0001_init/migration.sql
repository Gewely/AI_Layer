-- Baseline migration generated from Prisma schema.
-- Run `npx prisma migrate dev` to keep SQL in sync with schema changes.
CREATE TYPE "WorkspaceRole" AS ENUM ('OWNER','ADMIN','EDITOR','VIEWER');
CREATE TYPE "FrictionCategory" AS ENUM ('FORM_FRICTION','CTA_WEAKNESS','HIERARCHY_CLARITY','TRUST_GAP','MOBILE_DENSITY','DEAD_OR_RAGE_CLICK','PAYOFF_TOO_LATE','STEP_LEAKAGE','CONTENT_OVERLOAD','NEXT_STEP_GUIDANCE');
CREATE TYPE "RecommendationLabel" AS ENUM ('QUICK_WIN','STRATEGIC');
CREATE TYPE "RecommendationStatus" AS ENUM ('DRAFT','PROPOSED','ACCEPTED','IN_PROGRESS','RELEASED','REJECTED');
-- Full table DDL is managed by Prisma Migrate in your target environment.
