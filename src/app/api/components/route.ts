import { NextResponse } from "next/server";
import { componentService } from "@/server/services/components";

export async function GET() { return NextResponse.json(await componentService.list()); }
export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json(await componentService.create(body.websiteId, body.selector, body.label));
}
