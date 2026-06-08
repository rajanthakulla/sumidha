import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

export async function GET(req: Request, { params }: { params: Promise<{ key: string }> }) {
  try {
    const env = getRequestContext().env as { IMAGES_BUCKET: any };
    if (!env || !env.IMAGES_BUCKET) {
      return new Response("R2 bucket binding not found", { status: 500 });
    }

    const resolvedParams = await params;
    const key = resolvedParams.key;
    const object = await env.IMAGES_BUCKET.get(key);

    if (!object) {
      return new Response("Not found", { status: 404 });
    }

    const headers = new Headers();
    object.writeHttpMetadata(headers);
    headers.set("etag", object.httpEtag);
    headers.set("Cache-Control", "public, max-age=31536000, immutable");

    return new Response(object.body, {
      headers,
    });
  } catch (err) {
    console.error("Error serving image:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
