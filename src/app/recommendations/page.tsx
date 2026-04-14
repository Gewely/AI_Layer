import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { prisma } from "@/lib/prisma";

export default async function RecommendationCenterPage() {
  const recs = await prisma.recommendation.findMany({ orderBy: { priorityScore: "desc" }, take: 100 });
  return (
    <PageShell title="Recommendation center">
      <div className="space-y-2">
        {recs.map((rec) => (
          <Link key={rec.id} className="card block" href={`/recommendations/${rec.id}`}>
            {rec.title} — priority {rec.priorityScore}
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
