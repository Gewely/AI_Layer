import { NextResponse } from "next/server";
import { pageService } from "@/server/services/pages";

export async function GET() { return NextResponse.json(await pageService.list()); }
export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json(await pageService.create(body.websiteId, body.path, body.title));
}
