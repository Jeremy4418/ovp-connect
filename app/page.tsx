"use client";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    prenom: "", nom: "", email: "", telephone: "",
    ville: "", code_postal: "",
    type_bien: "", budget: "",
    situation_pro: "", revenus_mensuels: "", apport: "",
    message: ""
  });

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (res.ok) setSuccess(true);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  if (success) return (
    <div style={{ minHeight: "100vh", background: "#f0faf5", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}>
      <div style={{ background: "white", borderRadius: "16px", border: "0.5px solid #e5e7eb", padding: "3rem 2rem", maxWidth: "400px", textAlign: "center" }}>
        <div style={{ width: "64px", height: "64px", background: "#d1fae5", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
          <svg width="28" height="28" fill="none" stroke="#10b981" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
        </div>
        <h2 style={{ fontSize: "20px", fontWeight: 500, color: "#111", marginBottom: "0.75rem" }}>Demande envoyée !</h2>
        <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: 1.6 }}>Un professionnel de votre secteur va vous contacter très prochainement. Vérifiez votre boîte email.</p>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#f0faf5", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem 1rem", fontFamily: "system-ui, sans-serif" }}>

      {/* Logo */}
      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "center", marginBottom: "6px" }}>
          <div style={{ width: "38px", height: "38px", background: "#10b981", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>
          </div>
          <span style={{ fontSize: "22px", fontWeight: 500, color: "#111" }}>OVP <span style={{ color: "#10b981" }}>Connect</span></span>
        </div>
        <p style={{ fontSize: "13px", color: "#6b7280" }}>Trouvez votre bien et votre financement en un seul endroit</p>
      </div>

      {/* Étapes */}
      <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "1.5rem" }}>
        {[
          { n: 1, label: "Coordonnées" },
          { n: 2, label: "Projet" },
          { n: 3, label: "Financement" }
        ].map((s, i) => (
          <div key={s.n} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {i > 0 && <div style={{ width: "32px", height: "1px", background: step > i ? "#10b981" : "#e5e7eb" }} />}
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div style={{
                width: "28px", height: "28px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 500,
                background: step > s.n ? "#d1fae5" : step === s.n ? "#10b981" : "#f3f4f6",
                color: step > s.n ? "#059669" : step === s.n ? "white" : "#9ca3af",
                border: step > s.n ? "none" : step === s.n ? "none" : "0.5px solid #e5e7eb"
              }}>
                {step > s.n ? <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg> : s.n}
              </div>
              <span style={{ fontSize: "12px", color: step === s.n ? "#059669" : "#9ca3af", fontWeight: step === s.n ? 500 : 400 }}>{s.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Carte */}
      <div style={{ background: "white", borderRadius: "16px", border: "0.5px solid #e5e7eb", padding: "1.75rem", width: "100%", maxWidth: "440px" }}>

        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "5px", background: "#d1fae5", color: "#065f46", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", fontWeight: 500, marginBottom: "1.25rem" }}>
          <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          Données sécurisées — 100% gratuit
        </div>

        {/* Étape 1 */}
        {step === 1 && (
          <div>
            <p style={{ fontSize: "15px", fontWeight: 500, color: "#111", marginBottom: "1rem" }}>👤 Vos coordonnées</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "10px" }}>
              <div>
                <label style={{ fontSize: "12px", color: "#6b7280", display: "block", marginBottom: "4px" }}>Prénom *</label>
                <input style={inp} placeholder="Jean" value={form.prenom} onChange={e => set("prenom", e.target.value)} />
              </div>
              <div>
                <label style={{ fontSize: "12px", color: "#6b7280", display: "block", marginBottom: "4px" }}>Nom *</label>
                <input style={inp} placeholder="Dupont" value={form.nom} onChange={e => set("nom", e.target.value)} />
              </div>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label style={{ fontSize: "12px", color: "#6b7280", display: "block", marginBottom: "4px" }}>Email *</label>
              <input style={inp} placeholder="jean.dupont@email.fr" type="email" value={form.email} onChange={e => set("email", e.target.value)} />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ fontSize: "12px", color: "#6b7280", display: "block", marginBottom: "4px" }}>Téléphone *</label>
              <input style={inp} placeholder="06 00 00 00 00" type="tel" value={form.telephone} onChange={e => set("telephone", e.target.value)} />
            </div>
            <button style={{ ...btn, opacity: (!form.prenom || !form.nom || !form.email || !form.telephone) ? 0.4 : 1 }}
              disabled={!form.prenom || !form.nom || !form.email || !form.telephone}
              onClick={() => setStep(2)}>
              Suivant →
            </button>
          </div>
        )}

        {/* Étape 2 */}
        {step === 2 && (
          <div>
            <p style={{ fontSize: "15px", fontWeight: 500, color: "#111", marginBottom: "1rem" }}>🏠 Votre projet immobilier</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "10px" }}>
              <div>
                <label style={{ fontSize: "12px", color: "#6b7280", display: "block", marginBottom: "4px" }}>Ville *</label>
                <input style={inp} placeholder="Tours" value={form.ville} onChange={e => set("ville", e.target.value)} />
              </div>
              <div>
                <label style={{ fontSize: "12px", color: "#6b7280", display: "block", marginBottom: "4px" }}>Code postal *</label>
                <input style={inp} placeholder="37000" value={form.code_postal} onChange={e => set("code_postal", e.target.value)} />
              </div>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label style={{ fontSize: "12px", color: "#6b7280", display: "block", marginBottom: "4px" }}>Type de bien *</label>
              <select style={inp} value={form.type_bien} onChange={e => set("type_bien", e.target.value)}>
                <option value="">Sélectionner...</option>
                <option>Appartement</option>
                <option>Maison</option>
                <option>Terrain</option>
                <option>Immeuble</option>
                <option>Local commercial</option>
              </select>
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ fontSize: "12px", color: "#6b7280", display: "block", marginBottom: "4px" }}>Budget maximum (€) *</label>
              <input style={inp} placeholder="250000" type="number" value={form.budget} onChange={e => set("budget", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button style={{ ...btnSecondary }} onClick={() => setStep(1)}>← Retour</button>
              <button style={{ ...btn, opacity: (!form.ville || !form.code_postal || !form.type_bien || !form.budget) ? 0.4 : 1, flex: 2 }}
                disabled={!form.ville || !form.code_postal || !form.type_bien || !form.budget}
                onClick={() => setStep(3)}>
                Suivant →
              </button>
            </div>
          </div>
        )}

        {/* Étape 3 */}
        {step === 3 && (
          <div>
            <p style={{ fontSize: "15px", fontWeight: 500, color: "#111", marginBottom: "1rem" }}>💰 Votre situation financière</p>
            <div style={{ marginBottom: "10px" }}>
              <label style={{ fontSize: "12px", color: "#6b7280", display: "block", marginBottom: "4px" }}>Situation professionnelle *</label>
              <select style={inp} value={form.situation_pro} onChange={e => set("situation_pro", e.target.value)}>
                <option value="">Sélectionner...</option>
                <option value="cdi">CDI</option>
                <option value="cdd">CDD</option>
                <option value="independant">Indépendant / Auto-entrepreneur</option>
                <option value="fonctionnaire">Fonctionnaire</option>
                <option value="retraite">Retraité</option>
                <option value="sans_emploi">Sans emploi</option>
              </select>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label style={{ fontSize: "12px", color: "#6b7280", display: "block", marginBottom: "4px" }}>Revenus mensuels nets (€) *</label>
              <input style={inp} placeholder="3000" type="number" value={form.revenus_mensuels} onChange={e => set("revenus_mensuels", e.target.value)} />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label style={{ fontSize: "12px", color: "#6b7280", display: "block", marginBottom: "4px" }}>Apport disponible (€) *</label>
              <input style={inp} placeholder="20000" type="number" value={form.apport} onChange={e => set("apport", e.target.value)} />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ fontSize: "12px", color: "#6b7280", display: "block", marginBottom: "4px" }}>Message complémentaire (optionnel)</label>
              <input style={inp} placeholder="Précisez votre projet..." value={form.message} onChange={e => set("message", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button style={{ ...btnSecondary }} onClick={() => setStep(2)}>← Retour</button>
              <button style={{ ...btn, opacity: (!form.situation_pro || !form.revenus_mensuels || !form.apport || loading) ? 0.4 : 1, flex: 2 }}
                disabled={!form.situation_pro || !form.revenus_mensuels || !form.apport || loading}
                onClick={handleSubmit}>
                {loading ? "Envoi en cours..." : "Envoyer ma demande ✓"}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mentions de confiance */}
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginTop: "1.25rem" }}>
        {[
          { icon: "🔒", text: "Données protégées" },
          { icon: "⚡", text: "Réponse sous 24h" },
          { icon: "✅", text: "Pros certifiés" }
        ].map(t => (
          <div key={t.text} style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "11px", color: "#9ca3af" }}>
            <span>{t.icon}</span>{t.text}
          </div>
        ))}
      </div>
    </div>
  );
}

const inp: React.CSSProperties = {
  width: "100%", height: "38px", border: "0.5px solid #e5e7eb", borderRadius: "8px",
  padding: "0 10px", fontSize: "13px", color: "#111", background: "white", outline: "none"
};

const btn: React.CSSProperties = {
  flex: 1, height: "40px", background: "#10b981", color: "white", border: "none",
  borderRadius: "8px", fontSize: "14px", fontWeight: 500, cursor: "pointer", width: "100%"
};

const btnSecondary: React.CSSProperties = {
  flex: 1, height: "40px", background: "white", color: "#6b7280",
  border: "0.5px solid #e5e7eb", borderRadius: "8px", fontSize: "14px", cursor: "pointer"
};