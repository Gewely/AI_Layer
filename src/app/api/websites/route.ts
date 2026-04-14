import { NextResponse } from "next/server";
import { websiteService } from "@/server/services/website";

export async function GET() {
  return NextResponse.json(await websiteService.list());
}

export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json(await websiteService.create(body.workspaceId, body.name, body.domain));
}
