import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { prisma } from "@/lib/prisma";

export default async function RecommendationDetailPage({ params }: { params: { id: string } }) {
  const rec = await prisma.recommendation.findUnique({ where: { id: params.id }, include: { jiraLinks: true, figmaNodeLinks: true } });
  if (!rec) return notFound();
  return <PageShell title="Recommendation detail"><div className="card"><pre>{JSON.stringify(rec, null, 2)}</pre></div></PageShell>;
}
