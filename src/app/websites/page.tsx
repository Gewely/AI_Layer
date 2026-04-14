import { PageShell } from "@/components/page-shell";
import { websiteService } from "@/server/services/website";

export default async function WebsitesPage() {
  const rows = await websiteService.list();
  return <PageShell title="Websites list"> <div className="card"><pre>{JSON.stringify(rows, null, 2)}</pre></div></PageShell>;
}
