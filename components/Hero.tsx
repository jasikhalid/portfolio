import Image from "next/image";
import { ArrowUpRight, Briefcase, MapPin } from "lucide-react";
import { contact, hero, site, skills } from "@/content/site";
import { RepairMock } from "./Mockups";

const d = (seconds: number) => ({ "--d": `${seconds}s` }) as React.CSSProperties;

function Marquee({ items, reverse }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="marquee overflow-hidden">
      <div className="marquee-track flex w-max gap-2" data-reverse={reverse || undefined}>
        {[...items, ...items].map((item, i) => (
          <span key={i} aria-hidden={i >= items.length || undefined} className="chip whitespace-nowrap bg-tile">{item}</span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const stack = skills.flatMap((group) => group.items).filter((item) => !item.includes("."));
  const third = Math.ceil(stack.length / 3);

  return (
    <section aria-labelledby="hero-title" className="mx-auto grid max-w-page gap-3 px-4 pb-16 pt-6 sm:gap-4 sm:px-6 lg:grid-cols-12 lg:pb-24 lg:pt-10">
      <div className="rise tile flex flex-col justify-between border-transparent bg-brand p-6 text-on-brand sm:p-10 lg:col-span-8 lg:min-h-[34rem]">
        <p className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[13px] font-medium sm:text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-[#7ee0d2] opacity-60 motion-reduce:hidden" />
            <span className="relative h-2 w-2 rounded-full bg-[#7ee0d2]" />
          </span>
          {hero.availability}
        </p>
        <div className="mt-10">
          <h1 id="hero-title" className="font-display text-display">{hero.headline}</h1>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-on-brand-muted">{hero.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex min-h-12 items-center rounded-full bg-white px-6 font-semibold text-[#6b3f60] transition-transform hover:-translate-y-0.5">
              Contact me
            </a>
            <a href={contact.github} className="inline-flex min-h-12 items-center gap-1.5 rounded-full border border-white/40 px-6 font-semibold transition-colors hover:bg-white/10">
              GitHub <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="rise tile relative min-h-[17rem] overflow-hidden sm:min-h-[22rem] lg:col-span-4" style={d(0.08)}>
        {site.photo ? (
          <Image src={site.photo.src} alt={site.photo.alt} fill priority sizes="(min-width: 1024px) 400px, 100vw" className="object-cover" />
        ) : (
          <div aria-hidden="true" className="absolute inset-0 grid place-items-center bg-gradient-to-br from-teal via-[#2f6f6c] to-brand">
            <span className="font-display text-[9rem] font-extrabold leading-none text-white/90">MJ</span>
          </div>
        )}
        <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-tile/90 p-4 backdrop-blur" style={{ background: "color-mix(in srgb, var(--tile) 88%, transparent)" }}>
          <p className="font-display text-xl font-bold">{site.name}</p>
          <p className="text-sm text-muted">{site.role}</p>
        </div>
      </div>

      <div className="rise tile bg-sunken p-3 sm:p-4 lg:col-span-5" style={d(0.16)}>
        <RepairMock />
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-3 lg:grid-cols-1">
        <div className="rise tile lift p-5" style={d(0.22)}>
          <Briefcase size={20} className="text-teal" aria-hidden="true" />
          <p className="mt-4 text-sm text-muted">Now</p>
          <p className="font-semibold leading-snug">{site.employer.name}</p>
        </div>
        <div className="rise tile lift p-5" style={d(0.28)}>
          <MapPin size={20} className="text-plum" aria-hidden="true" />
          <p className="mt-4 text-sm text-muted">Based in</p>
          <p className="font-semibold leading-snug">Manjeri, Kerala</p>
          <p className="text-sm text-muted">Open to Gulf and remote</p>
        </div>
      </div>

      <div className="rise tile flex flex-col justify-center gap-6 overflow-hidden p-5 sm:p-6 lg:col-span-4" style={d(0.34)}>
        <div>
          <p className="text-sm text-muted">Daily stack</p>
          <p className="font-display text-h3">Python, Odoo and the web.</p>
        </div>
        <div className="space-y-2" aria-label={`Stack: ${stack.join(", ")}`} role="img">
          <Marquee items={stack.slice(0, third)} />
          <Marquee items={stack.slice(third, third * 2)} reverse />
          <Marquee items={stack.slice(third * 2)} />
        </div>
      </div>
    </section>
  );
}
