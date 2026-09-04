"use client";
import { Download, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { contacts } from "@/app/data";
import { FormEvent, useState } from "react";

export default function Contact() {
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

  return <><section id="testimonials" className="border-y border-white/[.07] bg-[#0b0c12]"><div className="section py-16 text-center"><p className="eyebrow">06 / Testimonials</p><p className="mt-5 text-xl text-zinc-400">Client feedback coming soon<span className="text-cyan-300">.</span></p></div></section><section id="contact" className="section"><div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]"><div><p className="eyebrow">07 / Contact</p><h2 className="section-title">Let&apos;s build the<br/><span className="gradient-text">right system.</span></h2><p className="max-w-sm leading-relaxed text-zinc-400">Open to full-time roles, freelance work, and conversations about a tricky business workflow.</p><div className="mt-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-2 font-mono text-[10px] text-emerald-300"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300"/>OPEN TO FULL-TIME & FREELANCE</div><div className="mt-8 grid gap-3 text-sm text-zinc-400"><a href={`mailto:${contacts.email}`} className="flex items-center gap-3 hover:text-cyan-200"><Mail size={16}/>{contacts.email}</a><a href="https://wa.me/917736219598" className="flex items-center gap-3 hover:text-cyan-200"><Phone size={16}/>{contacts.phone}</a><p className="flex items-center gap-3"><MapPin size={16}/>{contacts.location} · open to relocation</p><div className="flex gap-4 pt-2"><a aria-label="GitHub" href={contacts.github}><Github size={18}/></a><a aria-label="LinkedIn" href={contacts.linkedin}><Linkedin size={18}/></a><a href={contacts.resume} className="flex items-center gap-1.5 font-mono text-xs text-cyan-300"><Download size={14}/> Resume</a></div></div></div><form onSubmit={handleSubmit} className="glass rounded-2xl p-5 sm:p-7"><p className="font-mono text-xs text-cyan-200">// SEND A MESSAGE</p><label className="mt-6 block text-xs text-zinc-400">Name<input required name="name" className="mt-2 w-full rounded-lg border border-white/10 bg-black/20 px-3 py-3 text-sm outline-none focus:border-cyan-300" placeholder="Your name"/></label><label className="mt-4 block text-xs text-zinc-400">Email<input required type="email" name="email" className="mt-2 w-full rounded-lg border border-white/10 bg-black/20 px-3 py-3 text-sm outline-none focus:border-cyan-300" placeholder="you@company.com"/></label><label className="mt-4 block text-xs text-zinc-400">Message<textarea required name="message" rows={4} className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-black/20 px-3 py-3 text-sm outline-none focus:border-cyan-300" placeholder="What are you building?"/></label><button disabled={status === "sending"} className="button-primary mt-5 disabled:cursor-not-allowed disabled:opacity-60" type="submit">{status === "sending" ? "Sending..." : "Send message"}<Send size={15}/></button>{status === "success" && <p className="mt-3 text-sm text-emerald-300">Message sent — I&apos;ll get back to you soon.</p>}{status === "error" && <p className="mt-3 text-sm text-rose-300">Something went wrong, please try again or email me directly.</p>}</form></div></section></>;
}
