import { NextResponse } from "next/server";
import { journeyService } from "@/server/services/journey";

export async function GET() { return NextResponse.json(await journeyService.list()); }
export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json(await journeyService.create(body.websiteId, body.name));
}
