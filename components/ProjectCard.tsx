"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import type { Project } from "@/app/data";

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(project.featured ?? false);

  return <article className={`group glass relative overflow-hidden rounded-2xl p-5 transition duration-300 hover:border-cyan-300/30 sm:p-6 ${project.featured ? "md:p-8" : ""}`}><div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-violet-600/10 blur-3xl group-hover:bg-cyan-400/15"/><div className="relative"><div className="flex flex-wrap items-start justify-between gap-4"><div><p className="font-mono text-[10px] uppercase tracking-[.12em] text-cyan-300">{project.type}</p><h3 className="mt-2 text-2xl font-semibold tracking-[-.04em]">{project.title}</h3></div><p className="font-mono text-[10px] text-zinc-500">{project.period}</p></div><p className="mt-4 max-w-2xl leading-relaxed text-zinc-400">{project.description}</p><div className="mt-5 flex flex-wrap gap-1.5">{project.tags.map(tag=><span className="tag" key={tag}>{tag}</span>)}</div><div className={`${open?"grid":"hidden"} mt-5 gap-2 border-t border-white/10 pt-5`}>{project.bullets.map((bullet, index)=><p className="flex gap-2 text-sm leading-relaxed text-zinc-400" key={bullet}><span className="text-cyan-300">0{index + 1}</span>{bullet}</p>)}<p className="mt-2 font-mono text-[10px] text-zinc-600">// {project.placeholder}</p></div><button onClick={() => setOpen(!open)} className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] text-cyan-200">{open ? "collapse details" : "inspect project"}<ChevronDown className={open ? "rotate-180" : ""} size={14}/></button>{project.href && <a href={project.href} className="ml-4 inline-flex text-cyan-300"><ArrowUpRight size={16}/></a>}</div></article>;
}
