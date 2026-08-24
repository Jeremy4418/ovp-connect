import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6JRWFD2CWR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6JRWFD2CWR');
          `}
        </Script>
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
      </body>
    </html>
  );
}
