import { prisma } from "@/lib/prisma";

export async function getOverviewMetrics() {
  const [workspaces, websites, issues, recommendations, jobs] = await Promise.all([
    prisma.workspace.count(),
    prisma.website.count(),
    prisma.frictionIssue.count(),
    prisma.recommendation.count(),
    prisma.jobLog.count()
  ]);
  return { workspaces, websites, issues, recommendations, jobs };
}
