"use client";

import { useRef, useState, type FormEvent } from "react";
import { contact } from "@/content/site";

type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, string>>;
type Status = { state: "idle" | "sending" } | { state: "sent"; email: string } | { state: "failed"; message: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: FormData): Errors {
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();
  const errors: Errors = {};
  if (!name) errors.name = "Enter your name.";
  if (!email) errors.email = "Enter your email address so I can reply.";
  else if (!EMAIL.test(email)) errors.email = "This email address is missing part of it. Use the form name@company.com.";
  if (!message) errors.message = "Write a short message: what you need built, or the role you are hiring for.";
  return errors;
}

const fallback = `You can also email me at ${contact.email}.`;

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const found = validate(data);
    setErrors(found);
    const first = (Object.keys(found) as Field[])[0];
    if (first) {
      form.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus({ state: "sending" });
    try {
      const res = await fetch(contact.formspree, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (res.ok) {
        setStatus({ state: "sent", email: String(data.get("email")).trim() });
        form.current?.reset();
        return;
      }
      const body: { errors?: { field?: string; message: string }[] } = await res.json().catch(() => ({}));
      const detail = body.errors?.map((e) => (e.field ? `${e.field}: ${e.message}` : e.message)).join(" ");
      setStatus({
        state: "failed",
        message: `Your message was not sent. The form service replied with an error (${res.status}${detail ? `: ${detail}` : ""}). Try again in a minute. ${fallback}`,
      });
    } catch {
      setStatus({
        state: "failed",
        message: `Your message was not sent because the form service could not be reached. Check your connection and try again. ${fallback}`,
      });
    }
  }

  function clear(field: Field) {
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  const input =
    "mt-2 block w-full rounded-xl border border-line bg-canvas px-4 py-3 text-base text-ink transition-colors focus:border-teal aria-[invalid=true]:border-danger";

  function fieldProps(field: Field) {
    return {
      id: `contact-${field}`,
      name: field,
      "aria-invalid": Boolean(errors[field]),
      "aria-describedby": errors[field] ? `contact-${field}-error` : undefined,
      onInput: () => clear(field),
      className: input,
    };
  }

  function error(field: Field) {
    return errors[field] && <p id={`contact-${field}-error`} className="mt-1.5 text-sm text-danger">{errors[field]}</p>;
  }

  return (
    <form ref={form} onSubmit={onSubmit} noValidate aria-labelledby="contact-form-title" className="reveal tile p-6 sm:p-10">
      <h3 id="contact-form-title" className="font-display text-h3">Send a message</h3>
      <div className="mt-5 space-y-5">
        <div>
          <label htmlFor="contact-name" className="font-semibold">Name</label>
          <input {...fieldProps("name")} type="text" autoComplete="name" />
          {error("name")}
        </div>
        <div>
          <label htmlFor="contact-email" className="font-semibold">Email</label>
          <input {...fieldProps("email")} type="email" autoComplete="email" inputMode="email" />
          {error("email")}
        </div>
        <div>
          <label htmlFor="contact-message" className="font-semibold">Message</label>
          <textarea {...fieldProps("message")} rows={5} />
          {error("message")}
        </div>
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      </div>
      <button
        type="submit"
        disabled={status.state === "sending"}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-brand px-7 font-semibold text-on-brand transition-transform hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
      >
        {status.state === "sending" ? "Sending…" : "Send message"}
      </button>
      <div role="status" aria-live="polite" className="mt-4 text-sm empty:hidden">
        {status.state === "sent" && <p>Message sent. I&apos;ll reply to {status.email}.</p>}
        {status.state === "failed" && <p className="text-danger">{status.message}</p>}
      </div>
    </form>
  );
}
