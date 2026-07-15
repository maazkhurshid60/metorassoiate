// Server-side reCAPTCHA v2 verification. The secret key must never reach the
// browser, so the token from the widget is POSTed here and checked against
// Google before the contact form is allowed to proceed.

const RECAPTCHA_SECRET =
  process.env.RECAPTCHA_SECRET_KEY ??
  "6LfYZPgsAAAAAF8o8Mj3Lx2LmqjsTtefU9iSd_LR";

const VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

export async function POST(request: Request) {
  let token = "";
  try {
    const body = await request.json();
    token = typeof body?.token === "string" ? body.token : "";
  } catch {
    return Response.json(
      { success: false, error: "invalid-request" },
      { status: 400 }
    );
  }

  if (!token) {
    return Response.json(
      { success: false, error: "missing-token" },
      { status: 400 }
    );
  }

  try {
    const params = new URLSearchParams({
      secret: RECAPTCHA_SECRET,
      response: token,
    });

    const res = await fetch(VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    const data = (await res.json()) as {
      success: boolean;
      "error-codes"?: string[];
    };

    return Response.json({
      success: Boolean(data.success),
      errors: data["error-codes"] ?? [],
    });
  } catch {
    return Response.json(
      { success: false, error: "verification-failed" },
      { status: 502 }
    );
  }
}
