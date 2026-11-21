import type { Profile } from "@/types/portfolio";
import { Download, Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { getAssetPath } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
};

export function ContactLinks({
  profile,
  intro,
  phoneLabel,
  emailLabel,
  getInTouchLabel,
  downloadResumeLabel,
}: {
  profile: Profile;
  intro: string;
  phoneLabel: string;
  emailLabel: string;
  getInTouchLabel: string;
  downloadResumeLabel: string;
}) {
  const resumeHref = profile.resumeUrl ? getAssetPath(profile.resumeUrl) : undefined;

  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-accent-subtle)] to-[var(--color-bg)] p-6 sm:p-8">
      <p className="max-w-[var(--max-w-reading)] text-sm sm:text-base leading-relaxed text-[var(--color-text-secondary)]">
        {intro}
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <ContactCard
          href={`mailto:${profile.email}`}
          icon={<Mail className="h-4 w-4" aria-hidden="true" />}
          label={emailLabel}
          value={profile.email}
        />
        {profile.phone && (
          <ContactCard
            href={`tel:${profile.phone}`}
            icon={<Phone className="h-4 w-4" aria-hidden="true" />}
            label={phoneLabel}
            value={profile.phone}
          />
        )}
        {profile.location && (
          <ContactCard
            icon={<MapPin className="h-4 w-4" aria-hidden="true" />}
            label="Location"
            value={profile.location}
          />
        )}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {resumeHref && (
          <a
            href={resumeHref}
            download
            className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--color-accent-hover)] transition-colors"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            {downloadResumeLabel}
          </a>
        )}
        {profile.socialLinks
          .filter((l) => l.icon !== "mail")
          .map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-sm font-medium text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                aria-label={`${getInTouchLabel} — ${link.label}`}
              >
                {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                {link.label}
              </a>
            );
          })}
      </div>
    </div>
  );
}

function ContactCard({
  href,
  icon,
  label,
  value,
}: {
  href?: string;
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  const content = (
    <>
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
        <span className="text-[var(--color-accent)]">{icon}</span>
        {label}
      </div>
      <div className="mt-1 text-sm font-medium text-[var(--color-text)] break-words">
        {value}
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-bg)] p-4 transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-bg-subtle)]"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="block rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
      {content}
    </div>
  );
}
