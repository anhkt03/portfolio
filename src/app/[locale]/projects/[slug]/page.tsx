export const instant = false;

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/types/portfolio";
import { isValidLocale, locales } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/content";
import { getLabels } from "@/content/navigation";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Divider } from "@/components/ui/divider";
import { CaseStudyHeader } from "@/components/portfolio/case-study-header";
import { TechnicalDecisions } from "@/components/portfolio/technical-decisions";

export function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) return {};
  const project = getProjectBySlug(locale as Locale, slug);
  if (!project) return {};
  return buildMetadata({
    title: project.title,
    description: project.shortDescription,
    locale: locale as Locale,
    path: `/projects/${slug}`,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  const locale = localeParam as Locale;
  const project = getProjectBySlug(locale, slug);
  const labels = getLabels(locale);

  if (!project) notFound();

  return (
    <Container>
      <CaseStudyHeader project={project} locale={locale} labels={labels} />

      <div className="max-w-[var(--max-w-reading)]">
        {project.responsibilities && project.responsibilities.length > 0 && (
          <>
            <Divider />
            <Section>
              <Heading as="h2">{labels.responsibilities}</Heading>
              <ul className="mt-4 space-y-2">
                {project.responsibilities.map((r, i) => (
                  <li
                    key={i}
                    className="text-sm leading-relaxed text-[var(--color-text-secondary)] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[var(--color-text-muted)]"
                  >
                    {r}
                  </li>
                ))}
              </ul>
            </Section>
          </>
        )}

        {project.architecture && (
          <>
            <Divider />
            <Section>
              <Heading as="h2">{labels.architecture}</Heading>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {project.architecture}
              </p>
            </Section>
          </>
        )}

        {project.technicalDecisions && project.technicalDecisions.length > 0 && (
          <>
            <Divider />
            <Section>
              <Heading as="h2">{labels.technicalDecisions}</Heading>
              <div className="mt-4">
                <TechnicalDecisions decisions={project.technicalDecisions} />
              </div>
            </Section>
          </>
        )}

        {project.outcomes && project.outcomes.length > 0 && (
          <>
            <Divider />
            <Section>
              <Heading as="h2">{labels.outcomes}</Heading>
              <ul className="mt-4 space-y-2">
                {project.outcomes.map((o, i) => (
                  <li
                    key={i}
                    className="text-sm leading-relaxed text-[var(--color-text-secondary)] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[var(--color-text-muted)]"
                  >
                    {o}
                  </li>
                ))}
              </ul>
            </Section>
          </>
        )}
      </div>
    </Container>
  );
}
