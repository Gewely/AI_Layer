import IORedis from "ioredis";
import { Queue } from "bullmq";

const connection = new IORedis(process.env.REDIS_URL || "redis://localhost:6379", { maxRetriesPerRequest: null });

export const integrationQueue = new Queue("integration-jobs", { connection });

export type IntegrationJob =
  | { type: "clarity-import"; workspaceId: string; clarityImportJobId: string }
  | { type: "generate-recommendations"; workspaceId: string };
