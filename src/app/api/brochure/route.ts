import { NextResponse } from "next/server";

const brochure = `Sumida International — Study in Japan Brochure

Who we are
Sumida International Education Consultancy guides students from Nepal to Japanese universities, vocational colleges, and language schools with end-to-end admissions and visa support.

What we help with
- Personalized counseling and pathway planning
- Application documentation and translations
- COE and student visa guidance
- Pre-departure orientation and arrival support

Contact
New Baneshwor, Kathmandu
Phone: +977 1-2345678
Email: info@sumida.edu.np

This brochure was generated from the Sumida International website.
`;

export async function GET() {
  return new NextResponse(brochure, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": 'attachment; filename="sumida-study-in-japan-brochure.txt"',
    },
  });
}
