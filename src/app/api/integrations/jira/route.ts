import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();
  const link = await prisma.jiraIssueLink.create({
    data: {
      recommendationId: body.recommendationId,
      jiraProjectMappingId: body.jiraProjectMappingId,
      jiraIssueKey: body.jiraIssueKey,
      jiraIssueUrl: body.jiraIssueUrl
    }
  });
  return NextResponse.json(link);
}
