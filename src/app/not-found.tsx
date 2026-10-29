import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center py-24">
      <Container className="text-center">
        <h1 className="text-3xl font-bold text-[var(--color-text)]">404</h1>
        <p className="mt-2 text-base text-[var(--color-text-muted)]">
          Page not found
        </p>
        <Link
          href="/en"
          className="mt-6 inline-block rounded-[var(--radius)] bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--color-accent-hover)] transition-colors"
        >
          Back to home
        </Link>
      </Container>
    </div>
  );
}
