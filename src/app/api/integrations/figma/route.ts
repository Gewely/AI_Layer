import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();
  const link = await prisma.figmaNodeLink.create({
    data: {
      figmaFileLinkId: body.figmaFileLinkId,
      recommendationId: body.recommendationId,
      nodeId: body.nodeId,
      nodeName: body.nodeName,
      figmaUrl: body.figmaUrl
    }
  });
  return NextResponse.json(link);
}
