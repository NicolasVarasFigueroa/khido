import { NextResponse } from "next/server";

function normalizeValue(value) {
  return String(value || "").trim();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function parseResponse(response) {
  const text = await response.text();

  try {
    return JSON.parse(text);
  } catch {
    return {};
  }
}

export async function POST(request) {
  try {
    const webAppUrl = process.env.GOOGLE_SHEETS_WEB_APP_URL;

    if (!webAppUrl) {
      return NextResponse.json(
        { ok: false, message: "Google Sheets is not configured." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const name = normalizeValue(body.name);
    const email = normalizeValue(body.email).toLowerCase();
    const service = normalizeValue(body.service);
    const message = normalizeValue(body.message);
    const honeypot = normalizeValue(body.website);

    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { ok: false, message: "Completa todos los campos del formulario." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, message: "Ingresa un correo válido." },
        { status: 400 }
      );
    }

    const response = await fetch(webAppUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify({
        name,
        email,
        service,
        message,
        referer: request.headers.get("referer") || "",
        ip: request.headers.get("x-forwarded-for") || "",
        source: "landing-contacto"
      }),
      cache: "no-store"
    });

    const data = await parseResponse(response);

    if (!response.ok || data.status !== "success") {
      throw new Error(data.error || "Could not append row to Google Sheets.");
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        ok: false,
        message: "No pudimos enviar el mensaje. Inténtalo nuevamente o escríbenos a contacto@khido.cl."
      },
      { status: 500 }
    );
  }
}
