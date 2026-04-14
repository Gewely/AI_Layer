import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();
  const job = await prisma.clarityImportJob.create({ data: { clarityConnectionId: body.clarityConnectionId, status: "queued" } });
  await prisma.jobLog.create({ data: { workspaceId: body.workspaceId, jobType: "clarity_import", status: "queued", detail: job.id } });
  return NextResponse.json({ jobId: job.id });
}
