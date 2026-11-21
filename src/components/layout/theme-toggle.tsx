"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

function readEffectiveTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "light" || attr === "dark") return attr;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

export function ThemeToggle({ labels }: { labels: { light: string; dark: string } }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(readEffectiveTheme());
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      window.localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  };

  const label = theme === "dark" ? labels.light : labels.dark;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      suppressHydrationWarning
      className="inline-flex h-8 w-8 items-center justify-center rounded-[var(--radius)] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-subtle)] hover:text-[var(--color-text)] transition-colors"
    >
      {mounted && theme === "dark" ? (
        <Moon className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Sun className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}
