import { RecommendationLabel } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export async function generateRecommendations(workspaceId: string) {
  const issues = await prisma.frictionIssue.findMany({ where: { workspaceId } });
  for (const issue of issues) {
    const priorityScore = issue.impactScore * 2 + issue.severityScore - issue.effortScore;
    await prisma.recommendation.create({
      data: {
        workspaceId,
        frictionIssueId: issue.id,
        title: `Improve ${issue.title}`,
        priorityScore,
        label: priorityScore > 10 ? RecommendationLabel.QUICK_WIN : RecommendationLabel.STRATEGIC,
        problemStatement: issue.description,
        evidenceSummary: "Derived from Clarity and SDK telemetry.",
        likelyCauses: "Navigation ambiguity and weak visual hierarchy.",
        proposedFix: "Refactor CTA placement and simplify form fields.",
        expectedImpact: "Increase conversion rate and lower step drop-off.",
        implementationDetail: "Update component props and page layout with A/B release.",
        acceptanceCriteria: "10% improvement in completion rate over 14 days."
      }
    });
  }
}
