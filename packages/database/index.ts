import { PrismaClient } from "./generated/client/index.js";

export const prisma = new PrismaClient();
export * from "./generated/client/index.js"
export { PrismaClient }