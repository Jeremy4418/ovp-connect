import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site ovppro.fr : éditeur, hébergement, propriété intellectuelle et droit applicable.",
  alternates: {
    canonical: "https://ovppro.fr/mentions-legales",
  },
};

export default function MentionsLegales() {
  return (
    <div style={{ background: "#F2EFE7", minHeight: "100vh", color: "#241F1A" }}>
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2rem", height: "64px", background: "#FBFAF6", borderBottom: "1px solid #DDD7C9" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "#241F1A", fontWeight: 700, fontSize: "16px" }}>
          <div style={{ width: "30px", height: "30px", background: "#4A5D45", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="16" height="16" fill="none" stroke="#F2EFE7" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>
          </div>
          OVP <span style={{ color: "#4A5D45" }}>Connect</span>
        </Link>
      </nav>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "3rem 2rem" }}>
        <h1 style={{ fontSize: "27px", fontWeight: 800, color: "#241F1A", marginBottom: "0.5rem" }}>Mentions légales</h1>
        <p style={{ fontSize: "13px", color: "#8A7F6E", marginBottom: "2.5rem" }}>Dernière mise à jour : août 2026</p>

        {[
          {
            title: "1. Éditeur du site",
            content: `Le site ovppro.fr est édité par la société OVPPRO.fr, dont le siège social est situé au 10 rue de Penthièvre, 75008 Paris.\n\nEmail de contact : contact@optimisez-votre-pret.fr`
          },
          {
            title: "2. Hébergement",
            content: `Le site est hébergé par Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis.\nSite web : vercel.com`
          },
          {
            title: "3. Activité",
            content: `OVP Connect est une plateforme numérique de mise en relation entre des particuliers souhaitant acquérir un bien immobilier et des professionnels de l'immobilier et du financement (agents immobiliers, courtiers en crédit).\n\nOVP Connect n'est pas un agent immobilier, un courtier en crédit immobilier, ni un établissement financier. Elle n'intervient pas dans les transactions immobilières ni dans les opérations de financement.`
          },
          {
            title: "4. Propriété intellectuelle",
            content: `L'ensemble des contenus présents sur le site ovppro.fr (textes, visuels, logo, structure) sont protégés par le droit de la propriété intellectuelle et sont la propriété exclusive d'OVPPRO.fr. Toute reproduction, représentation ou diffusion, en tout ou partie, sans l'accord préalable écrit d'OVPPRO.fr est strictement interdite.`
          },
          {
            title: "5. Limitation de responsabilité",
            content: `OVPPRO.fr s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur le site, dont elle se réserve le droit de corriger le contenu à tout moment.\n\nOVPPRO.fr décline toute responsabilité concernant les échanges entre les acheteurs et les professionnels référencés sur la plateforme, ainsi que les suites données aux mises en relation effectuées.`
          },
          {
            title: "6. Données personnelles",
            content: `Pour toute information relative au traitement de vos données personnelles, veuillez consulter notre Politique de confidentialité accessible depuis le pied de page du site.`
          },
          {
            title: "7. Droit applicable",
            content: `Le présent site est soumis au droit français. En cas de litige, les tribunaux compétents sont ceux du ressort de Paris.`
          },
        ].map(s => (
          <div key={s.title} style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "16px", fontWeight: 700, color: "#241F1A", marginBottom: "0.75rem" }}>{s.title}</h2>
            <p style={{ fontSize: "14px", color: "#4B4438", lineHeight: 1.8, whiteSpace: "pre-line" }}>{s.content}</p>
          </div>
        ))}

        <div style={{ borderTop: "1px solid #DDD7C9", paddingTop: "1.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/cgu" style={{ fontSize: "13px", color: "#4A5D45", textDecoration: "none" }}>Conditions générales d'utilisation</Link>
          <Link href="/confidentialite" style={{ fontSize: "13px", color: "#4A5D45", textDecoration: "none" }}>Politique de confidentialité</Link>
          <Link href="/" style={{ fontSize: "13px", color: "#6B5F4F", textDecoration: "none" }}>← Retour à l'accueil</Link>
        </div>
      </div>
    </div>
  );
}
