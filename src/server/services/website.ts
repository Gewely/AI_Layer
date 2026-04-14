import { prisma } from "@/lib/prisma";

export const websiteService = {
  list: () => prisma.website.findMany({ include: { workspace: true, pages: true, journeys: true } }),
  create: (workspaceId: string, name: string, domain: string) =>
    prisma.website.create({ data: { workspaceId, name, domain } })
};
