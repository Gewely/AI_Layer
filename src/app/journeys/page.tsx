import { PageShell } from "@/components/page-shell";
import { journeyService } from "@/server/services/journey";

export default async function JourneysPage() {
  const rows = await journeyService.list();
  return <PageShell title="Journey explorer"><div className="card"><pre>{JSON.stringify(rows, null, 2)}</pre></div></PageShell>;
}
