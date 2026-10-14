import { projects } from "@/app/data";
import { Reveal } from "./Reveal";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return <section id="projects" className="section"><Reveal><p className="eyebrow">03 / Selected work</p><div className="flex flex-wrap justify-between gap-6"><h2 className="section-title">Projects with<br/><span className="gradient-text">operational depth.</span></h2><p className="max-w-xs pt-5 text-sm leading-relaxed text-zinc-500">From production-minded Odoo modules to full-stack customer experiences.</p></div></Reveal><div className="mt-10 grid gap-4 lg:grid-cols-2">{projects.map((project, index)=><Reveal key={project.title} delay={index * .04} className={project.featured ? "lg:col-span-2" : ""}><ProjectCard project={project}/></Reveal>)}</div></section>;
}
