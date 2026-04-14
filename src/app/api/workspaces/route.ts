import { NextResponse } from "next/server";
import { workspaceService } from "@/server/services/workspace";

export async function GET() {
  return NextResponse.json(await workspaceService.list());
}

export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json(await workspaceService.create(body.name, body.slug));
}
