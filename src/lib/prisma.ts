import { PrismaClient } from "@prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";
import { getRequestContext } from "@cloudflare/next-on-pages";

export function getPrisma() {
  const env = getRequestContext().env as { DB: any };
  if (!env || !env.DB) {
    throw new Error("Cloudflare env.DB is not available. Ensure you are running in the edge runtime and the D1 binding is configured.");
  }
  const adapter = new PrismaD1(env.DB);
  return new PrismaClient({ adapter });
}
