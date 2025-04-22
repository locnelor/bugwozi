import { prisma } from "@pkg/database"
export const getPrismaClient = () => {
  return prisma
}