import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financement immobilier",
  description: "Comprendre le financement immobilier : types de prêts, rôle du courtier, étapes clés. OVP Connect vous met en relation avec un professionnel du financement.",
  alternates: {
    canonical: "https://ovppro.fr/financement-immobilier",
  },
};

export default function FinancementImmobilier() {
  return (
    <div style={{ background: "#F2EFE7", minHeight: "100vh", color: "#241F1A" }}>
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2rem", height: "64px", background: "#FBFAF6", borderBottom: "1px solid #DDD7C9" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "#241F1A", fontWeight: 700, fontSize: "16px" }}>
          <div style={{ width: "30px", height: "30px", background: "#4A5D45", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="16" height="16" fill="none" stroke="#F2EFE7" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>
          </div>
          OVP <span style={{ color: "#4A5D45" }}>Connect</span>
        </Link>
        <Link href="/formulaire" style={{ background: "#4A5D45", color: "#F2EFE7", padding: "0 18px", height: "36px", fontSize: "13px", fontWeight: 600, display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
          Déposer mon projet →
        </Link>
      </nav>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "3.5rem 2rem" }}>
        <div style={{ fontSize: "12px", color: "#4A5D45", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}>Financement</div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.5px", marginBottom: "1.5rem", lineHeight: 1.2 }}>
          Le financement immobilier expliqué
        </h1>
        <p style={{ fontSize: "17px", color: "#6B5F4F", lineHeight: 1.7, marginBottom: "3rem" }}>
          Financer un achat implique plusieurs étapes et plusieurs types de prêts possibles. Voici de quoi comprendre comment structurer le vôtre.
        </p>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "21px", fontWeight: 700, marginBottom: "1rem" }}>Les grandes étapes</h2>
          <p style={{ fontSize: "15px", color: "#4B4438", lineHeight: 1.8, marginBottom: "1rem" }}>
            Tout commence en général par l'évaluation de votre capacité d'emprunt, calculée à partir de vos revenus, de vos charges et de votre apport. Cette étape fixe un budget réaliste, avant même de démarrer la recherche de bien.
          </p>
          <p style={{ fontSize: "15px", color: "#4B4438", lineHeight: 1.8 }}>
            Vient ensuite la constitution du dossier, la comparaison des offres, puis la négociation des conditions — taux, durée, assurance emprunteur — jusqu'à l'accord de principe puis l'offre de prêt définitive.
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "21px", fontWeight: 700, marginBottom: "1rem" }}>Le rôle du courtier</h2>
          <p style={{ fontSize: "15px", color: "#4B4438", lineHeight: 1.8, marginBottom: "1rem" }}>
            Le courtier centralise ces démarches : il analyse votre situation, prépare votre dossier et le présente à plusieurs banques pour comparer les offres, puis négocie les meilleures conditions compte tenu de votre profil.
          </p>
          <p style={{ fontSize: "15px", color: "#4B4438", lineHeight: 1.8 }}>
            Cette mise en concurrence est l'un des principaux intérêts de passer par un courtier plutôt que de démarcher une seule banque.
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "21px", fontWeight: 700, marginBottom: "1rem" }}>Avant ou pendant la recherche de bien ?</h2>
          <p style={{ fontSize: "15px", color: "#4B4438", lineHeight: 1.8 }}>
            Préparer son financement en amont permet de cibler des biens réellement accessibles, et de présenter des offres plus crédibles aux vendeurs. C'est pourquoi coordonner ces deux démarches dès le départ vaut mieux que de les traiter l'une après l'autre.
          </p>
        </section>

        <section style={{ background: "#FBFAF6", border: "1px solid #DDD7C9", padding: "2rem", marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "19px", fontWeight: 700, marginBottom: "1rem" }}>Comment OVP Connect vous accompagne</h2>
          <p style={{ fontSize: "15px", color: "#4B4438", lineHeight: 1.8, marginBottom: "1rem" }}>
            En déposant votre projet, vous êtes mis en relation gratuitement avec un courtier de votre secteur, en parallèle d'un agent immobilier pour votre recherche de bien.
          </p>
          <Link href="/formulaire" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#4A5D45", color: "#F2EFE7", padding: "0 22px", height: "42px", fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>
            Déposer mon projet gratuitement →
          </Link>
        </section>

        <div style={{ borderTop: "1px solid #DDD7C9", paddingTop: "1.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/capacite-emprunt" style={{ fontSize: "13px", color: "#4A5D45", textDecoration: "none" }}>Calculer sa capacité d'emprunt</Link>
          <Link href="/trouver-courtier-immobilier" style={{ fontSize: "13px", color: "#4A5D45", textDecoration: "none" }}>Trouver un courtier immobilier</Link>
          <Link href="/" style={{ fontSize: "13px", color: "#6B5F4F", textDecoration: "none" }}>← Retour à l'accueil</Link>
        </div>
      </div>
    </div>
  );
}
