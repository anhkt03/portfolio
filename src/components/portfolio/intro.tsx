import type { Profile } from "@/types/portfolio";
import { Download, Eye, Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { getAssetPath } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
};

export function Intro({
  profile,
  viewResumeLabel,
  downloadResumeLabel,
}: {
  profile: Profile;
  viewResumeLabel: string;
  downloadResumeLabel: string;
}) {
  const resumeHref = profile.resumeUrl ? getAssetPath(profile.resumeUrl) : undefined;

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-[var(--max-w-reading)]">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text)]">
          {profile.name}
        </h1>
        <p className="mt-3 text-lg sm:text-xl font-medium text-[var(--color-accent)]">
          {profile.headline}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[var(--color-text-muted)]">
          {profile.location && (
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {profile.location}
            </span>
          )}
          {profile.phone && (
            <a href={`tel:${profile.phone}`} className="flex items-center gap-1.5 hover:text-[var(--color-text)]">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {profile.phone}
            </a>
          )}
        </div>
        <p className="mt-6 text-base leading-relaxed text-[var(--color-text-secondary)]">
          {profile.summary}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {resumeHref && (
            <>
              <a
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-[var(--radius)] bg-[var(--color-accent)] px-3.5 py-2 text-sm font-medium text-[var(--color-bg)] hover:bg-[var(--color-accent-hover)] transition-colors"
              >
                <Eye className="h-4 w-4" aria-hidden="true" />
                {viewResumeLabel}
              </a>
              <a
                href={resumeHref}
                download
                className="inline-flex items-center gap-1.5 rounded-[var(--radius)] border border-[var(--color-border)] px-3.5 py-2 text-sm font-medium text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                {downloadResumeLabel}
              </a>
            </>
          )}
          {profile.socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="inline-flex items-center gap-1.5 rounded-[var(--radius)] border border-[var(--color-border)] px-3 py-1.5 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-border-strong)] transition-colors"
                aria-label={link.label}
              >
                {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                <span>{link.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
