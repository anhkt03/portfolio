import { Container } from "@/components/ui/container";

const CURRENT_YEAR = 2026;

export function SiteFooter({ name }: { name: string }) {
  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <Container>
        <p className="text-sm text-[var(--color-text-muted)]">
          &copy; {CURRENT_YEAR} {name}
        </p>
      </Container>
    </footer>
  );
}
