import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Hedgehog Café | Sector 7, Chandigarh",
  description: "Coffee, books and comfort food in Sector 7, Chandigarh.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
