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
        <div style={{ fontSize: "12px", color: "#4A5D45", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}>Guide</div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.5px", marginBottom: "1.5rem", lineHeight: 1.2 }}>
          Le parcours d'achat immobilier
        </h1>
        <p style={{ fontSize: "17px", color: "#6B5F4F", lineHeight: 1.7, marginBottom: "3rem" }}>
          Un achat immobilier suit rarement une ligne droite, mais les grandes étapes restent assez constantes d'un projet à l'autre. En voici le déroulé.
        </p>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "21px", fontWeight: 700, marginBottom: "1.5rem" }}>Les grandes étapes</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { n: "1", title: "Définir son projet", desc: "Type de bien, secteur, surface, budget approximatif." },
              { n: "2", title: "Évaluer sa capacité d'emprunt", desc: "Un courtier analyse votre situation pour fixer un budget réaliste." },
              { n: "3", title: "Rechercher le bien", desc: "Un agent immobilier cherche les biens correspondant à vos critères et à votre budget." },
              { n: "4", title: "Visiter et comparer", desc: "Sélection des biens visités, négociation du prix avec l'aide de l'agent." },
              { n: "5", title: "Finaliser le financement", desc: "Dossier de prêt, accord de principe, puis offre de prêt définitive." },
              { n: "6", title: "Signer", desc: "Compromis de vente, puis acte authentique chez le notaire." },
            ].map(s => (
              <div key={s.n} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ width: "30px", height: "30px", background: "rgba(74,93,69,0.12)", border: "1px solid #4A5D45", color: "#4A5D45", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 700, flexShrink: 0 }}>{s.n}</div>
                <div>
                  <p style={{ fontSize: "15px", fontWeight: 700, marginBottom: "0.3rem" }}>{s.title}</p>
                  <p style={{ fontSize: "14px", color: "#6B5F4F", lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "21px", fontWeight: 700, marginBottom: "1rem" }}>Deux démarches à mener ensemble</h2>
          <p style={{ fontSize: "15px", color: "#4B4438", lineHeight: 1.8 }}>
            L'une des principales difficultés d'un achat immobilier, c'est de faire avancer en parallèle la recherche de bien et le financement, souvent gérés par des interlocuteurs différents. Coordonner ces deux démarches, avec des professionnels qui échangent sur votre projet, évite les allers-retours inutiles et fait gagner du temps.
          </p>
        </section>

        <section style={{ background: "#FBFAF6", border: "1px solid #DDD7C9", padding: "2rem", marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "19px", fontWeight: 700, marginBottom: "1rem" }}>Un seul formulaire pour démarrer</h2>
          <p style={{ fontSize: "15px", color: "#4B4438", lineHeight: 1.8, marginBottom: "1rem" }}>
            OVP Connect vous met gratuitement en relation avec un courtier et un agent immobilier de votre secteur, à partir d'un seul formulaire.
          </p>
          <Link href="/formulaire" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#4A5D45", color: "#F2EFE7", padding: "0 22px", height: "42px", fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>
            Déposer mon projet gratuitement →
          </Link>
        </section>

        <div style={{ borderTop: "1px solid #DDD7C9", paddingTop: "1.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/accompagnement-achat-immobilier" style={{ fontSize: "13px", color: "#4A5D45", textDecoration: "none" }}>L'accompagnement OVP Connect</Link>
          <Link href="/capacite-emprunt" style={{ fontSize: "13px", color: "#4A5D45", textDecoration: "none" }}>Calculer sa capacité d'emprunt</Link>
          <Link href="/" style={{ fontSize: "13px", color: "#6B5F4F", textDecoration: "none" }}>← Retour à l'accueil</Link>
        </div>
      </div>
    </div>
  );
}
