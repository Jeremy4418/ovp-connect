import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accompagnement achat immobilier",
  description: "Comment OVP Connect accompagne gratuitement les acheteurs : un courtier en financement et un agent immobilier mobilisés à partir d'un seul formulaire.",
  alternates: {
    canonical: "https://ovppro.fr/accompagnement-achat-immobilier",
  },
};

export default function AccompagnementAchat() {
  return (
    <div style={{ background: "#F2EFE7", minHeight: "100vh", color: "#241F1A" }}>
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2rem", height: "64px", background: "#FBFAF6", borderBottom: "1px solid #DDD7C9" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "#241F1A", fontWeight: 700, fontSize: "16px" }}>
          <img src="/favicon.png" alt="OVP Connect" width={30} height={30} style={{ display: "block" }} />
          OVP <span style={{ color: "#4A5D45" }}>Connect</span>
        </Link>
        <Link href="/formulaire" style={{ background: "#4A5D45", color: "#F2EFE7", padding: "0 18px", height: "36px", fontSize: "13px", fontWeight: 600, display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
          Déposer mon projet →
        </Link>
      </nav>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "3.5rem 2rem" }}>
        <div style={{ fontSize: "12px", color: "#4A5D45", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}>Notre service</div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.5px", marginBottom: "1.5rem", lineHeight: 1.2 }}>
          Un accompagnement pour votre achat immobilier
        </h1>
        <p style={{ fontSize: "17px", color: "#6B5F4F", lineHeight: 1.7, marginBottom: "3rem" }}>
          OVP Connect accompagne gratuitement les particuliers dans leur projet immobilier, en coordonnant recherche de bien et financement dès le départ.
        </p>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "21px", fontWeight: 700, marginBottom: "1rem" }}>Un double accompagnement, un seul formulaire</h2>
          <p style={{ fontSize: "15px", color: "#4B4438", lineHeight: 1.8, marginBottom: "1rem" }}>
            Plutôt que de démarcher séparément un agent immobilier et un courtier, OVP Connect permet de déposer un seul projet et d'être mis en relation avec les deux professionnels en parallèle. Chacun dispose des mêmes informations dès le départ.
          </p>
          <p style={{ fontSize: "15px", color: "#4B4438", lineHeight: 1.8 }}>
            Cette coordination évite les allers-retours habituels entre recherche de bien et évaluation du financement, deux démarches pourtant liées.
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "21px", fontWeight: 700, marginBottom: "1.5rem" }}>Comment ça se passe</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { n: "1", title: "Vous décrivez votre projet", desc: "Critères de recherche, budget, situation professionnelle et financière, en quelques minutes." },
              { n: "2", title: "Vous confirmez votre demande", desc: "Un email de confirmation valide votre projet et protège vos données." },
              { n: "3", title: "Les professionnels vous contactent", desc: "Un courtier analyse votre financement, un agent immobilier recherche votre bien." },
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
          <h2 style={{ fontSize: "21px", fontWeight: 700, marginBottom: "1rem" }}>Un service gratuit pour les acheteurs</h2>
          <p style={{ fontSize: "15px", color: "#4B4438", lineHeight: 1.8 }}>
            Le service est entièrement gratuit pour les acheteurs, sans engagement ni commission. Les professionnels mis en relation interviennent dans votre zone géographique, selon les critères de votre projet.
          </p>
        </section>

        <section style={{ background: "#FBFAF6", border: "1px solid #DDD7C9", padding: "2rem", marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "19px", fontWeight: 700, marginBottom: "1rem" }}>Démarrer votre accompagnement</h2>
          <p style={{ fontSize: "15px", color: "#4B4438", lineHeight: 1.8, marginBottom: "1rem" }}>
            Déposez votre projet en quelques minutes et soyez mis en relation avec un courtier et un agent immobilier de votre secteur.
          </p>
          <Link href="/formulaire" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#4A5D45", color: "#F2EFE7", padding: "0 22px", height: "42px", fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>
            Déposer mon projet gratuitement →
          </Link>
        </section>

        <div style={{ borderTop: "1px solid #DDD7C9", paddingTop: "1.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/achat-immobilier" style={{ fontSize: "13px", color: "#4A5D45", textDecoration: "none" }}>Le parcours d'achat immobilier</Link>
          <Link href="/trouver-agent-immobilier" style={{ fontSize: "13px", color: "#4A5D45", textDecoration: "none" }}>Trouver un agent immobilier</Link>
          <Link href="/" style={{ fontSize: "13px", color: "#6B5F4F", textDecoration: "none" }}>← Retour à l'accueil</Link>
        </div>
      </div>
    </div>
  );
}
