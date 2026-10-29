import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kieu Thanh The Anh — Backend-focused Software Engineer",
  description:
    "Portfolio of Kieu Thanh The Anh, a backend-focused software engineer specializing in .NET, microservices, and full-stack development.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-dvh flex flex-col bg-[var(--color-bg)] text-[var(--color-text)] font-[var(--font-sans)]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-[var(--radius)] focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:text-white focus:text-sm"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
