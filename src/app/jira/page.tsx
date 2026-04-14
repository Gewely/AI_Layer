import { PageShell } from "@/components/page-shell";
import { prisma } from "@/lib/prisma";

export default async function JiraSyncCenterPage() {
  const data = await prisma.jiraIssueLink.findMany({ include: { recommendation: true } });
  return <PageShell title="Jira sync center"><div className="card"><pre>{JSON.stringify(data, null, 2)}</pre></div></PageShell>;
}
