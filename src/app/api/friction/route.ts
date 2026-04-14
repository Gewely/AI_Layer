import { NextResponse } from "next/server";
import { detectFrictionIssues } from "@/server/services/friction";

export async function POST(req: Request) {
  const body = await req.json();
  const created = await detectFrictionIssues(body.importJobId, body.workspaceId);
  return NextResponse.json({ issuesCreated: created.length });
}
