import { PageShell } from "@/components/page-shell";
import { pageService } from "@/server/services/pages";

export default async function PagesExplorerPage() {
  const rows = await pageService.list();
  return <PageShell title="Pages explorer"><div className="card"><pre>{JSON.stringify(rows, null, 2)}</pre></div></PageShell>;
}
