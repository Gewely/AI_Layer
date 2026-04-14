import { prisma } from "@/lib/prisma";

export const workspaceService = {
  list: () => prisma.workspace.findMany({ include: { websites: true } }),
  create: (name: string, slug: string) => prisma.workspace.create({ data: { name, slug } })
};
