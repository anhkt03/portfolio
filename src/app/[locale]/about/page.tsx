export const instant = false;

import type { Metadata } from "next";
import type { Locale } from "@/types/portfolio";
import { isValidLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { getProfile, getExperiences, getSkills, getEducation } from "@/lib/content";
import { getLabels } from "@/content/navigation";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Divider } from "@/components/ui/divider";
import { ExperienceList } from "@/components/portfolio/experience-list";
import { SkillGroup } from "@/components/portfolio/skill-group";
import { EducationCard } from "@/components/portfolio/education-card";
import { ContactLinks } from "@/components/portfolio/contact-links";

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
    title: labels.about,
    description: profile.summary,
    locale: locale as Locale,
    path: "/about",
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const profile = getProfile(locale);
  const experiences = getExperiences(locale);
  const skills = getSkills(locale);
  const education = getEducation(locale);
  const labels = getLabels(locale);

  return (
    <Container>
      <div className="py-12 sm:py-16">
        <Heading as="h1">{labels.about}</Heading>
        <p className="mt-4 max-w-[var(--max-w-reading)] text-base leading-relaxed text-[var(--color-text-secondary)]">
          {profile.summary}
        </p>
      </div>

      <Divider />

      <Section id="experience">
        <Heading as="h2">{labels.experience}</Heading>
        <div className="mt-6">
          <ExperienceList experiences={experiences} presentLabel={labels.present} />
        </div>
      </Section>

      <Divider />

      <Section id="skills">
        <Heading as="h2">{labels.skills}</Heading>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </div>
      </Section>

      <Divider />

      <Section id="education">
        <Heading as="h2">{labels.education}</Heading>
        <div className="mt-4">
          {education.map((edu) => (
            <EducationCard
              key={edu.institution}
              education={edu}
              presentLabel={labels.present}
            />
          ))}
        </div>
      </Section>

      <Divider />

      <Section id="contact">
        <Heading as="h2">{labels.contact}</Heading>
        <div className="mt-6">
          <ContactLinks links={profile.socialLinks} />
        </div>
      </Section>
    </Container>
  );
}
