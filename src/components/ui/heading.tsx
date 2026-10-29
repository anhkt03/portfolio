import { cn } from "@/lib/utils";

type Level = "h1" | "h2" | "h3" | "h4";

const styles: Record<Level, string> = {
  h1: "text-3xl sm:text-4xl font-bold tracking-tight",
  h2: "text-2xl sm:text-[1.75rem] font-semibold tracking-tight",
  h3: "text-xl font-semibold",
  h4: "text-lg font-medium",
};

export function Heading({
  as: Tag = "h2",
  children,
  className,
}: {
  as?: Level;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Tag className={cn(styles[Tag], "text-[var(--color-text)]", className)}>
      {children}
    </Tag>
  );
}
