import type { SocialLink } from "@/types/portfolio";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const iconMap: Record<string, React.ElementType> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
};

export function ContactLinks({ links }: { links: SocialLink[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <a
            key={link.label}
            href={link.url}
            target={link.url.startsWith("mailto:") ? undefined : "_blank"}
            rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
          >
            {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
            {link.label}
          </a>
        );
      })}
    </div>
  );
}
