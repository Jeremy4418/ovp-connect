import Link from "next/link";

export default function Home() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#f0faf5", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ background: "#0a1628", padding: "1rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "0.5px solid rgba(255,255,255,0.08)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "32px", height: "32px", background: "#10b981", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>
          </div>
          <span style={{ fontSize: "16px", fontWeight: 500, color: "white" }}>OVP <span style={{ color: "#10b981" }}>Connect</span></span>
        </div>
        <Link href="/formulaire" style={{ background: "#10b981", color: "white", border: "none", padding: "0 18px", height: "36px", borderRadius: "8px", fontSize: "13px", fontWeight: 500, cursor: "pointer", display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
          Déposer mon projet
        </Link>
      </nav>

      {/* HERO */}
      <section style={{ background: "#0a1628", padding: "5rem 2rem 6rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(16,185,129,0.15)", border: "0.5px solid rgba(16,185,129,0.3)", color: "#10b981", fontSize: "12px", padding: "5px 14px", borderRadius: "20px", marginBottom: "1.5rem" }}>
          ✦ Mise en relation immobilière gratuite
        </div>
        <h1 style={{ fontSize: "44px", fontWeight: 500, color: "white", lineHeight: 1.2, marginBottom: "1.25rem", maxWidth: "640px", margin: "0 auto 1.25rem" }}>
          Votre projet immobilier,<br /><span style={{ color: "#10b981" }}>accompagné de A à Z</span>
        </h1>
        <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.6)", maxWidth: "460px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
          Déposez votre projet en quelques minutes. Un courtier analyse votre financement, un agent immobilier trouve votre bien idéal.
        </p>
        <Link href="/formulaire" style={{ background: "#10b981", color: "white", padding: "0 32px", height: "52px", borderRadius: "12px", fontSize: "16px", fontWeight: 500, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
          Déposer mon projet gratuitement →
        </Link>
        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)", marginTop: "1rem" }}>100% gratuit pour les acheteurs · Aucun engagement</p>

        {/* Stats */}
        <div style={{ display: "flex", justifyContent: "center", gap: "3rem", marginTop: "4rem", paddingTop: "2.5rem", borderTop: "0.5px solid rgba(255,255,255,0.08)", flexWrap: "wrap" }}>
          {[
            { num: "100%", label: "Gratuit pour l'acheteur" },
            { num: "Pros", label: "Certifiés & vérifiés" },
            { num: "Simple", label: "Formulaire en 3 minutes" },
          ].map(s => (
            <div key={s.num} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "28px", fontWeight: 500, color: "white" }}>{s.num}</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "4px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section style={{ padding: "5rem 2rem", textAlign: "center" }}>
        <div style={{ fontSize: "12px", color: "#10b981", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Comment ça marche</div>
        <h2 style={{ fontSize: "30px", fontWeight: 500, color: "#111", marginBottom: "0.75rem" }}>Simple, rapide, efficace</h2>
        <p style={{ fontSize: "15px", color: "#6b7280", maxWidth: "440px", margin: "0 auto 3rem", lineHeight: 1.7 }}>
          En quelques minutes, connectez-vous aux professionnels qui vont concrétiser votre projet.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", maxWidth: "720px", margin: "0 auto" }}>
          {[
            { n: "1", title: "Décrivez votre projet", desc: "Renseignez vos critères, votre budget et votre situation financière en quelques minutes." },
            { n: "2", title: "Les pros sont alertés", desc: "Le courtier analyse votre profil financier. L'agent immobilier part chercher le bien idéal." },
            { n: "3", title: "Vous êtes contacté", desc: "Un professionnel de votre secteur vous recontacte avec une solution adaptée à votre projet." },
          ].map(s => (
            <div key={s.n} style={{ background: "white", border: "0.5px solid #e5e7eb", borderRadius: "16px", padding: "1.75rem", textAlign: "left" }}>
              <div style={{ width: "36px", height: "36px", background: "#d1fae5", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 500, color: "#065f46", marginBottom: "1rem" }}>{s.n}</div>
              <h3 style={{ fontSize: "15px", fontWeight: 500, color: "#111", marginBottom: "0.5rem" }}>{s.title}</h3>
              <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POURQUOI OVP CONNECT */}
      <section style={{ background: "white", padding: "5rem 2rem", textAlign: "center" }}>
        <div style={{ fontSize: "12px", color: "#10b981", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Pourquoi OVP Connect</div>
        <h2 style={{ fontSize: "30px", fontWeight: 500, color: "#111", marginBottom: "3rem" }}>Tout ce dont vous avez besoin</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem", maxWidth: "600px", margin: "0 auto" }}>
          {[
            { icon: "🔒", title: "Données sécurisées", desc: "Vos informations sont protégées et transmises uniquement aux professionnels concernés." },
            { icon: "🎯", title: "Pros de votre secteur", desc: "Vous êtes mis en relation avec des professionnels qui interviennent dans votre zone géographique." },
            { icon: "💰", title: "100% gratuit", desc: "Le service est entièrement gratuit pour les acheteurs. Aucune commission, aucun frais cachés." },
            { icon: "🏠", title: "Double accompagnement", desc: "Un courtier pour le financement et un agent pour le bien — tout en un seul formulaire." },
          ].map(f => (
            <div key={f.title} style={{ background: "#f9fafb", border: "0.5px solid #e5e7eb", borderRadius: "12px", padding: "1.5rem", textAlign: "left" }}>
              <div style={{ fontSize: "24px", marginBottom: "0.75rem" }}>{f.icon}</div>
              <h3 style={{ fontSize: "14px", fontWeight: 500, color: "#111", marginBottom: "0.4rem" }}>{f.title}</h3>
              <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ background: "#0a1628", padding: "5rem 2rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 500, color: "white", marginBottom: "1rem" }}>Prêt à concrétiser votre projet ?</h2>
        <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)", marginBottom: "2rem", maxWidth: "400px", margin: "0 auto 2rem" }}>
          Déposez votre projet gratuitement et soyez mis en relation avec les bons professionnels.
        </p>
        <Link href="/formulaire" style={{ background: "#10b981", color: "white", padding: "0 32px", height: "52px", borderRadius: "12px", fontSize: "16px", fontWeight: 500, display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
          Déposer mon projet gratuitement →
        </Link>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "2rem", flexWrap: "wrap" }}>
          {["🔒 Données protégées", "✅ Pros certifiés", "💚 100% gratuit"].map(t => (
            <span key={t} style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>{t}</span>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#060e1a", padding: "2rem", borderTop: "0.5px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "14px", fontWeight: 500, color: "white" }}>OVP <span style={{ color: "#10b981" }}>Connect</span></span>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              {[
                { label: "Mentions légales", href: "/mentions-legales" },
                { label: "CGU", href: "/cgu" },
                { label: "Politique de confidentialité", href: "/confidentialite" },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>{l.label}</Link>
              ))}
            </div>
          </div>
          <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.2)", lineHeight: 1.6 }}>
            © 2026 OVPPRO.fr — 10 rue de Penthièvre, 75008 Paris · OVP Connect est une plateforme de mise en relation entre acheteurs immobiliers et professionnels. OVP Connect n'est pas un agent immobilier, un courtier ou un établissement financier.
          </p>
        </div>
      </footer>

    </div>
  );
}