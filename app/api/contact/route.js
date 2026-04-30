import { createSign } from "node:crypto";
import { NextResponse } from "next/server";

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const SHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets";
const DEFAULT_RANGE = "Contactos!A:H";

function base64Url(input) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function getPrivateKey() {
  return process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n");
}

function createJwtAssertion() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = getPrivateKey();

  if (!clientEmail || !privateKey) {
    throw new Error("Google Sheets credentials are not configured.");
  }

  const now = Math.floor(Date.now() / 1000);
  const header = {
    alg: "RS256",
    typ: "JWT"
  };
  const payload = {
    iss: clientEmail,
    scope: SHEETS_SCOPE,
    aud: TOKEN_URL,
    iat: now,
    exp: now + 3600
  };
  const unsignedToken = `${base64Url(JSON.stringify(header))}.${base64Url(JSON.stringify(payload))}`;
  const signature = createSign("RSA-SHA256").update(unsignedToken).sign(privateKey, "base64url");

  return `${unsignedToken}.${signature}`;
}

async function getAccessToken() {
  const assertion = createJwtAssertion();
  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion
    })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error_description || data.error || "Could not authenticate with Google.");
  }

  return data.access_token;
}

function normalizeValue(value) {
  return String(value || "").trim();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
    const range = process.env.GOOGLE_SHEETS_RANGE || DEFAULT_RANGE;

    if (!spreadsheetId) {
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

    const accessToken = await getAccessToken();
    const appendUrl = new URL(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}:append`
    );
    appendUrl.searchParams.set("valueInputOption", "USER_ENTERED");
    appendUrl.searchParams.set("insertDataOption", "INSERT_ROWS");

    const response = await fetch(appendUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        values: [
          [
            new Date().toLocaleString("es-CL", { timeZone: "America/Santiago" }),
            name,
            email,
            service,
            message,
            request.headers.get("referer") || "",
            request.headers.get("x-forwarded-for") || "",
            "landing-contacto"
          ]
        ]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || "Could not append row to Google Sheets.");
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        ok: false,
        message: "No pudimos enviar el mensaje. Inténtalo nuevamente o escríbenos por WhatsApp."
      },
      { status: 500 }
    );
  }
}
