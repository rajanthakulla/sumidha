import { getPrisma } from "@/lib/prisma";
import AdminClient from "./AdminClient";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const prisma = getPrisma();
  
  let images = [];
  try {
    images = await prisma.uploadedImage.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    // If table doesn't exist yet, we just pass empty array
    console.error("Failed to fetch images:", error);
  }

  return <AdminClient initialImages={images} />;
}
