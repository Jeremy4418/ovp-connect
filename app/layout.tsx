import type { Metadata } from "next";
import Script from "next/script";
import { Archivo } from "next/font/google";
import CookieConsent from "./CookieConsent";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ovppro.fr"),
  title: {
    default: "OVP Connect — Achat immobilier et financement",
    template: "%s | OVP Connect",
  },
  description: "OVP Connect accompagne gratuitement les particuliers dans leur projet immobilier en les mettant en relation avec des professionnels de l'immobilier et du financement.",
  authors: [{ name: "OVP Connect" }],
  creator: "OVPPRO.fr",
  publisher: "OVPPRO.fr",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://ovppro.fr",
    siteName: "OVP Connect",
    title: "OVP Connect — Achat immobilier et financement",
    description: "Déposez gratuitement votre projet immobilier et soyez mis en relation avec des professionnels pour votre recherche de bien et votre financement.",
    images: [
      {
        url: "https://ovppro.fr/og-image.png",
        width: 1200,
        height: 630,
        alt: "OVP Connect — Accompagnement achat immobilier et financement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OVP Connect — Achat immobilier et financement",
    description: "Déposez gratuitement votre projet immobilier. 100% gratuit.",
    images: ["https://ovppro.fr/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${archivo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-archivo), Arial, sans-serif" }}>
        <Script id="schema-website" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://ovppro.fr/#website",
            "url": "https://ovppro.fr",
            "name": "OVP Connect",
            "inLanguage": "fr-FR",
          })}
        </Script>
        <Script id="schema-organization" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://ovppro.fr/#organization",
            "name": "OVP Connect",
            "url": "https://ovppro.fr",
          })}
        </Script>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
