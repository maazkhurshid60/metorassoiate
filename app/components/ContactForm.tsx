"use client";

import { useEffect, useRef, useState } from "react";
import { IconArrow, IconCheck } from "./Icons";
import { EMAIL, RECAPTCHA_SITE_KEY } from "../lib/site";

const inputCls =
  "w-full border border-white/12 bg-navy-900 px-4 py-3 text-sm text-white placeholder:text-ink-500 transition-colors focus:border-amber-500 focus:outline-none";

type Grecaptcha = {
  render: (
    el: HTMLElement,
    opts: {
      sitekey: string;
      theme?: "light" | "dark";
      callback?: (token: string) => void;
      "expired-callback"?: () => void;
      "error-callback"?: () => void;
    }
  ) => number;
  reset: (widgetId?: number) => void;
};

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
  }
}

const SCRIPT_ID = "recaptcha-v2-api";

/** Load Google's reCAPTCHA script once and resolve when the API is ready. */
function loadRecaptcha(): Promise<Grecaptcha> {
  return new Promise((resolve) => {
    if (window.grecaptcha?.render) return resolve(window.grecaptcha);

    if (!document.getElementById(SCRIPT_ID)) {
      const s = document.createElement("script");
      s.id = SCRIPT_ID;
      s.src = "https://www.google.com/recaptcha/api.js?render=explicit";
      s.async = true;
      s.defer = true;
      document.head.appendChild(s);
    }

    const poll = () => {
      if (window.grecaptcha?.render) resolve(window.grecaptcha);
      else window.setTimeout(poll, 100);
    };
    poll();
  });
}

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [token, setToken] = useState("");
  const [status, setStatus] = useState<"idle" | "verifying">("idle");
  const [error, setError] = useState("");

  const boxRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<number | null>(null);

  useEffect(() => {
    let active = true;
    loadRecaptcha().then((grecaptcha) => {
      if (!active || !boxRef.current || widgetId.current !== null) return;
      widgetId.current = grecaptcha.render(boxRef.current, {
        sitekey: RECAPTCHA_SITE_KEY,
        theme: "dark",
        callback: (t) => {
          setToken(t);
          setError("");
        },
        "expired-callback": () => setToken(""),
        "error-callback": () => setToken(""),
      });
    });
    return () => {
      active = false;
    };
  }, []);

  const resetCaptcha = () => {
    setToken("");
    if (window.grecaptcha && widgetId.current !== null) {
      window.grecaptcha.reset(widgetId.current);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Read the form synchronously — currentTarget is not stable after `await`.
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const company = String(data.get("company") ?? "");
    const message = String(data.get("message") ?? "");
    const sms = data.get("sms") ? "Yes" : "No";

    if (!token) {
      setError("Please complete the reCAPTCHA before sending.");
      return;
    }

    setStatus("verifying");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token,
          name,
          email,
          phone,
          company,
          message,
          sms: sms === "Yes",
        }),
      });
      const result = await res.json();
      if (!result.success) {
        setError(
          result.error === "recaptcha-failed"
            ? "reCAPTCHA verification failed. Please try again."
            : "Sorry — your message couldn't be sent. Please email us directly."
        );
        resetCaptcha();
        setStatus("idle");
        return;
      }
    } catch {
      setError("Could not reach the server. Please try again in a moment.");
      setStatus("idle");
      return;
    }

    resetCaptcha();
    setStatus("idle");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-4 border border-amber-500/40 bg-amber-500/5 p-8">
        <span className="inline-flex h-12 w-12 items-center justify-center bg-amber-500 text-navy-950">
          <IconCheck className="h-6 w-6" />
        </span>
        <div>
          <h3 className="text-xl font-bold text-white">Thanks — your message has been sent.</h3>
          <p className="mt-2 text-ink-300">
            We&apos;ve received your enquiry and will be in touch shortly. You can
            also reach us directly at{" "}
            <a href={`mailto:${EMAIL}`} className="text-amber-400 hover:underline">
              {EMAIL}
            </a>{" "}
            or +1 239-255-5921.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mono-label mt-2 text-amber-400 hover:text-amber-300"
        >
          ← Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="mono-label text-ink-400">Full Name *</span>
          <input name="name" required placeholder="Jane Doe" className={inputCls} />
        </label>
        <label className="grid gap-2">
          <span className="mono-label text-ink-400">Email *</span>
          <input
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className={inputCls}
          />
        </label>
        <label className="grid gap-2">
          <span className="mono-label text-ink-400">Phone</span>
          <input name="phone" type="tel" placeholder="+1 (555) 000-0000" className={inputCls} />
        </label>
        <label className="grid gap-2">
          <span className="mono-label text-ink-400">Company / Agency</span>
          <input name="company" placeholder="Department of Transportation" className={inputCls} />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="mono-label text-ink-400">Message *</span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Tell us about the role you're hiring for, or the position you're seeking…"
          className={`${inputCls} resize-y`}
        />
      </label>

      <label className="flex items-start gap-3 text-sm leading-6 text-ink-400">
        <input
          name="sms"
          type="checkbox"
          className="mt-1 h-4 w-4 shrink-0 accent-amber-500"
        />
        <span>
          By submitting this form you agree to receive SMS from Metro Associates.
          Carrier and data rates may apply. Message frequency may vary. Reply STOP
          at any time to end messaging, or reply HELP for more information.
        </span>
      </label>

      {/* Google reCAPTCHA v2 */}
      <div className="min-h-[78px]">
        <div ref={boxRef} />
      </div>

      {error && (
        <p className="mono-label text-[11px] text-red-400" role="alert">
          {error}
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={status === "verifying"}
          className="group inline-flex items-center gap-2 bg-amber-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "verifying" ? "Verifying…" : "Send Message"}
          <IconArrow className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </form>
  );
}
