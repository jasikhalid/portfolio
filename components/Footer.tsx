import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-2 px-4 py-6 text-sm text-slate sm:px-6">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <a href="#top" className="flex min-h-11 items-center hover:text-ink">Back to top</a>
      </div>
    </footer>
  );
}
