import { PageShell } from "@/components/page-shell";
import { getOverviewMetrics } from "@/server/services/dashboard";

export default async function DashboardPage() {
  const metrics = await getOverviewMetrics();
  return (
    <PageShell title="Overview Dashboard" description="Cross-workspace KPIs for friction detection and recommendation throughput.">
      <div className="grid grid-cols-5 gap-3">
        {Object.entries(metrics).map(([k, v]) => (
          <div className="card" key={k}>
            <p className="text-xs uppercase text-slate-500">{k}</p>
            <p className="text-2xl font-semibold">{v}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
