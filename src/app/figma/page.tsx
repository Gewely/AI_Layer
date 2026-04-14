import { PageShell } from "@/components/page-shell";
import { prisma } from "@/lib/prisma";

export default async function FigmaMappingCenterPage() {
  const data = await prisma.figmaNodeLink.findMany({ include: { recommendation: true } });
  return <PageShell title="Figma mapping center"><div className="card"><pre>{JSON.stringify(data, null, 2)}</pre></div></PageShell>;
}
