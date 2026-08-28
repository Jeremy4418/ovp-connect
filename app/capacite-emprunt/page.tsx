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
        <div style={{ fontSize: "12px", color: "#4A5D45", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}>Financement</div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.5px", marginBottom: "1.5rem", lineHeight: 1.2 }}>
          Calculer sa capacité d'emprunt
        </h1>
        <p style={{ fontSize: "17px", color: "#6B5F4F", lineHeight: 1.7, marginBottom: "3rem" }}>
          Avant de visiter le moindre bien, mieux vaut savoir combien vous pouvez réellement emprunter. Voici ce qui entre dans ce calcul.
        </p>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "21px", fontWeight: 700, marginBottom: "1rem" }}>De quoi on parle</h2>
          <p style={{ fontSize: "15px", color: "#4B4438", lineHeight: 1.8 }}>
            La capacité d'emprunt, c'est le montant maximum qu'une banque accepte de vous prêter, en tenant compte de vos revenus, de vos charges existantes et de votre situation professionnelle. Combinée à votre apport, elle détermine le budget total dont vous disposez pour votre achat.
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "21px", fontWeight: 700, marginBottom: "1rem" }}>Ce qui la fait varier</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#DDD7C9", border: "1px solid #DDD7C9" }}>
            {[
              { title: "Vos revenus mensuels nets", desc: "La base du calcul, seul ou avec un co-emprunteur en cas d'achat à deux." },
              { title: "Votre taux d'endettement", desc: "Les banques plafonnent généralement la part des revenus consacrée au remboursement." },
              { title: "Votre situation professionnelle", desc: "Un CDI, un CDD, une activité indépendante ou la fonction publique ne sont pas évalués de la même façon." },
              { title: "Votre apport personnel", desc: "Il réduit le montant à emprunter et peut influencer les conditions proposées." },
              { title: "La durée du prêt", desc: "Une durée plus longue réduit la mensualité mais augmente le coût total du crédit." },
            ].map(f => (
              <div key={f.title} style={{ background: "#FBFAF6", padding: "1.25rem" }}>
                <p style={{ fontSize: "15px", fontWeight: 700, marginBottom: "0.4rem" }}>{f.title}</p>
                <p style={{ fontSize: "14px", color: "#6B5F4F", lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "21px", fontWeight: 700, marginBottom: "1rem" }}>Pourquoi le savoir avant de chercher</h2>
          <p style={{ fontSize: "15px", color: "#4B4438", lineHeight: 1.8 }}>
            Connaître ce chiffre en amont évite de visiter des biens hors budget, et rend vos offres d'achat plus crédibles aux yeux des vendeurs et des agents. Seul un courtier peut l'évaluer avec précision, à partir de votre dossier complet.
          </p>
        </section>

        <section style={{ background: "#FBFAF6", border: "1px solid #DDD7C9", padding: "2rem", marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "19px", fontWeight: 700, marginBottom: "1rem" }}>Faites évaluer votre capacité d'emprunt</h2>
          <p style={{ fontSize: "15px", color: "#4B4438", lineHeight: 1.8, marginBottom: "1rem" }}>
            En déposant votre projet, un courtier de votre secteur analyse votre situation et évalue votre capacité d'emprunt réelle, gratuitement.
          </p>
          <Link href="/formulaire" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#4A5D45", color: "#F2EFE7", padding: "0 22px", height: "42px", fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>
            Déposer mon projet gratuitement →
          </Link>
        </section>

        <div style={{ borderTop: "1px solid #DDD7C9", paddingTop: "1.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/financement-immobilier" style={{ fontSize: "13px", color: "#4A5D45", textDecoration: "none" }}>Le financement immobilier</Link>
          <Link href="/trouver-courtier-immobilier" style={{ fontSize: "13px", color: "#4A5D45", textDecoration: "none" }}>Trouver un courtier immobilier</Link>
          <Link href="/" style={{ fontSize: "13px", color: "#6B5F4F", textDecoration: "none" }}>← Retour à l'accueil</Link>
        </div>
      </div>
    </div>
  );
}
