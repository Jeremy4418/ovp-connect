import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const res = await fetch("https://app.optimisez-votre-pret.fr/api/connect", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-ovp-secret": process.env.OVP_SECRET_KEY || ""
      },
      body: JSON.stringify(data)
    });

    if (!res.ok) {
      console.error("Erreur transmission lead:", await res.text());
      return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}