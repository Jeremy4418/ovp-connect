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
  title: "OVP Connect — Trouvez votre bien et votre financement",
  description: "Déposez votre projet immobilier en quelques minutes. Un courtier analyse votre financement, un agent immobilier trouve votre bien idéal. 100% gratuit pour les acheteurs.",
  keywords: "achat immobilier, courtier financement, agent immobilier, projet immobilier, crédit immobilier, mise en relation immobilière",
  authors: [{ name: "OVP Connect" }],
  creator: "OVPPRO.fr",
  publisher: "OVPPRO.fr",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://ovppro.fr",
    siteName: "OVP Connect",
    title: "OVP Connect — Trouvez votre bien et votre financement",
    description: "Déposez votre projet immobilier en quelques minutes. Un courtier analyse votre financement, un agent immobilier trouve votre bien idéal. 100% gratuit.",
    images: [
      {
        url: "https://ovppro.fr/og-image.png",
        width: 1200,
        height: 630,
        alt: "OVP Connect — Mise en relation immobilière gratuite",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OVP Connect — Trouvez votre bien et votre financement",
    description: "Déposez votre projet immobilier en quelques minutes. 100% gratuit.",
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
        {children}
      </body>
    </html>
  );
}
