import { NextResponse } from "next/server";
import { generateRecommendations } from "@/server/services/recommendation";

export async function POST(req: Request) {
  const body = await req.json();
  await generateRecommendations(body.workspaceId);
  return NextResponse.json({ ok: true });
}
