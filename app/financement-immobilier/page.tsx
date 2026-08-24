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
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#fff", minHeight: "100vh" }}>
      <nav style={{ background: "#0a1628", padding: "1rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
          <div style={{ width: "32px", height: "32px", background: "#10b981", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>
          </div>
          <span style={{ fontSize: "16px", fontWeight: 500, color: "white" }}>OVP <span style={{ color: "#10b981" }}>Connect</span></span>
        </Link>
        <Link href="/formulaire" style={{ background: "#10b981", color: "white", padding: "0 18px", height: "36px", borderRadius: "8px", fontSize: "13px", fontWeight: 500, display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
          Déposer mon projet →
        </Link>
      </nav>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "3.5rem 2rem" }}>
        <div style={{ fontSize: "12px", color: "#10b981", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}>Financement</div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 600, color: "#0a1628", letterSpacing: "-0.5px", marginBottom: "1.5rem", lineHeight: 1.2 }}>
          Le financement immobilier expliqué
        </h1>
        <p style={{ fontSize: "17px", color: "#4b5563", lineHeight: 1.7, marginBottom: "3rem" }}>
          Financer un achat immobilier implique plusieurs étapes et plusieurs types de prêts possibles. Voici les bases pour comprendre comment structurer votre financement.
        </p>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 600, color: "#0a1628", marginBottom: "1rem" }}>Les grandes étapes du financement</h2>
          <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, marginBottom: "1rem" }}>
            Le financement d'un achat immobilier commence généralement par l'évaluation de votre capacité d'emprunt, en fonction de vos revenus, de vos charges et de votre apport personnel. Cette étape permet de définir un budget réaliste avant même de commencer la recherche de bien.
          </p>
          <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8 }}>
            Vient ensuite la constitution du dossier de financement, la comparaison des offres de prêt, puis la négociation des conditions (taux, durée, assurance emprunteur) jusqu'à l'obtention de l'accord de principe puis de l'offre de prêt définitive.
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 600, color: "#0a1628", marginBottom: "1rem" }}>Le rôle du courtier dans le financement</h2>
          <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, marginBottom: "1rem" }}>
            Le courtier en financement immobilier centralise ces démarches : il analyse votre situation, prépare votre dossier et le présente à plusieurs banques pour comparer les offres. Il négocie ensuite les meilleures conditions possibles compte tenu de votre profil.
          </p>
          <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8 }}>
            Cette mise en concurrence des banques est l'un des principaux intérêts de passer par un courtier plutôt que de démarcher seul un unique établissement.
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 600, color: "#0a1628", marginBottom: "1rem" }}>Financer avant ou pendant la recherche de bien ?</h2>
          <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8 }}>
            Préparer son financement en amont de la recherche de bien permet de cibler des biens réellement accessibles, et de présenter des offres d'achat plus crédibles auprès des vendeurs. C'est pourquoi il est recommandé de coordonner ces deux démarches dès le départ, plutôt que de les traiter séparément.
          </p>
        </section>

        <section style={{ background: "#f0fdf4", border: "0.5px solid #bbf7d0", borderRadius: "16px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 600, color: "#0a1628", marginBottom: "1rem" }}>Comment OVP Connect vous accompagne</h2>
          <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, marginBottom: "1rem" }}>
            En déposant votre projet sur OVP Connect, vous êtes mis en relation gratuitement avec un courtier en financement de votre secteur, en parallèle d'un agent immobilier pour votre recherche de bien.
          </p>
          <Link href="/formulaire" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#10b981", color: "white", padding: "0 24px", height: "44px", borderRadius: "10px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
            Déposer mon projet gratuitement →
          </Link>
        </section>

        <div style={{ borderTop: "0.5px solid #e5e7eb", paddingTop: "1.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/capacite-emprunt" style={{ fontSize: "13px", color: "#10b981", textDecoration: "none" }}>Calculer sa capacité d'emprunt</Link>
          <Link href="/trouver-courtier-immobilier" style={{ fontSize: "13px", color: "#10b981", textDecoration: "none" }}>Trouver un courtier immobilier</Link>
          <Link href="/" style={{ fontSize: "13px", color: "#6b7280", textDecoration: "none" }}>← Retour à l'accueil</Link>
        </div>
      </div>
    </div>
  );
}
