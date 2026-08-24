import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le parcours d'achat immobilier",
  description: "Les grandes étapes d'un achat immobilier, de la définition du projet à la signature. Comprendre le parcours pour mieux vous organiser.",
  alternates: {
    canonical: "https://ovppro.fr/achat-immobilier",
  },
};

export default function AchatImmobilier() {
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
        <div style={{ fontSize: "12px", color: "#10b981", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}>Guide</div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 600, color: "#0a1628", letterSpacing: "-0.5px", marginBottom: "1.5rem", lineHeight: 1.2 }}>
          Le parcours d'achat immobilier
        </h1>
        <p style={{ fontSize: "17px", color: "#4b5563", lineHeight: 1.7, marginBottom: "3rem" }}>
          Un achat immobilier suit généralement plusieurs grandes étapes, de la définition du projet jusqu'à la signature. Voici un aperçu du parcours pour mieux vous organiser.
        </p>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 600, color: "#0a1628", marginBottom: "1.5rem" }}>Les grandes étapes</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { n: "1", title: "Définir son projet", desc: "Type de bien, secteur géographique, surface, budget approximatif." },
              { n: "2", title: "Évaluer sa capacité d'emprunt", desc: "Un courtier en financement analyse votre situation pour définir un budget réaliste." },
              { n: "3", title: "Rechercher le bien", desc: "Un agent immobilier recherche les biens correspondant à vos critères et à votre budget." },
              { n: "4", title: "Visiter et sélectionner", desc: "Comparaison des biens visités, négociation du prix avec l'aide de l'agent." },
              { n: "5", title: "Finaliser le financement", desc: "Constitution du dossier de prêt, obtention de l'accord de principe puis de l'offre de prêt." },
              { n: "6", title: "Signer l'acte", desc: "Signature du compromis de vente, puis de l'acte authentique chez le notaire." },
            ].map(s => (
              <div key={s.n} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#d1fae5", color: "#065f46", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, flexShrink: 0 }}>{s.n}</div>
                <div>
                  <p style={{ fontSize: "15px", fontWeight: 600, color: "#0a1628", marginBottom: "0.3rem" }}>{s.title}</p>
                  <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 600, color: "#0a1628", marginBottom: "1rem" }}>Financement et recherche de bien : deux démarches à coordonner</h2>
          <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8 }}>
            L'une des principales difficultés d'un achat immobilier est de coordonner la recherche de bien et le financement, souvent gérés séparément avec des interlocuteurs différents. Mener ces deux démarches en parallèle, avec des professionnels qui échangent sur votre projet, permet de gagner du temps et d'éviter les allers-retours inutiles.
          </p>
        </section>

        <section style={{ background: "#f0fdf4", border: "0.5px solid #bbf7d0", borderRadius: "16px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 600, color: "#0a1628", marginBottom: "1rem" }}>Un seul formulaire pour démarrer</h2>
          <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, marginBottom: "1rem" }}>
            OVP Connect vous met gratuitement en relation avec un courtier en financement et un agent immobilier de votre secteur, à partir d'un seul formulaire.
          </p>
          <Link href="/formulaire" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#10b981", color: "white", padding: "0 24px", height: "44px", borderRadius: "10px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
            Déposer mon projet gratuitement →
          </Link>
        </section>

        <div style={{ borderTop: "0.5px solid #e5e7eb", paddingTop: "1.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/accompagnement-achat-immobilier" style={{ fontSize: "13px", color: "#10b981", textDecoration: "none" }}>L'accompagnement OVP Connect</Link>
          <Link href="/capacite-emprunt" style={{ fontSize: "13px", color: "#10b981", textDecoration: "none" }}>Calculer sa capacité d'emprunt</Link>
          <Link href="/" style={{ fontSize: "13px", color: "#6b7280", textDecoration: "none" }}>← Retour à l'accueil</Link>
        </div>
      </div>
    </div>
  );
}
