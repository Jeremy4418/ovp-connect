import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trouver un courtier immobilier",
  description: "Comment trouver un courtier en financement immobilier fiable. OVP Connect vous met gratuitement en relation avec un courtier qui analyse votre projet.",
  alternates: {
    canonical: "https://ovppro.fr/trouver-courtier-immobilier",
  },
};

export default function TrouverCourtier() {
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
          Trouver un courtier immobilier
        </h1>
        <p style={{ fontSize: "17px", color: "#4b5563", lineHeight: 1.7, marginBottom: "3rem" }}>
          Le courtier en financement immobilier est l'interlocuteur clé pour préparer votre projet d'achat. Voici comment en trouver un, et pourquoi c'est une étape à ne pas négliger.
        </p>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 600, color: "#0a1628", marginBottom: "1rem" }}>Pourquoi passer par un courtier ?</h2>
          <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, marginBottom: "1rem" }}>
            Un courtier en financement immobilier négocie votre prêt auprès de plusieurs banques, en tenant compte de votre situation professionnelle, de vos revenus et de votre apport. Il évalue votre capacité d'emprunt et vous aide à monter un dossier solide, ce qui augmente vos chances d'obtenir des conditions favorables.
          </p>
          <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8 }}>
            Contrairement à une démarche en solo auprès d'une seule banque, le courtier compare plusieurs offres pour vous, ce qui vous fait gagner du temps sur les démarches administratives.
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 600, color: "#0a1628", marginBottom: "1rem" }}>Comment choisir un courtier fiable ?</h2>
          <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, marginBottom: "1rem" }}>
            Plusieurs critères permettent d'évaluer un courtier avant de lui confier votre projet : sa connaissance de votre zone géographique, sa transparence sur ses honoraires, et sa capacité à comprendre rapidement votre situation financière pour vous orienter vers les bons établissements bancaires.
          </p>
          <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8 }}>
            Plutôt que de démarcher plusieurs courtiers un par un, il est possible d'être mis en relation directement avec un professionnel qui correspond à votre projet et à votre secteur.
          </p>
        </section>

        <section style={{ background: "#f0fdf4", border: "0.5px solid #bbf7d0", borderRadius: "16px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 600, color: "#0a1628", marginBottom: "1rem" }}>Comment OVP Connect vous met en relation</h2>
          <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, marginBottom: "1rem" }}>
            En déposant votre projet immobilier sur OVP Connect, vous êtes mis en relation gratuitement avec un courtier en financement de votre secteur. Le même formulaire permet aussi d'être connecté à un agent immobilier, pour coordonner votre recherche de bien et votre financement dès le départ.
          </p>
          <Link href="/formulaire" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#10b981", color: "white", padding: "0 24px", height: "44px", borderRadius: "10px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
            Déposer mon projet gratuitement →
          </Link>
        </section>

        <div style={{ borderTop: "0.5px solid #e5e7eb", paddingTop: "1.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/trouver-agent-immobilier" style={{ fontSize: "13px", color: "#10b981", textDecoration: "none" }}>Trouver un agent immobilier</Link>
          <Link href="/financement-immobilier" style={{ fontSize: "13px", color: "#10b981", textDecoration: "none" }}>Le financement immobilier</Link>
          <Link href="/" style={{ fontSize: "13px", color: "#6b7280", textDecoration: "none" }}>← Retour à l'accueil</Link>
        </div>
      </div>
    </div>
  );
}
