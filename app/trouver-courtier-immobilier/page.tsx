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
        <div style={{ fontSize: "12px", color: "#4A5D45", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}>Financement</div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.5px", marginBottom: "1.5rem", lineHeight: 1.2 }}>
          Trouver un courtier immobilier
        </h1>
        <p style={{ fontSize: "17px", color: "#6B5F4F", lineHeight: 1.7, marginBottom: "3rem" }}>
          Le courtier en financement est souvent le premier professionnel à contacter dans un projet d'achat. Voici comment en trouver un, et ce qu'il change concrètement.
        </p>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "21px", fontWeight: 700, marginBottom: "1rem" }}>Pourquoi passer par un courtier</h2>
          <p style={{ fontSize: "15px", color: "#4B4438", lineHeight: 1.8, marginBottom: "1rem" }}>
            Un courtier négocie votre prêt auprès de plusieurs banques à la fois, en s'appuyant sur votre situation professionnelle, vos revenus et votre apport. Il évalue votre capacité d'emprunt et monte un dossier qui tient la route, ce qui pèse dans la négociation des conditions du prêt.
          </p>
          <p style={{ fontSize: "15px", color: "#4B4438", lineHeight: 1.8 }}>
            Démarcher une seule banque en solo prend du temps et limite les comparaisons. Le courtier fait ce travail de mise en concurrence à votre place.
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "21px", fontWeight: 700, marginBottom: "1rem" }}>Comment repérer un courtier fiable</h2>
          <p style={{ fontSize: "15px", color: "#4B4438", lineHeight: 1.8, marginBottom: "1rem" }}>
            Trois choses comptent surtout : sa connaissance du secteur où vous achetez, la clarté de ses honoraires, et sa capacité à cerner rapidement votre dossier pour vous orienter vers les bonnes banques.
          </p>
          <p style={{ fontSize: "15px", color: "#4B4438", lineHeight: 1.8 }}>
            Plutôt que de contacter plusieurs courtiers un par un, il est possible d'être mis en relation directement avec un professionnel qui correspond à votre projet.
          </p>
        </section>

        <section style={{ background: "#FBFAF6", border: "1px solid #DDD7C9", padding: "2rem", marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "19px", fontWeight: 700, marginBottom: "1rem" }}>Comment OVP Connect vous met en relation</h2>
          <p style={{ fontSize: "15px", color: "#4B4438", lineHeight: 1.8, marginBottom: "1rem" }}>
            En déposant votre projet, vous êtes mis en relation gratuitement avec un courtier de votre secteur. Le même formulaire vous connecte aussi à un agent immobilier, pour avancer sur la recherche de bien et le financement en même temps.
          </p>
          <Link href="/formulaire" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#4A5D45", color: "#F2EFE7", padding: "0 22px", height: "42px", fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>
            Déposer mon projet gratuitement →
          </Link>
        </section>

        <div style={{ borderTop: "1px solid #DDD7C9", paddingTop: "1.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/trouver-agent-immobilier" style={{ fontSize: "13px", color: "#4A5D45", textDecoration: "none" }}>Trouver un agent immobilier</Link>
          <Link href="/financement-immobilier" style={{ fontSize: "13px", color: "#4A5D45", textDecoration: "none" }}>Le financement immobilier</Link>
          <Link href="/" style={{ fontSize: "13px", color: "#6B5F4F", textDecoration: "none" }}>← Retour à l'accueil</Link>
        </div>
      </div>
    </div>
  );
}
