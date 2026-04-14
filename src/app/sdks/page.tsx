import { PageShell } from "@/components/page-shell";

export default function SDKGuidePage() {
  return (
    <PageShell title="SDK install guide">
      <div className="card text-sm">
        <p>1. Add snippet in &lt;head&gt;:</p>
        <code>{`<script src=\"https://cdn.journeyops.ai/sdk.js\" data-sdk-key=\"YOUR_KEY\"></script>`}</code>
      </div>
    </PageShell>
  );
}
