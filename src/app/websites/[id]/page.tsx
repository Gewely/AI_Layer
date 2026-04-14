import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { prisma } from "@/lib/prisma";

export default async function WebsiteDetailPage({ params }: { params: { id: string } }) {
  const site = await prisma.website.findUnique({ where: { id: params.id }, include: { pages: true, journeys: true, components: true } });
  if (!site) return notFound();
  return <PageShell title="Website detail"><div className="card"><pre>{JSON.stringify(site, null, 2)}</pre></div></PageShell>;
}
