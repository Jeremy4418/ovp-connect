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
        <div style={{ fontSize: "12px", color: "#10b981", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}>Notre service</div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 600, color: "#0a1628", letterSpacing: "-0.5px", marginBottom: "1.5rem", lineHeight: 1.2 }}>
          Un accompagnement pour votre achat immobilier
        </h1>
        <p style={{ fontSize: "17px", color: "#4b5563", lineHeight: 1.7, marginBottom: "3rem" }}>
          OVP Connect accompagne gratuitement les particuliers dans leur projet immobilier, en coordonnant recherche de bien et financement dès le départ.
        </p>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 600, color: "#0a1628", marginBottom: "1rem" }}>Un double accompagnement, un seul formulaire</h2>
          <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, marginBottom: "1rem" }}>
            Plutôt que de démarcher séparément un agent immobilier et un courtier en financement, OVP Connect permet de déposer un seul projet et d'être mis en relation avec les deux professionnels en parallèle. Chacun dispose des mêmes informations sur votre projet dès le départ.
          </p>
          <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8 }}>
            Cette coordination évite les allers-retours habituels entre recherche de bien et évaluation du financement, deux démarches qui sont pourtant liées.
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 600, color: "#0a1628", marginBottom: "1.5rem" }}>Comment ça fonctionne</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { n: "1", title: "Vous décrivez votre projet", desc: "Critères de recherche, budget, situation professionnelle et financière, en quelques minutes." },
              { n: "2", title: "Vous confirmez votre demande", desc: "Un email de confirmation valide votre projet et protège vos données." },
              { n: "3", title: "Les professionnels vous contactent", desc: "Un courtier analyse votre financement, un agent immobilier recherche votre bien." },
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
          <h2 style={{ fontSize: "22px", fontWeight: 600, color: "#0a1628", marginBottom: "1rem" }}>Un service gratuit pour les acheteurs</h2>
          <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8 }}>
            Le service OVP Connect est entièrement gratuit pour les acheteurs, sans engagement ni commission. Les professionnels mis en relation interviennent dans votre zone géographique, en fonction des critères de votre projet.
          </p>
        </section>

        <section style={{ background: "#f0fdf4", border: "0.5px solid #bbf7d0", borderRadius: "16px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 600, color: "#0a1628", marginBottom: "1rem" }}>Démarrer votre accompagnement</h2>
          <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, marginBottom: "1rem" }}>
            Déposez votre projet immobilier en quelques minutes et soyez mis en relation avec un courtier et un agent immobilier de votre secteur.
          </p>
          <Link href="/formulaire" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#10b981", color: "white", padding: "0 24px", height: "44px", borderRadius: "10px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
            Déposer mon projet gratuitement →
          </Link>
        </section>

        <div style={{ borderTop: "0.5px solid #e5e7eb", paddingTop: "1.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/achat-immobilier" style={{ fontSize: "13px", color: "#10b981", textDecoration: "none" }}>Le parcours d'achat immobilier</Link>
          <Link href="/trouver-agent-immobilier" style={{ fontSize: "13px", color: "#10b981", textDecoration: "none" }}>Trouver un agent immobilier</Link>
          <Link href="/" style={{ fontSize: "13px", color: "#6b7280", textDecoration: "none" }}>← Retour à l'accueil</Link>
        </div>
      </div>
    </div>
  );
}
