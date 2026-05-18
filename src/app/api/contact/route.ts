import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
    };
    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
    }

    await prisma.contactMessage.create({
      data: { name, email, phone: phone || null, message },
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Server error." }, { status: 500 });
  }
}
