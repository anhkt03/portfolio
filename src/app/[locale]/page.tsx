import type { Metadata } from "next";
import type { Locale } from "@/types/portfolio";
import { isValidLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { getProfile, getFeaturedProjects, getExperiences, getSkills } from "@/lib/content";
import { getLabels } from "@/content/navigation";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Divider } from "@/components/ui/divider";
import { Intro } from "@/components/portfolio/intro";
import { ProjectList } from "@/components/portfolio/project-list";
import { ExperienceList } from "@/components/portfolio/experience-list";
import { SkillGroup } from "@/components/portfolio/skill-group";
import { ContactLinks } from "@/components/portfolio/contact-links";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const profile = getProfile(locale as Locale);
  return buildMetadata({
    title: profile.name,
    description: profile.summary,
    locale: locale as Locale,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const profile = getProfile(locale);
  const featured = getFeaturedProjects(locale);
  const experiences = getExperiences(locale);
  const skills = getSkills(locale);
  const labels = getLabels(locale);

  return (
    <Container>
      <Intro
        profile={profile}
        viewResumeLabel={labels.viewResume}
        downloadResumeLabel={labels.downloadResume}
      />

      <Divider />

      <Section id="featured-projects">
        <Heading as="h2">{labels.featuredProjects}</Heading>
        <div className="mt-6">
          <ProjectList
            projects={featured}
            locale={locale}
            presentLabel={labels.present}
            viewLabel={labels.viewProject}
          />
        </div>
      </Section>

      <Divider />

      <Section id="experience">
        <Heading as="h2">{labels.experience}</Heading>
        <div className="mt-8">
          <ExperienceList experiences={experiences} presentLabel={labels.present} />
        </div>
      </Section>

      <Divider />

      <Section id="skills">
        <Heading as="h2">{labels.skills}</Heading>
        <div className="mt-6 flex flex-col gap-4">
          {skills.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </div>
      </Section>

      <Divider />

      <Section id="contact">
        <Heading as="h2">{labels.contactMe}</Heading>
        <div className="mt-6">
          <ContactLinks
            profile={profile}
            intro={labels.contactIntro}
            phoneLabel={labels.phone}
            emailLabel={labels.emailMe}
            getInTouchLabel={labels.getInTouch}
            downloadResumeLabel={labels.downloadResume}
          />
        </div>
      </Section>
    </Container>
  );
}
