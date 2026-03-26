import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bildungskompass – Was funktioniert in der Bildung?",
    template: "%s – Bildungskompass",
  },
  description:
    "Evidenzbasierte Empfehlungen für Lehrkräfte und Eltern – verständlich, praxisnah, quellenbasiert.",
  metadataBase: new URL("https://bildungskompass.de"),
  openGraph: {
    type: "website",
    siteName: "Bildungskompass",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Bildungskompass" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  alternates: {
    languages: {
      de: "/de",
      en: "/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${fraunces.variable} ${sourceSans.variable}`}>
      <body className="min-h-dvh flex flex-col bg-bg text-text font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
