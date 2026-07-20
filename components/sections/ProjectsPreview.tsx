import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n";
import { projects as projectsEn } from "@/content/en/projects";
import { projects as projectsAr } from "@/content/ar/projects";
import { projectsPreview as contentEn } from "@/content/en/home";
import { projectsPreview as contentAr } from "@/content/ar/home";

const projectsByLocale = { en: projectsEn, ar: projectsAr };
const contentByLocale = { en: contentEn, ar: contentAr };

type Props = { locale: Locale };

export function ProjectsPreview({ locale }: Props) {
  const projects = projectsByLocale[locale];
  const content = contentByLocale[locale];
  const featured = projects.slice(0, 4); // Show up to 4 projects for richer content on the single landing page

  return (
    <Section id="projects" className="pt-10 sm:pt-12 lg:pt-14 max-w-7xl mx-auto">
      <SectionHeader
        title={content.title}
        subtitle={content.subtitle}
      />
      <div className="grid gap-6 sm:gap-7 md:grid-cols-2">
        {featured.map((project) => (
          <article
            key={project.id}
            className={`rounded-[var(--radius-lg)] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 sm:p-7 shadow-[var(--shadow)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)] ${locale === "ar" ? "text-end" : ""}`}
          >
            <span className="text-xs font-medium uppercase tracking-wide text-[var(--accent)]">
              {project.businessType}
            </span>
            <h3 className="mt-2 text-lg font-semibold text-[var(--foreground)]">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-[var(--muted)] line-clamp-2">
              {project.challenge}
            </p>
            <p className="mt-2 text-sm font-medium text-[var(--foreground)]">
              {locale === "ar" ? "النتيجة: " : "Outcome: "}{project.outcome}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
