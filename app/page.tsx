import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Déposez gratuitement votre projet immobilier et soyez mis en relation avec des professionnels pour votre recherche de bien et votre financement.",
  alternates: {
    canonical: "https://ovppro.fr",
  },
};

export default function Home() {
  return (
    <div style={{ background: "#F2EFE7", minHeight: "100vh", color: "#241F1A" }}>

      {/* NAV */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2rem", height: "68px", background: "#FBFAF6", borderBottom: "1px solid #DDD7C9" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: 700, fontSize: "17px", letterSpacing: "-0.2px" }}>
          <div style={{ width: "34px", height: "34px", background: "#4A5D45", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" fill="none" stroke="#F2EFE7" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>
          </div>
          OVP <span style={{ color: "#4A5D45" }}>Connect</span>
        </div>
        <Link href="/formulaire" style={{ background: "#4A5D45", color: "#F2EFE7", padding: "0 20px", height: "40px", fontSize: "14px", fontWeight: 600, display: "inline-flex", alignItems: "center", textDecoration: "none", gap: "6px" }}>
          Déposer mon projet →
        </Link>
      </nav>

      {/* HERO */}
      <section style={{ padding: "6rem 2rem", textAlign: "center", borderBottom: "1px solid #DDD7C9" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid #4A5D45", color: "#4A5D45", fontSize: "12px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", padding: "6px 16px", marginBottom: "2rem" }}>
          100% gratuit pour les acheteurs
        </div>

        <h1 style={{ fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 800, letterSpacing: "-1.5px", lineHeight: 1.1, maxWidth: "720px", margin: "0 auto 1.5rem" }}>
          Votre projet immobilier,<br />
          <span style={{ color: "#4A5D45" }}>accompagné de A à Z</span>
        </h1>

        <p style={{ fontSize: "17px", color: "#6B5F4F", maxWidth: "480px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
          Déposez votre projet en quelques minutes. Un courtier analyse votre financement, un agent immobilier trouve votre bien idéal.
        </p>

        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/formulaire" style={{ background: "#4A5D45", color: "#F2EFE7", padding: "0 32px", height: "52px", fontSize: "15px", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
            Déposer mon projet gratuitement →
          </Link>
        </div>
        <p style={{ fontSize: "12px", color: "#8A7F6E", marginTop: "1.25rem" }}>Aucun engagement · Aucune commission · 100% gratuit</p>

        {/* Stats */}
        <div style={{ display: "flex", justifyContent: "center", gap: "0", marginTop: "5rem", paddingTop: "3rem", borderTop: "1px solid #DDD7C9", flexWrap: "wrap" }}>
          {[
            { num: "100%", label: "Gratuit pour l'acheteur" },
            { num: "2", label: "Pros mobilisés pour vous" },
            { num: "3 min", label: "Pour déposer votre projet" },
          ].map((s, i) => (
            <div key={s.num} style={{ textAlign: "center", padding: "0 3rem", borderRight: i < 2 ? "1px solid #DDD7C9" : "none" }}>
              <div style={{ fontSize: "32px", fontWeight: 800, letterSpacing: "-1px" }}>{s.num}</div>
              <div style={{ fontSize: "13px", color: "#6B5F4F", marginTop: "6px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ fontSize: "12px", color: "#4A5D45", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Comment ça marche</div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: "0.75rem" }}>Simple, rapide, efficace</h2>
            <p style={{ fontSize: "15px", color: "#6B5F4F", maxWidth: "420px", margin: "0 auto", lineHeight: 1.7 }}>En quelques minutes, connectez-vous aux professionnels qui vont concrétiser votre projet.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1px", background: "#DDD7C9", border: "1px solid #DDD7C9" }}>
            {[
              { n: "01", title: "Décrivez votre projet", desc: "Renseignez vos critères, votre budget et votre situation financière en quelques minutes." },
              { n: "02", title: "Confirmez votre email", desc: "Vous recevez un email de confirmation pour valider votre demande et protéger vos données." },
              { n: "03", title: "Les pros vous contactent", desc: "Un courtier analyse votre financement. Un agent immobilier part chercher le bien idéal." },
            ].map(s => (
              <div key={s.n} style={{ background: "#FBFAF6", padding: "2rem" }}>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#4A5D45", marginBottom: "1rem" }}>{s.n}</div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "0.6rem", letterSpacing: "-0.2px" }}>{s.title}</h3>
                <p style={{ fontSize: "14px", color: "#6B5F4F", lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOUBLE ACCOMPAGNEMENT */}
      <section style={{ padding: "5rem 2rem", borderTop: "1px solid #DDD7C9", borderBottom: "1px solid #DDD7C9" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ fontSize: "12px", color: "#4A5D45", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Double accompagnement</div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 700, letterSpacing: "-0.5px" }}>Un courtier + un agent,<br />tout en un seul formulaire</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1px", background: "#DDD7C9", border: "1px solid #DDD7C9" }}>
            <div style={{ background: "#FBFAF6", padding: "2rem" }}>
              <h3 style={{ fontSize: "17px", fontWeight: 700, marginBottom: "0.75rem" }}>Le courtier en financement</h3>
              <p style={{ fontSize: "14px", color: "#6B5F4F", lineHeight: 1.7, marginBottom: "1rem" }}>Analyse votre profil financier, calcule votre capacité d'emprunt et prépare le meilleur montage pour votre projet.</p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {["Capacité d'emprunt", "Taux négociés", "Montage optimal"].map(item => (
                  <li key={item} style={{ fontSize: "13px", display: "flex", alignItems: "center", gap: "8px", padding: "3px 0" }}>
                    <span style={{ width: "15px", height: "15px", background: "#4A5D45", color: "#F2EFE7", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "9px", flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ background: "#FBFAF6", padding: "2rem" }}>
              <h3 style={{ fontSize: "17px", fontWeight: 700, marginBottom: "0.75rem" }}>L'agent immobilier</h3>
              <p style={{ fontSize: "14px", color: "#6B5F4F", lineHeight: 1.7, marginBottom: "1rem" }}>Reçoit vos critères précis et part chercher le bien qui correspond exactement à votre projet et votre budget.</p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {["Recherche personnalisée", "Pros de votre secteur", "Accompagnement complet"].map(item => (
                  <li key={item} style={{ fontSize: "13px", display: "flex", alignItems: "center", gap: "8px", padding: "3px 0" }}>
                    <span style={{ width: "15px", height: "15px", background: "#4A5D45", color: "#F2EFE7", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "9px", flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI */}
      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: "12px", color: "#4A5D45", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Pourquoi OVP Connect</div>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: "3rem" }}>Tout ce dont vous avez besoin</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: "#DDD7C9", border: "1px solid #DDD7C9", maxWidth: "620px", margin: "0 auto" }}>
            {[
              { title: "Données sécurisées", desc: "Vos informations sont protégées et transmises uniquement aux professionnels de votre zone." },
              { title: "Pros de votre secteur", desc: "Mise en relation avec des professionnels qui interviennent dans votre zone géographique." },
              { title: "100% gratuit", desc: "Aucune commission, aucun frais caché. Le service est entièrement gratuit pour les acheteurs." },
              { title: "Processus simplifié", desc: "Un seul formulaire pour être mis en relation avec un courtier et un agent immobilier." },
            ].map(f => (
              <div key={f.title} style={{ background: "#FBFAF6", padding: "1.5rem", textAlign: "left" }}>
                <h3 style={{ fontSize: "14px", fontWeight: 700, marginBottom: "0.4rem" }}>{f.title}</h3>
                <p style={{ fontSize: "13px", color: "#6B5F4F", lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESSOURCES / MAILLAGE INTERNE */}
      <section style={{ padding: "5rem 2rem", borderTop: "1px solid #DDD7C9" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ fontSize: "12px", color: "#4A5D45", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Ressources</div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 700, letterSpacing: "-0.5px" }}>Pour aller plus loin</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1px", background: "#DDD7C9", border: "1px solid #DDD7C9" }}>
            {[
              { href: "/achat-immobilier", title: "Le parcours d'achat immobilier", desc: "Les grandes étapes, de la définition du projet à la signature." },
              { href: "/accompagnement-achat-immobilier", title: "Notre accompagnement", desc: "Comment fonctionne le double accompagnement OVP Connect." },
              { href: "/financement-immobilier", title: "Le financement immobilier", desc: "Comprendre les étapes et le rôle du courtier." },
              { href: "/capacite-emprunt", title: "Calculer sa capacité d'emprunt", desc: "Les facteurs qui déterminent votre budget." },
              { href: "/trouver-courtier-immobilier", title: "Trouver un courtier immobilier", desc: "Comment être mis en relation avec un courtier fiable." },
              { href: "/trouver-agent-immobilier", title: "Trouver un agent immobilier", desc: "Comment être mis en relation avec un agent de votre secteur." },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ display: "block", background: "#FBFAF6", padding: "1.25rem", textDecoration: "none", color: "#241F1A" }}>
                <p style={{ fontSize: "14px", fontWeight: 700, marginBottom: "0.4rem" }}>{l.title}</p>
                <p style={{ fontSize: "13px", color: "#6B5F4F", lineHeight: 1.6 }}>{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BLOC ÉDITORIAL SEO */}
      <section style={{ padding: "5rem 2rem", borderTop: "1px solid #DDD7C9" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: "1.5rem" }}>
            Pourquoi préparer son financement avant de chercher un bien
          </h2>
          <div style={{ fontSize: "15px", color: "#4B4438", lineHeight: 1.85 }}>
            <p style={{ marginBottom: "1.25rem" }}>
              La plupart des acheteurs commencent par visiter des biens avant même de savoir ce qu'ils peuvent réellement emprunter. Le problème arrive vite : un coup de cœur pour un appartement hors budget, ou une offre qui traîne parce que le financement n'est pas encore prêt.
            </p>
            <p style={{ marginBottom: "1.25rem" }}>
              L'ordre inverse change beaucoup de choses. Un courtier évalue votre capacité d'emprunt à partir de vos revenus, de votre apport et de votre situation professionnelle, ce qui donne une fourchette de budget fiable dès le départ. Chaque visite devient alors pertinente, et une offre d'achat appuyée sur un dossier de financement solide pèse davantage face à un vendeur.
            </p>
            <p style={{ marginBottom: "1.25rem" }}>
              C'est la raison d'être d'OVP Connect : plutôt que de gérer séparément un agent immobilier et un courtier, sans lien entre les deux, un seul projet déposé suffit pour être mis en relation avec les deux à la fois. Les informations sont partagées dès le départ, ce qui évite les allers-retours et accélère la suite.
            </p>
            <p>
              Le service est gratuit pour les acheteurs, sans engagement ni commission — l'idée est simplement de simplifier un projet qui, dans les faits, demande de coordonner plusieurs interlocuteurs en même temps.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ background: "#4A5D45", color: "#F2EFE7", padding: "5rem 2rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, marginBottom: "1rem", letterSpacing: "-0.5px" }}>Prêt à concrétiser<br />votre projet ?</h2>
        <p style={{ fontSize: "15px", color: "rgba(242,239,231,0.75)", marginBottom: "2rem", maxWidth: "380px", margin: "0 auto 2rem", lineHeight: 1.7 }}>
          Rejoignez les acheteurs qui font confiance à OVP Connect pour trouver leur bien et leur financement.
        </p>
        <Link href="/formulaire" style={{ background: "#F2EFE7", color: "#4A5D45", padding: "0 32px", height: "52px", fontSize: "15px", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
          Déposer mon projet gratuitement →
        </Link>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "2rem", flexWrap: "wrap" }}>
          {["Données protégées", "Pros certifiés", "100% gratuit", "Confirmation email"].map(t => (
            <span key={t} style={{ fontSize: "12px", color: "rgba(242,239,231,0.55)" }}>{t}</span>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#241F1A", padding: "2rem" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
          <span style={{ fontSize: "14px", fontWeight: 700, color: "#F2EFE7" }}>OVP <span style={{ color: "#8FAE86" }}>Connect</span></span>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[
              { label: "Mentions légales", href: "/mentions-legales" },
              { label: "CGU", href: "/cgu" },
              { label: "Confidentialité", href: "/confidentialite" },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ fontSize: "12px", color: "rgba(242,239,231,0.5)", textDecoration: "none" }}>{l.label}</Link>
            ))}
          </div>
        </div>
        <p style={{ maxWidth: "820px", margin: "0 auto", fontSize: "11px", color: "rgba(242,239,231,0.3)", lineHeight: 1.6 }}>
          © 2026 OVPPRO.fr — 10 rue de Penthièvre, 75008 Paris · OVP Connect est une plateforme de mise en relation. OVP Connect n'est pas un agent immobilier, un courtier ou un établissement financier.
        </p>
      </footer>

    </div>
  );
}
