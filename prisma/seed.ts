import { hash } from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await hash("DemoPass123!", 10);
  const user = await prisma.user.upsert({
    where: { email: "owner@journeyops.ai" },
    update: {},
    create: { email: "owner@journeyops.ai", name: "Demo Owner", passwordHash }
  });

  const workspace = await prisma.workspace.upsert({
    where: { slug: "acme-growth" },
    update: {},
    create: { name: "Acme Growth", slug: "acme-growth" }
  });

  await prisma.workspaceMember.upsert({
    where: { userId_workspaceId: { userId: user.id, workspaceId: workspace.id } },
    update: {},
    create: { userId: user.id, workspaceId: workspace.id, role: "OWNER" }
  });

  const website = await prisma.website.create({ data: { workspaceId: workspace.id, name: "Acme SaaS", domain: "acme.com" } });
  await prisma.environment.create({ data: { websiteId: website.id, name: "Production", sdkKey: "sdk_demo_prod" } });
  const page = await prisma.page.create({ data: { websiteId: website.id, path: "/pricing", title: "Pricing" } });
  const journey = await prisma.journey.create({ data: { websiteId: website.id, name: "Signup Journey" } });
  await prisma.journeyStep.create({ data: { journeyId: journey.id, pageId: page.id, name: "Review pricing", position: 1 } });

  console.log("Seed complete");
}

main().finally(() => prisma.$disconnect());
