import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="page pb-10">
      <div className="h-px bg-ink" />
      <div className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <p className="label tnum">© {new Date().getFullYear()} {site.name} · {site.location.label}</p>
        <p className="label hidden sm:block">Built with Next.js · Set in Geist</p>
        <a href="#top" className="label flex min-h-11 items-center hover:text-ink">Back to top ↑</a>
      </div>
    </footer>
  );
}
