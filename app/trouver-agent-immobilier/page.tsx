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
    <div style={{ background: "#F2EFE7", minHeight: "100vh", color: "#241F1A" }}>
      <style>{`
        @media (max-width: 480px) {
          .ovp-nav { padding: 0 1rem !important; }
          .ovp-nav-brand { font-size: 14px !important; }
          .ovp-nav-cta { padding: 0 12px !important; height: 32px !important; font-size: 11px !important; }
          .ovp-content { padding: 2rem 1.25rem !important; }
        }
      `}</style>
      <nav className="ovp-nav" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2rem", height: "64px", background: "#FBFAF6", borderBottom: "1px solid #DDD7C9" }}>
        <Link href="/" className="ovp-nav-brand" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "#241F1A", fontWeight: 700, fontSize: "16px" }}>
          <img src="/favicon.png" alt="OVP Connect" width={30} height={30} style={{ display: "block" }} />
          OVP <span style={{ color: "#4A5D45" }}>Connect</span>
        </Link>
        <Link href="/formulaire" className="ovp-nav-cta" style={{ background: "#4A5D45", color: "#F2EFE7", padding: "0 18px", height: "36px", fontSize: "13px", fontWeight: 600, display: "inline-flex", alignItems: "center", textDecoration: "none", whiteSpace: "nowrap" }}>
          Déposer mon projet →
        </Link>
      </nav>

      <div className="ovp-content" style={{ maxWidth: "720px", margin: "0 auto", padding: "3.5rem 2rem" }}>
        <div style={{ fontSize: "12px", color: "#4A5D45", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}>Recherche de bien</div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.5px", marginBottom: "1.5rem", lineHeight: 1.2 }}>
          Trouver un agent immobilier
        </h1>
        <p style={{ fontSize: "17px", color: "#6B5F4F", lineHeight: 1.7, marginBottom: "3rem" }}>
          L'agent immobilier reste l'interlocuteur le plus efficace pour trouver un bien qui correspond réellement à vos critères. Voici comment en choisir un.
        </p>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "21px", fontWeight: 700, marginBottom: "1rem" }}>Ce qu'un agent apporte concrètement</h2>
          <p style={{ fontSize: "15px", color: "#4B4438", lineHeight: 1.8, marginBottom: "1rem" }}>
            Un bon agent connaît son secteur : les prix pratiqués, les biens qui sortent tout juste sur le marché, parfois même avant qu'ils n'apparaissent sur les plateformes d'annonces. Il affine la recherche selon vos critères réels — type de bien, surface, budget — plutôt que de vous noyer sous des annonces qui ne correspondent pas.
          </p>
          <p style={{ fontSize: "15px", color: "#4B4438", lineHeight: 1.8 }}>
            Il gère aussi la partie pratique : organisation des visites, négociation du prix, suivi jusqu'à la signature.
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "21px", fontWeight: 700, marginBottom: "1rem" }}>Un budget clair change la recherche</h2>
          <p style={{ fontSize: "15px", color: "#4B4438", lineHeight: 1.8, marginBottom: "1rem" }}>
            Un agent travaille d'autant mieux qu'il connaît votre budget dès le départ. Si le financement n'est pas encore évalué, les biens proposés risquent de ne pas correspondre à ce que vous pouvez réellement emprunter — et tout le monde perd du temps.
          </p>
          <p style={{ fontSize: "15px", color: "#4B4438", lineHeight: 1.8 }}>
            C'est pour ça qu'il vaut mieux coordonner recherche de bien et financement dès le début, plutôt que de traiter les deux séparément.
          </p>
        </section>

        <section style={{ background: "#FBFAF6", border: "1px solid #DDD7C9", padding: "2rem", marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "19px", fontWeight: 700, marginBottom: "1rem" }}>Comment OVP Connect vous met en relation</h2>
          <p style={{ fontSize: "15px", color: "#4B4438", lineHeight: 1.8, marginBottom: "1rem" }}>
            En déposant votre projet, vous êtes mis en relation gratuitement avec un agent immobilier de votre secteur, en parallèle d'un courtier en financement. Les deux professionnels reçoivent les mêmes informations dès le départ.
          </p>
          <Link href="/formulaire" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#4A5D45", color: "#F2EFE7", padding: "0 22px", height: "42px", fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>
            Déposer mon projet gratuitement →
          </Link>
        </section>

        <div style={{ borderTop: "1px solid #DDD7C9", paddingTop: "1.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/trouver-courtier-immobilier" style={{ fontSize: "13px", color: "#4A5D45", textDecoration: "none" }}>Trouver un courtier immobilier</Link>
          <Link href="/achat-immobilier" style={{ fontSize: "13px", color: "#4A5D45", textDecoration: "none" }}>Le parcours d'achat immobilier</Link>
          <Link href="/" style={{ fontSize: "13px", color: "#6B5F4F", textDecoration: "none" }}>← Retour à l'accueil</Link>
        </div>
      </div>
    </div>
  );
}
