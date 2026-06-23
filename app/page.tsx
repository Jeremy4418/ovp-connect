import Link from "next/link";

export default function Home() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#fff", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(10,22,40,0.95)", backdropFilter: "blur(10px)", padding: "0 2rem", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "0.5px solid rgba(255,255,255,0.08)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "34px", height: "34px", background: "#10b981", borderRadius: "9px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>
          </div>
          <span style={{ fontSize: "17px", fontWeight: 600, color: "white", letterSpacing: "-0.3px" }}>OVP <span style={{ color: "#10b981" }}>Connect</span></span>
        </div>
        <Link href="/formulaire" style={{ background: "#10b981", color: "white", padding: "0 20px", height: "38px", borderRadius: "9px", fontSize: "14px", fontWeight: 500, display: "inline-flex", alignItems: "center", textDecoration: "none", gap: "6px" }}>
          Déposer mon projet <span style={{ fontSize: "16px" }}>→</span>
        </Link>
      </nav>

      {/* HERO */}
      <section style={{ background: "#0a1628", padding: "6rem 2rem 7rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        {/* Cercle décoratif */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "700px", height: "700px", background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />
        
        <div style={{ position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(16,185,129,0.12)", border: "0.5px solid rgba(16,185,129,0.25)", color: "#10b981", fontSize: "13px", padding: "6px 16px", borderRadius: "20px", marginBottom: "2rem", fontWeight: 500 }}>
            ✦ 100% gratuit pour les acheteurs
          </div>
          
          <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 600, color: "white", lineHeight: 1.15, marginBottom: "1.5rem", letterSpacing: "-1px", maxWidth: "700px", margin: "0 auto 1.5rem" }}>
            Votre projet immobilier,<br />
            <span style={{ color: "#10b981" }}>accompagné de A à Z</span>
          </h1>
          
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.55)", maxWidth: "500px", margin: "0 auto 3rem", lineHeight: 1.7, fontWeight: 400 }}>
            Déposez votre projet en quelques minutes. Un courtier analyse votre financement, un agent immobilier trouve votre bien idéal.
          </p>

          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/formulaire" style={{ background: "#10b981", color: "white", padding: "0 36px", height: "54px", borderRadius: "12px", fontSize: "16px", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", letterSpacing: "-0.2px" }}>
              Déposer mon projet gratuitement →
            </Link>
          </div>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", marginTop: "1.25rem" }}>Aucun engagement · Aucune commission · 100% gratuit</p>

          {/* Stats */}
          <div style={{ display: "flex", justifyContent: "center", gap: "0", marginTop: "5rem", paddingTop: "3rem", borderTop: "0.5px solid rgba(255,255,255,0.07)", flexWrap: "wrap" }}>
            {[
              { num: "100%", label: "Gratuit pour l'acheteur" },
              { num: "2", label: "Pros mobilisés pour vous" },
              { num: "3 min", label: "Pour déposer votre projet" },
            ].map((s, i) => (
              <div key={s.num} style={{ textAlign: "center", padding: "0 3rem", borderRight: i < 2 ? "0.5px solid rgba(255,255,255,0.08)" : "none" }}>
                <div style={{ fontSize: "32px", fontWeight: 600, color: "white", letterSpacing: "-1px" }}>{s.num}</div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", marginTop: "6px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section style={{ padding: "6rem 2rem", background: "#fafafa" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ fontSize: "12px", color: "#10b981", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Comment ça marche</div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, color: "#0a1628", letterSpacing: "-0.5px", marginBottom: "1rem" }}>Simple, rapide, efficace</h2>
            <p style={{ fontSize: "16px", color: "#6b7280", maxWidth: "420px", margin: "0 auto", lineHeight: 1.7 }}>En quelques minutes, connectez-vous aux professionnels qui vont concrétiser votre projet.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {[
              { n: "01", title: "Décrivez votre projet", desc: "Renseignez vos critères, votre budget et votre situation financière en quelques minutes.", color: "#10b981" },
              { n: "02", title: "Confirmez votre email", desc: "Vous recevez un email de confirmation pour valider votre demande et protéger vos données.", color: "#10b981" },
              { n: "03", title: "Les pros vous contactent", desc: "Un courtier analyse votre financement. Un agent immobilier part chercher le bien idéal.", color: "#10b981" },
            ].map(s => (
              <div key={s.n} style={{ background: "white", border: "0.5px solid #e5e7eb", borderRadius: "16px", padding: "2rem", position: "relative", overflow: "hidden" }}>
                <div style={{ fontSize: "48px", fontWeight: 700, color: "#f0fdf4", position: "absolute", top: "1rem", right: "1.25rem", lineHeight: 1, userSelect: "none" }}>{s.n}</div>
                <div style={{ width: "40px", height: "40px", background: "#d1fae5", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem", fontSize: "18px", fontWeight: 700, color: "#065f46" }}>{s.n}</div>
                <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#0a1628", marginBottom: "0.6rem", letterSpacing: "-0.2px" }}>{s.title}</h3>
                <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOUBLE ACCOMPAGNEMENT */}
      <section style={{ padding: "6rem 2rem", background: "white" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ fontSize: "12px", color: "#10b981", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Double accompagnement</div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, color: "#0a1628", letterSpacing: "-0.5px" }}>Un courtier + un agent,<br />tout en un seul formulaire</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <div style={{ background: "#f0fdf4", border: "0.5px solid #bbf7d0", borderRadius: "16px", padding: "2rem" }}>
              <div style={{ fontSize: "28px", marginBottom: "1rem" }}>💰</div>
              <h3 style={{ fontSize: "17px", fontWeight: 600, color: "#0a1628", marginBottom: "0.75rem" }}>Le courtier en financement</h3>
              <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.7 }}>Analyse votre profil financier, calcule votre capacité d'emprunt et prépare le meilleur montage pour votre projet.</p>
              <ul style={{ listStyle: "none", marginTop: "1rem", padding: 0 }}>
                {["Capacité d'emprunt", "Taux négociés", "Montage optimal"].map(item => (
                  <li key={item} style={{ fontSize: "13px", color: "#059669", display: "flex", alignItems: "center", gap: "8px", padding: "4px 0" }}>
                    <span style={{ width: "16px", height: "16px", background: "#10b981", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: "white", flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ background: "#eff6ff", border: "0.5px solid #bfdbfe", borderRadius: "16px", padding: "2rem" }}>
              <div style={{ fontSize: "28px", marginBottom: "1rem" }}>🏠</div>
              <h3 style={{ fontSize: "17px", fontWeight: 600, color: "#0a1628", marginBottom: "0.75rem" }}>L'agent immobilier</h3>
              <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.7 }}>Reçoit vos critères précis et part chercher le bien qui correspond exactement à votre projet et votre budget.</p>
              <ul style={{ listStyle: "none", marginTop: "1rem", padding: 0 }}>
                {["Recherche personnalisée", "Pros de votre secteur", "Accompagnement complet"].map(item => (
                  <li key={item} style={{ fontSize: "13px", color: "#1d4ed8", display: "flex", alignItems: "center", gap: "8px", padding: "4px 0" }}>
                    <span style={{ width: "16px", height: "16px", background: "#3b82f6", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: "white", flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI */}
      <section style={{ padding: "6rem 2rem", background: "#fafafa" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: "12px", color: "#10b981", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Pourquoi OVP Connect</div>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, color: "#0a1628", letterSpacing: "-0.5px", marginBottom: "3rem" }}>Tout ce dont vous avez besoin</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem", maxWidth: "600px", margin: "0 auto" }}>
            {[
              { icon: "🔒", title: "Données sécurisées", desc: "Vos informations sont protégées et transmises uniquement aux professionnels de votre zone." },
              { icon: "🎯", title: "Pros de votre secteur", desc: "Mise en relation avec des professionnels qui interviennent dans votre zone géographique." },
              { icon: "💚", title: "100% gratuit", desc: "Aucune commission, aucun frais cachés. Le service est entièrement gratuit pour les acheteurs." },
              { icon: "⚡", title: "Processus simplifié", desc: "Un seul formulaire pour être mis en relation avec un courtier et un agent immobilier." },
            ].map(f => (
              <div key={f.title} style={{ background: "white", border: "0.5px solid #e5e7eb", borderRadius: "12px", padding: "1.5rem", textAlign: "left" }}>
                <div style={{ fontSize: "22px", marginBottom: "0.75rem" }}>{f.icon}</div>
                <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#0a1628", marginBottom: "0.4rem" }}>{f.title}</h3>
                <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ background: "#0a1628", padding: "6rem 2rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "relative" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 600, color: "white", marginBottom: "1rem", letterSpacing: "-0.5px" }}>Prêt à concrétiser<br />votre projet ?</h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.45)", marginBottom: "2.5rem", maxWidth: "380px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            Rejoignez les acheteurs qui font confiance à OVP Connect pour trouver leur bien et leur financement.
          </p>
          <Link href="/formulaire" style={{ background: "#10b981", color: "white", padding: "0 40px", height: "56px", borderRadius: "14px", fontSize: "17px", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", letterSpacing: "-0.2px" }}>
            Déposer mon projet gratuitement →
          </Link>
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "2rem", flexWrap: "wrap" }}>
            {["🔒 Données protégées", "✅ Pros certifiés", "💚 100% gratuit", "📧 Confirmation email"].map(t => (
              <span key={t} style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#060e1a", padding: "2rem", borderTop: "0.5px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "15px", fontWeight: 600, color: "white" }}>OVP <span style={{ color: "#10b981" }}>Connect</span></span>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              {[
                { label: "Mentions légales", href: "/mentions-legales" },
                { label: "CGU", href: "/cgu" },
                { label: "Confidentialité", href: "/confidentialite" },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>{l.label}</Link>
              ))}
            </div>
          </div>
          <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.15)", lineHeight: 1.6 }}>
            © 2026 OVPPRO.fr — 10 rue de Penthièvre, 75008 Paris · OVP Connect est une plateforme de mise en relation. OVP Connect n'est pas un agent immobilier, un courtier ou un établissement financier.
          </p>
        </div>
      </footer>

    </div>
  );
}