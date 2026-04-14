import { prisma } from "@/lib/prisma";

export const pageService = {
  list: () => prisma.page.findMany({ include: { website: true, pageComponents: true } }),
  create: (websiteId: string, path: string, title?: string) => prisma.page.create({ data: { websiteId, path, title } })
};
