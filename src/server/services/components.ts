import { prisma } from "@/lib/prisma";

export const componentService = {
  list: () => prisma.component.findMany({ include: { website: true, pageLinks: true } }),
  create: (websiteId: string, selector: string, label?: string) => prisma.component.create({ data: { websiteId, selector, label } })
};
