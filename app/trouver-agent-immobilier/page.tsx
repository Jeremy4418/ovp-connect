import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trouver un agent immobilier",
  description: "Comment trouver un agent immobilier adapté à votre recherche de bien. OVP Connect vous met gratuitement en relation avec un professionnel de votre secteur.",
  alternates: {
    canonical: "https://ovppro.fr/trouver-agent-immobilier",
  },
};

export default function TrouverAgent() {
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
        <div style={{ fontSize: "12px", color: "#10b981", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}>Recherche de bien</div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 600, color: "#0a1628", letterSpacing: "-0.5px", marginBottom: "1.5rem", lineHeight: 1.2 }}>
          Trouver un agent immobilier
        </h1>
        <p style={{ fontSize: "17px", color: "#4b5563", lineHeight: 1.7, marginBottom: "3rem" }}>
          L'agent immobilier est votre interlocuteur pour la recherche du bien qui correspond à votre projet. Voici comment en trouver un adapté à vos critères.
        </p>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 600, color: "#0a1628", marginBottom: "1rem" }}>Le rôle de l'agent immobilier dans votre projet</h2>
          <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, marginBottom: "1rem" }}>
            Un agent immobilier connaît le marché local : les biens disponibles, les prix pratiqués dans le secteur, et souvent des opportunités qui ne sont pas encore visibles sur les plateformes d'annonces classiques. Il affine la recherche selon vos critères réels : type de bien, surface, nombre de pièces, budget.
          </p>
          <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8 }}>
            Il vous accompagne aussi sur les aspects pratiques : organisation des visites, négociation du prix, et suivi jusqu'à la signature.
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 600, color: "#0a1628", marginBottom: "1rem" }}>Pourquoi préciser son budget avant de chercher un agent</h2>
          <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, marginBottom: "1rem" }}>
            Un agent immobilier travaille d'autant mieux avec vous que votre budget est clair dès le départ. Si votre financement n'est pas encore évalué, les biens proposés peuvent ne pas correspondre à votre capacité réelle d'emprunt, ce qui fait perdre du temps aux deux parties.
          </p>
          <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8 }}>
            C'est pour cela qu'il est utile de coordonner recherche de bien et financement dès le début du projet, plutôt que de les traiter comme deux démarches séparées.
          </p>
        </section>

        <section style={{ background: "#eff6ff", border: "0.5px solid #bfdbfe", borderRadius: "16px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 600, color: "#0a1628", marginBottom: "1rem" }}>Comment OVP Connect vous met en relation</h2>
          <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, marginBottom: "1rem" }}>
            En déposant votre projet sur OVP Connect, vous êtes mis en relation gratuitement avec un agent immobilier de votre secteur, en parallèle d'un courtier en financement. Les deux professionnels reçoivent les mêmes informations sur votre projet, ce qui simplifie la coordination entre recherche de bien et financement.
          </p>
          <Link href="/formulaire" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#10b981", color: "white", padding: "0 24px", height: "44px", borderRadius: "10px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
            Déposer mon projet gratuitement →
          </Link>
        </section>

        <div style={{ borderTop: "0.5px solid #e5e7eb", paddingTop: "1.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/trouver-courtier-immobilier" style={{ fontSize: "13px", color: "#10b981", textDecoration: "none" }}>Trouver un courtier immobilier</Link>
          <Link href="/achat-immobilier" style={{ fontSize: "13px", color: "#10b981", textDecoration: "none" }}>Le parcours d'achat immobilier</Link>
          <Link href="/" style={{ fontSize: "13px", color: "#6b7280", textDecoration: "none" }}>← Retour à l'accueil</Link>
        </div>
      </div>
    </div>
  );
}
