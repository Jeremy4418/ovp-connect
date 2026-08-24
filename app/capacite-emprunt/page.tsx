import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculer sa capacité d'emprunt",
  description: "Quels sont les facteurs qui déterminent votre capacité d'emprunt ? Comprendre ce calcul avant de rechercher un bien immobilier.",
  alternates: {
    canonical: "https://ovppro.fr/capacite-emprunt",
  },
};

export default function CapaciteEmprunt() {
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
          Calculer sa capacité d'emprunt
        </h1>
        <p style={{ fontSize: "17px", color: "#4b5563", lineHeight: 1.7, marginBottom: "3rem" }}>
          Avant de rechercher un bien, connaître sa capacité d'emprunt permet de cibler un budget réaliste. Voici les facteurs qui l'influencent.
        </p>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 600, color: "#0a1628", marginBottom: "1rem" }}>Qu'est-ce que la capacité d'emprunt ?</h2>
          <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8 }}>
            La capacité d'emprunt correspond au montant maximum qu'un établissement bancaire est prêt à vous prêter, en tenant compte de vos revenus, de vos charges existantes et de votre situation professionnelle. Elle détermine, avec votre apport personnel, le budget total dont vous disposez pour votre projet immobilier.
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 600, color: "#0a1628", marginBottom: "1rem" }}>Les facteurs qui la déterminent</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { title: "Vos revenus mensuels nets", desc: "La base du calcul, seul ou avec un co-emprunteur en cas d'achat à deux." },
              { title: "Votre taux d'endettement", desc: "Les banques limitent généralement la part des revenus consacrée au remboursement du prêt." },
              { title: "Votre situation professionnelle", desc: "Un CDI, un CDD, une activité indépendante ou la fonction publique ne sont pas évalués de la même façon." },
              { title: "Votre apport personnel", desc: "Il réduit le montant à emprunter et peut influencer les conditions du prêt proposées." },
              { title: "La durée du prêt envisagée", desc: "Un remboursement étalé sur une durée plus longue réduit la mensualité mais augmente le coût total du crédit." },
            ].map(f => (
              <div key={f.title} style={{ background: "#f9fafb", border: "0.5px solid #e5e7eb", borderRadius: "12px", padding: "1.25rem" }}>
                <p style={{ fontSize: "15px", fontWeight: 600, color: "#0a1628", marginBottom: "0.4rem" }}>{f.title}</p>
                <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 600, color: "#0a1628", marginBottom: "1rem" }}>Pourquoi la connaître avant de chercher un bien</h2>
          <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8 }}>
            Connaître sa capacité d'emprunt en amont évite de visiter des biens hors budget, et permet de présenter des offres d'achat plus crédibles aux vendeurs et aux agents immobiliers. C'est une étape que seul un courtier en financement peut évaluer précisément, en fonction de votre dossier complet.
          </p>
        </section>

        <section style={{ background: "#f0fdf4", border: "0.5px solid #bbf7d0", borderRadius: "16px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 600, color: "#0a1628", marginBottom: "1rem" }}>Faites évaluer votre capacité d'emprunt</h2>
          <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, marginBottom: "1rem" }}>
            En déposant votre projet sur OVP Connect, un courtier en financement de votre secteur analyse votre situation et évalue votre capacité d'emprunt réelle, gratuitement.
          </p>
          <Link href="/formulaire" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#10b981", color: "white", padding: "0 24px", height: "44px", borderRadius: "10px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
            Déposer mon projet gratuitement →
          </Link>
        </section>

        <div style={{ borderTop: "0.5px solid #e5e7eb", paddingTop: "1.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/financement-immobilier" style={{ fontSize: "13px", color: "#10b981", textDecoration: "none" }}>Le financement immobilier</Link>
          <Link href="/trouver-courtier-immobilier" style={{ fontSize: "13px", color: "#10b981", textDecoration: "none" }}>Trouver un courtier immobilier</Link>
          <Link href="/" style={{ fontSize: "13px", color: "#6b7280", textDecoration: "none" }}>← Retour à l'accueil</Link>
        </div>
      </div>
    </div>
  );
}
