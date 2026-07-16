// Contact form endpoint. Verifies the reCAPTCHA token (single-use — so this must
// be the ONLY place the token is checked) and then actually delivers the message
// via Brevo's transactional email API. This guarantees the enquiry reaches the
// inbox regardless of whether the visitor has an email client configured.

const RECAPTCHA_SECRET =
  process.env.RECAPTCHA_SECRET_KEY ??
  "6LfYZPgsAAAAAF8o8Mj3Lx2LmqjsTtefU9iSd_LR";

const VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";
const BREVO_URL = "https://api.brevo.com/v3/smtp/email";

// Where enquiries are delivered.
const TO_EMAIL = "patrick@metroassoc.com";
const TO_NAME = "Metro Associates";

// Verified Brevo sender. Override with BREVO_SENDER_EMAIL in production if a
// different verified sender/domain is preferred.
const SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL ?? "patrick@metroassoc.com";
const SENDER_NAME = process.env.BREVO_SENDER_NAME ?? "Metro Associates Website";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: {
    token?: string;
    name?: string;
    email?: string;
    phone?: string;
    company?: string;
    message?: string;
    sms?: boolean;
  };
  try {
    body = await request.json();
  } catch {
    return Response.json({ success: false, error: "invalid-request" }, { status: 400 });
  }

  const token = typeof body.token === "string" ? body.token : "";
  const name = (body.name ?? "").toString().trim().slice(0, 200);
  const email = (body.email ?? "").toString().trim().slice(0, 200);
  const phone = (body.phone ?? "").toString().trim().slice(0, 100);
  const company = (body.company ?? "").toString().trim().slice(0, 200);
  const message = (body.message ?? "").toString().trim().slice(0, 5000);
  const sms = body.sms ? "Yes" : "No";

  if (!token) {
    return Response.json({ success: false, error: "missing-token" }, { status: 400 });
  }
  if (!name || !email || !message) {
    return Response.json({ success: false, error: "missing-fields" }, { status: 400 });
  }

  // 1) Verify reCAPTCHA (bot check). Token is single-use.
  try {
    const params = new URLSearchParams({ secret: RECAPTCHA_SECRET, response: token });
    const res = await fetch(VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });
    const data = (await res.json()) as { success: boolean };
    if (!data.success) {
      return Response.json({ success: false, error: "recaptcha-failed" }, { status: 400 });
    }
  } catch {
    return Response.json({ success: false, error: "recaptcha-unreachable" }, { status: 502 });
  }

  // 2) Deliver the message via Brevo.
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return Response.json({ success: false, error: "email-not-configured" }, { status: 500 });
  }

  const html = `
    <table cellpadding="0" cellspacing="0" style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#1a1a1a;line-height:1.6;">
      <tr><td><strong>New website enquiry</strong></td></tr>
      <tr><td style="padding-top:10px"><strong>Name:</strong> ${esc(name)}</td></tr>
      <tr><td><strong>Email:</strong> ${esc(email)}</td></tr>
      <tr><td><strong>Phone:</strong> ${esc(phone) || "—"}</td></tr>
      <tr><td><strong>Company / Agency:</strong> ${esc(company) || "—"}</td></tr>
      <tr><td><strong>SMS consent:</strong> ${sms}</td></tr>
      <tr><td style="padding-top:14px;white-space:pre-wrap">${esc(message)}</td></tr>
    </table>`;

  const payload = {
    sender: { email: SENDER_EMAIL, name: SENDER_NAME },
    to: [{ email: TO_EMAIL, name: TO_NAME }],
    replyTo: { email, name: name || email },
    subject: `Website enquiry — ${name || "New contact"}`,
    htmlContent: html,
  };

  try {
    const res = await fetch(BREVO_URL, {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      return Response.json(
        { success: false, error: "send-failed", status: res.status, detail: detail.slice(0, 300) },
        { status: 502 }
      );
    }
  } catch {
    return Response.json({ success: false, error: "send-unreachable" }, { status: 502 });
  }

  return Response.json({ success: true });
}
