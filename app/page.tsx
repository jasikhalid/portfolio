import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Prompting from "@/components/Prompting";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import { contact, site, skills } from "@/content/site";

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: site.alternateName,
  url: site.url,
  email: `mailto:${contact.email}`,
  jobTitle: site.role,
  worksFor: { "@type": "Organization", name: site.employer.name },
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of Calicut" },
  address: { "@type": "PostalAddress", addressLocality: site.location.city, addressRegion: site.location.region, addressCountry: site.location.country },
  sameAs: [contact.linkedin, contact.github],
  knowsAbout: ["Odoo", ...skills.flatMap((group) => group.items).filter((item) => !item.includes("."))],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }} />
      <Hero />
      <Work />
      <Skills />
      <Experience />
      <Prompting />
      <About />
      <Contact />
    </>
  );
}
