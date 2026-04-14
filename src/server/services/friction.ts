import { FrictionCategory } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export async function detectFrictionIssues(importJobId: string, workspaceId: string) {
  const evidences = await prisma.clarityEvidence.findMany({ where: { importJobId } });
  const created = [];
  for (const ev of evidences) {
    const category = mapSignalToCategory(ev.signalType);
    const issue = await prisma.frictionIssue.create({
      data: {
        workspaceId,
        title: `${ev.signalType} detected`,
        description: ev.summary,
        category,
        severityScore: 6,
        impactScore: 7,
        effortScore: 4
      }
    });
    await prisma.frictionEvidenceLink.create({ data: { frictionIssueId: issue.id, clarityEvidenceId: ev.id } });
    created.push(issue);
  }
  return created;
}

function mapSignalToCategory(signal: string): FrictionCategory {
  if (signal.includes("rage")) return "DEAD_OR_RAGE_CLICK";
  if (signal.includes("drop")) return "STEP_LEAKAGE";
  return "NEXT_STEP_GUIDANCE";
}
