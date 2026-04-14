import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();
  const passwordHash = await hash(body.password, 10);
  const workspaceSlug = String(body.workspaceName).toLowerCase().replace(/\s+/g, "-");
  const user = await prisma.user.create({ data: { email: body.email, name: body.name, passwordHash } });
  const workspace = await prisma.workspace.create({ data: { name: body.workspaceName, slug: workspaceSlug } });
  await prisma.workspaceMember.create({ data: { userId: user.id, workspaceId: workspace.id, role: "OWNER" } });
  return NextResponse.json({ userId: user.id, workspaceId: workspace.id });
}
