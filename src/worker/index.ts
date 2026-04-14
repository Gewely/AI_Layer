import IORedis from "ioredis";
import { Worker } from "bullmq";
import { prisma } from "@/lib/prisma";
import { detectFrictionIssues } from "@/server/services/friction";
import { generateRecommendations } from "@/server/services/recommendation";

const connection = new IORedis(process.env.REDIS_URL || "redis://localhost:6379", { maxRetriesPerRequest: null });

new Worker(
  "integration-jobs",
  async (job) => {
    if (job.data.type === "clarity-import") {
      await prisma.jobLog.create({ data: { workspaceId: job.data.workspaceId, jobType: "clarity-import", status: "running", detail: job.id } });
      await detectFrictionIssues(job.data.clarityImportJobId, job.data.workspaceId);
    }
    if (job.data.type === "generate-recommendations") {
      await generateRecommendations(job.data.workspaceId);
    }
  },
  { connection }
);
