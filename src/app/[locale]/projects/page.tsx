import type { Metadata } from "next";
import type { Locale } from "@/types/portfolio";
import { isValidLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { getProjects, getProfile } from "@/lib/content";
import { getLabels } from "@/content/navigation";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { ProjectList } from "@/components/portfolio/project-list";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const labels = getLabels(locale as Locale);
  const profile = getProfile(locale as Locale);
  return buildMetadata({
    title: labels.allProjects,
    description: `${labels.allProjects} — ${profile.name}`,
    locale: locale as Locale,
    path: "/projects",
  });
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const projects = getProjects(locale);
  const labels = getLabels(locale);

  return (
    <Container>
      <div className="py-12 sm:py-16">
        <Heading as="h1">{labels.allProjects}</Heading>
        <div className="mt-8">
          <ProjectList
            projects={projects}
            locale={locale}
            presentLabel={labels.present}
            viewLabel={labels.viewProject}
          />
        </div>
      </div>
    </Container>
  );
}
