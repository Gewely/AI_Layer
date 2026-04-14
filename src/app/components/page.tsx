import { PageShell } from "@/components/page-shell";
import { componentService } from "@/server/services/components";

export default async function ComponentExplorerPage() {
  const rows = await componentService.list();
  return <PageShell title="Component explorer"><div className="card"><pre>{JSON.stringify(rows, null, 2)}</pre></div></PageShell>;
}
