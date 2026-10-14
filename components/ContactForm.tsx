"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xppzljze", { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (res.ok) { setStatus("success"); form.reset(); } else { setStatus("error"); }
    } catch { setStatus("error"); }
  }

  return <form onSubmit={handleSubmit} className="glass rounded-2xl p-5 sm:p-7"><p className="font-mono text-xs text-cyan-200">// SEND A MESSAGE</p><label className="mt-6 block text-xs text-zinc-400">Name<input required name="name" className="mt-2 w-full rounded-lg border border-white/10 bg-black/20 px-3 py-3 text-sm outline-none focus:border-cyan-300" placeholder="Your name"/></label><label className="mt-4 block text-xs text-zinc-400">Email<input required type="email" name="email" className="mt-2 w-full rounded-lg border border-white/10 bg-black/20 px-3 py-3 text-sm outline-none focus:border-cyan-300" placeholder="you@company.com"/></label><label className="mt-4 block text-xs text-zinc-400">Message<textarea required name="message" rows={4} className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-black/20 px-3 py-3 text-sm outline-none focus:border-cyan-300" placeholder="What are you building?"/></label><button disabled={status === "sending"} className="button-primary mt-5 disabled:cursor-not-allowed disabled:opacity-60" type="submit">{status === "sending" ? "Sending..." : "Send message"}<Send size={15}/></button>{status === "success" && <p className="mt-3 text-sm text-emerald-300">Message sent — I&apos;ll get back to you soon.</p>}{status === "error" && <p className="mt-3 text-sm text-rose-300">Something went wrong, please try again or email me directly.</p>}</form>;
}
