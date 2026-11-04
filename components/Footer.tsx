import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-page px-4 pb-8 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line pt-6 text-sm text-muted">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <a href="#top" className="flex min-h-11 items-center hover:text-ink">Back to top</a>
      </div>
    </footer>
  );
}
