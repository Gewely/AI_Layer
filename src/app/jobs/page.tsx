import { PageShell } from "@/components/page-shell";
import { prisma } from "@/lib/prisma";

export default async function JobsPage() {
  const jobs = await prisma.jobLog.findMany({ orderBy: { createdAt: "desc" }, take: 30 });
  return <PageShell title="Job logs / sync logs"><div className="card"><pre>{JSON.stringify(jobs, null, 2)}</pre></div></PageShell>;
}
