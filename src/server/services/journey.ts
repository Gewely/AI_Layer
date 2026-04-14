import { prisma } from "@/lib/prisma";

export const journeyService = {
  list: () => prisma.journey.findMany({ include: { steps: true, website: true } }),
  create: (websiteId: string, name: string) => prisma.journey.create({ data: { websiteId, name } })
};
