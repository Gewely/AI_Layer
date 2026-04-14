import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const payload = await req.json();
  const env = await prisma.environment.findUnique({ where: { sdkKey: payload.sdkKey } });
  if (!env) return NextResponse.json({ error: "Invalid sdk key" }, { status: 401 });

  const session = await prisma.session.upsert({
    where: { externalId: payload.sessionId },
    create: { externalId: payload.sessionId, environmentId: env.id },
    update: {}
  });

  await prisma.event.createMany({
    data: (payload.events ?? []).map((e: any) => ({
      sessionId: session.id,
      eventType: e.eventType,
      pagePath: e.pagePath,
      component: e.component,
      payload: e.payload
    }))
  });

  return NextResponse.json({ ok: true });
}
