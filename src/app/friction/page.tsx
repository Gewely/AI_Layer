import { PageShell } from "@/components/page-shell";
import { prisma } from "@/lib/prisma";

export default async function FrictionCenterPage() {
  const issues = await prisma.frictionIssue.findMany({ orderBy: { detectedAt: "desc" }, take: 100 });
  return <PageShell title="Friction center"><div className="card"><pre>{JSON.stringify(issues, null, 2)}</pre></div></PageShell>;
}
