import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const env = getRequestContext().env as { IMAGES_BUCKET: any };
    if (!env || !env.IMAGES_BUCKET) {
       return NextResponse.json({ error: "R2 bucket binding not found. Please bind the bucket in Cloudflare." }, { status: 500 });
    }

    const buffer = await file.arrayBuffer();
    const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    
    await env.IMAGES_BUCKET.put(fileName, buffer, {
      httpMetadata: { contentType: file.type },
    });

    const url = `/api/images/${fileName}`;

    try {
      const prisma = getPrisma();
      await prisma.uploadedImage.create({
        data: {
          key: fileName,
          url: url,
          name: file.name,
          size: file.size,
          type: file.type,
        }
      });
    } catch (dbErr) {
      console.error("Failed to save to DB:", dbErr);
      // Even if DB fails, we successfully uploaded to R2, so we can return the URL
    }

    return NextResponse.json({ url });
  } catch (err: any) {
    console.error("Upload Error:", err);
    return NextResponse.json({ error: "Server error during upload" }, { status: 500 });
  }
}
