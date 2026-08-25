"use client";
import { useState } from "react";

export default function FormulaireClient() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    prenom: "", nom: "", email: "", telephone: "",
    ville: "", code_postal: "",
    type_bien: "", etat_bien: "", budget: "",
    surface: "", nb_pieces: "", nb_chambres: "",
    situation_familiale: "", delai_projet: "",
    situation_pro: "", revenus_mensuels: "",
    situation_pro_2: "", revenus_mensuels_2: "",
    apport: "", message: ""
  });

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));
  const hasCoEmprunteur = form.situation_familiale === "couple";

  const fetchCodePostal = async (ville: string) => {
    if (ville.length < 3) return;
    try {
      const res = await fetch(`https://geo.api.gouv.fr/communes?nom=${ville}&fields=codesPostaux&limit=1`);
      const data = await res.json();
      if (data[0]?.codesPostaux?.[0]) { set("code_postal", data[0].codesPostaux[0]); return; }
      // Fallback DOM-TOM
      const domtom: Record<string, string> = {
        'mayotte': '97600', 'mamoudzou': '97600',
        'guadeloupe': '97100', 'pointe-a-pitre': '97110', 'basse-terre': '97100',
        'martinique': '97200', 'fort-de-france': '97200',
        'guyane': '97300', 'cayenne': '97300',
        'reunion': '97400', 'saint-denis': '97400', 'saint-pierre': '97410',
      }
      const key = ville.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      if (domtom[key]) set("code_postal", domtom[key])
    } catch (e) {}
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, co_emprunteur: hasCoEmprunteur })
      });
      if (res.ok) setSuccess(true);
    } catch (e) { console.error(e); }
    setLoading(false);
  };

  if (success) return (
    <div style={{ minHeight: "100vh", background: "#F2EFE7", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}>
      <div style={{ background: "#FBFAF6", border: "1px solid #DDD7C9", padding: "3rem 2rem", maxWidth: "400px", textAlign: "center" }}>
        <div style={{ width: "56px", height: "56px", background: "rgba(74,93,69,0.12)", border: "1px solid #4A5D45", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", color: "#4A5D45", fontSize: "22px" }}>
          ✓
        </div>
        <h2 style={{ fontSize: "19px", fontWeight: 700, color: "#241F1A", marginBottom: "0.75rem" }}>Demande envoyée</h2>
        <div style={{ background: "#F2EFE7", border: "1px solid #DDD7C9", padding: "1rem", marginBottom: "1rem" }}>
          <p style={{ fontSize: "14px", color: "#241F1A", fontWeight: 600, marginBottom: "4px" }}>Vérifiez votre boîte mail</p>
          <p style={{ fontSize: "13px", color: "#6B5F4F", lineHeight: 1.6 }}>Nous vous avons envoyé un email de confirmation. Cliquez sur le lien pour activer votre demande et être mis en relation avec un professionnel.</p>
        </div>
        <p style={{ fontSize: "12px", color: "#8A7F6E" }}>Pensez aussi à vérifier vos spams.</p>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#241F1A", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem 1rem" }}>
      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "center", marginBottom: "6px" }}>
          <img src="/favicon.png" alt="OVP Connect" width={36} height={36} style={{ display: "block" }} />
          <span style={{ fontSize: "21px", fontWeight: 700, color: "#F2EFE7" }}>OVP <span style={{ color: "#8FAE86" }}>Connect</span></span>
        </div>
        <p style={{ fontSize: "13px", color: "rgba(242,239,231,0.55)" }}>Trouvez votre bien et votre financement en un seul endroit</p>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "1.5rem" }}>
        {[{ n: 1, label: "Coordonnées" }, { n: 2, label: "Projet" }, { n: 3, label: "Situation" }, { n: 4, label: "Financement" }].map((s, i) => (
          <div key={s.n} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {i > 0 && <div style={{ width: "24px", height: "1px", background: step > i ? "#4A5D45" : "rgba(242,239,231,0.15)" }} />}
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div style={{ width: "26px", height: "26px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 600, background: step > s.n ? "rgba(74,93,69,0.25)" : step === s.n ? "#4A5D45" : "transparent", color: step > s.n ? "#8FAE86" : step === s.n ? "#F2EFE7" : "rgba(242,239,231,0.4)", border: step === s.n || step > s.n ? "none" : "1px solid rgba(242,239,231,0.25)" }}>
                {step > s.n ? "✓" : s.n}
              </div>
              <span style={{ fontSize: "11px", color: step === s.n ? "#8FAE86" : "rgba(242,239,231,0.4)", fontWeight: step === s.n ? 600 : 400 }}>{s.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: "#FBFAF6", border: "1px solid #DDD7C9", padding: "1.75rem", width: "100%", maxWidth: "460px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "5px", border: "1px solid #4A5D45", color: "#4A5D45", fontSize: "11px", padding: "3px 10px", fontWeight: 600, marginBottom: "1.25rem" }}>
          Données sécurisées — 100% gratuit
        </div>

        {step === 1 && (
          <div>
            <p style={{ fontSize: "15px", fontWeight: 700, color: "#241F1A", marginBottom: "1rem" }}>Vos coordonnées</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "10px" }}>
              <div><label htmlFor="prenom" style={lbl}>Prénom *</label><input id="prenom" style={inp} placeholder="Jean" value={form.prenom} onChange={e => set("prenom", e.target.value)} /></div>
              <div><label htmlFor="nom" style={lbl}>Nom *</label><input id="nom" style={inp} placeholder="Dupont" value={form.nom} onChange={e => set("nom", e.target.value)} /></div>
            </div>
            <div style={{ marginBottom: "10px" }}><label htmlFor="email" style={lbl}>Email *</label><input id="email" style={inp} placeholder="jean.dupont@email.fr" type="email" value={form.email} onChange={e => set("email", e.target.value)} /></div>
            <div style={{ marginBottom: "1rem" }}><label htmlFor="telephone" style={lbl}>Téléphone *</label><input id="telephone" style={inp} placeholder="06 00 00 00 00" type="tel" value={form.telephone} onChange={e => set("telephone", e.target.value)} /></div>
            <button style={{ ...btn, opacity: (!form.prenom || !form.nom || !form.email || !form.telephone) ? 0.4 : 1 }}
              disabled={!form.prenom || !form.nom || !form.email || !form.telephone}
              onClick={() => setStep(2)}>Suivant →</button>
          </div>
        )}

        {step === 2 && (
          <div>
            <p style={{ fontSize: "15px", fontWeight: 700, color: "#241F1A", marginBottom: "1rem" }}>Votre projet immobilier</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "10px" }}>
              <div><label htmlFor="ville" style={lbl}>Ville *</label><input id="ville" style={inp} placeholder="Tours" value={form.ville} onChange={e => { set("ville", e.target.value); fetchCodePostal(e.target.value); }} /></div>
              <div><label htmlFor="code_postal" style={lbl}>Code postal</label><input id="code_postal" style={{ ...inp, background: "#F2EFE7" }} placeholder="Auto" value={form.code_postal} onChange={e => set("code_postal", e.target.value)} /></div>
            </div>
            <div style={{ marginBottom: "10px" }}><label htmlFor="type_bien" style={lbl}>Type de bien *</label>
              <select id="type_bien" style={inp} value={form.type_bien} onChange={e => set("type_bien", e.target.value)}>
                <option value="">Sélectionner...</option>
                <option>Appartement</option><option>Maison</option><option>Terrain</option><option>Immeuble</option><option>Local commercial</option>
              </select>
            </div>
            <div style={{ marginBottom: "10px" }}><label htmlFor="etat_bien" style={lbl}>État du bien *</label>
              <select id="etat_bien" style={inp} value={form.etat_bien} onChange={e => set("etat_bien", e.target.value)}>
                <option value="">Sélectionner...</option>
                <option value="neuf">Neuf</option><option value="ancien">Ancien</option><option value="les_deux">Peu importe</option>
              </select>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginBottom: "10px" }}>
              <div><label htmlFor="surface" style={lbl}>Surface min. (m²)</label><input id="surface" style={inp} placeholder="60" type="number" value={form.surface} onChange={e => set("surface", e.target.value)} /></div>
              <div><label htmlFor="nb_pieces" style={lbl}>Pièces min.</label><input id="nb_pieces" style={inp} placeholder="3" type="number" value={form.nb_pieces} onChange={e => set("nb_pieces", e.target.value)} /></div>
              <div><label htmlFor="nb_chambres" style={lbl}>Chambres min.</label><input id="nb_chambres" style={inp} placeholder="2" type="number" value={form.nb_chambres} onChange={e => set("nb_chambres", e.target.value)} /></div>
            </div>
            <div style={{ marginBottom: "1rem" }}><label htmlFor="budget" style={lbl}>Budget maximum (€) *</label><input id="budget" style={inp} placeholder="250000" type="number" value={form.budget} onChange={e => set("budget", e.target.value)} /></div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button style={btnSecondary} onClick={() => setStep(1)}>← Retour</button>
              <button style={{ ...btn, opacity: (!form.ville || !form.type_bien || !form.etat_bien || !form.budget) ? 0.4 : 1, flex: 2 }}
                disabled={!form.ville || !form.type_bien || !form.etat_bien || !form.budget}
                onClick={() => setStep(3)}>Suivant →</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <p style={{ fontSize: "15px", fontWeight: 700, color: "#241F1A", marginBottom: "1rem" }}>Votre situation personnelle</p>
            <div style={{ marginBottom: "10px" }}><label htmlFor="situation_familiale" style={lbl}>Situation familiale *</label>
              <select id="situation_familiale" style={inp} value={form.situation_familiale} onChange={e => set("situation_familiale", e.target.value)}>
                <option value="">Sélectionner...</option>
                <option value="seul">Seul(e)</option>
                <option value="couple">En couple (co-emprunteur)</option>
                <option value="famille">En famille (avec enfants)</option>
                <option value="colocation">Colocation</option>
              </select>
            </div>
            <div style={{ marginBottom: "1rem" }}><label htmlFor="delai_projet" style={lbl}>Délai de votre projet *</label>
              <select id="delai_projet" style={inp} value={form.delai_projet} onChange={e => set("delai_projet", e.target.value)}>
                <option value="">Sélectionner...</option>
                <option value="urgent">Urgent (moins d'1 mois)</option>
                <option value="3_mois">Dans les 3 mois</option>
                <option value="6_mois">Dans les 6 mois</option>
                <option value="1_an">Dans l'année</option>
                <option value="plus">Plus d'un an</option>
              </select>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button style={btnSecondary} onClick={() => setStep(2)}>← Retour</button>
              <button style={{ ...btn, opacity: (!form.situation_familiale || !form.delai_projet) ? 0.4 : 1, flex: 2 }}
                disabled={!form.situation_familiale || !form.delai_projet}
                onClick={() => setStep(4)}>Suivant →</button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <p style={{ fontSize: "15px", fontWeight: 700, color: "#241F1A", marginBottom: "1rem" }}>Situation financière</p>
            <p style={{ fontSize: "12px", fontWeight: 700, color: "#4A5D45", marginBottom: "8px" }}>Emprunteur principal</p>
            <div style={{ marginBottom: "10px" }}><label htmlFor="situation_pro" style={lbl}>Situation professionnelle *</label>
              <select id="situation_pro" style={inp} value={form.situation_pro} onChange={e => set("situation_pro", e.target.value)}>
                <option value="">Sélectionner...</option>
                <option value="cdi">CDI</option><option value="cdd">CDD</option>
                <option value="independant">Indépendant / Auto-entrepreneur</option>
                <option value="fonctionnaire">Fonctionnaire</option>
                <option value="retraite">Retraité</option>
                <option value="sans_emploi">Sans emploi</option>
              </select>
            </div>
            <div style={{ marginBottom: "1rem" }}><label htmlFor="revenus_mensuels" style={lbl}>Revenus mensuels nets (€) *</label><input id="revenus_mensuels" style={inp} placeholder="3000" type="number" value={form.revenus_mensuels} onChange={e => set("revenus_mensuels", e.target.value)} /></div>

            {hasCoEmprunteur && (
              <div style={{ borderTop: "1px solid #DDD7C9", paddingTop: "1rem", marginBottom: "1rem" }}>
                <p style={{ fontSize: "12px", fontWeight: 700, color: "#4A5D45", marginBottom: "8px" }}>Co-emprunteur</p>
                <div style={{ marginBottom: "10px" }}><label htmlFor="situation_pro_2" style={lbl}>Situation professionnelle</label>
                  <select id="situation_pro_2" style={inp} value={form.situation_pro_2} onChange={e => set("situation_pro_2", e.target.value)}>
                    <option value="">Sélectionner...</option>
                    <option value="cdi">CDI</option><option value="cdd">CDD</option>
                    <option value="independant">Indépendant / Auto-entrepreneur</option>
                    <option value="fonctionnaire">Fonctionnaire</option>
                    <option value="retraite">Retraité</option>
                    <option value="sans_emploi">Sans emploi</option>
                  </select>
                </div>
                <div style={{ marginBottom: "1rem" }}><label htmlFor="revenus_mensuels_2" style={lbl}>Revenus mensuels nets (€)</label><input id="revenus_mensuels_2" style={inp} placeholder="2000" type="number" value={form.revenus_mensuels_2} onChange={e => set("revenus_mensuels_2", e.target.value)} /></div>
              </div>
            )}

            <div style={{ marginBottom: "10px" }}><label htmlFor="apport" style={lbl}>Apport disponible (€) *</label><input id="apport" style={inp} placeholder="20000" type="number" value={form.apport} onChange={e => set("apport", e.target.value)} /></div>
            <div style={{ marginBottom: "10px" }}><label htmlFor="message" style={lbl}>Message complémentaire (optionnel)</label><input id="message" style={inp} placeholder="Précisez votre projet..." value={form.message} onChange={e => set("message", e.target.value)} /></div>
            <div style={{ marginBottom: "10px", fontSize: "11px", color: "#8A7F6E" }}>
              En soumettant ce formulaire, vous acceptez nos <a href="/cgu" style={{ color: "#4A5D45" }}>CGU</a> et notre <a href="/confidentialite" style={{ color: "#4A5D45" }}>politique de confidentialité</a>. Vos données seront transmises à des professionnels de l'immobilier de votre secteur.
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button style={btnSecondary} onClick={() => setStep(3)}>← Retour</button>
              <button style={{ ...btn, opacity: (!form.situation_pro || !form.revenus_mensuels || !form.apport || loading) ? 0.4 : 1, flex: 2 }}
                disabled={!form.situation_pro || !form.revenus_mensuels || !form.apport || loading}
                onClick={handleSubmit}>
                {loading ? "Envoi en cours..." : "Envoyer ma demande"}
              </button>
            </div>
          </div>
        )}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginTop: "1.25rem", flexWrap: "wrap", justifyContent: "center" }}>
        {["Données protégées", "Pros certifiés", "100% gratuit"].map(t => (
          <div key={t} style={{ fontSize: "11px", color: "rgba(242,239,231,0.4)" }}>{t}</div>
        ))}
      </div>
    </div>
  );
}

const lbl: React.CSSProperties = { fontSize: "13px", color: "#4B4438", display: "block", marginBottom: "6px", fontWeight: 600 };
const inp: React.CSSProperties = { width: "100%", height: "42px", border: "1px solid #DDD7C9", padding: "0 12px", fontSize: "14px", color: "#241F1A", background: "#FBFAF6", outline: "none", fontFamily: "inherit" };
const btn: React.CSSProperties = { flex: 1, height: "44px", background: "#4A5D45", color: "#F2EFE7", border: "none", fontSize: "15px", fontWeight: 700, cursor: "pointer", width: "100%", fontFamily: "inherit" };
const btnSecondary: React.CSSProperties = { flex: 1, height: "44px", background: "transparent", color: "#4B4438", border: "1px solid #DDD7C9", fontSize: "14px", cursor: "pointer", fontWeight: 600, fontFamily: "inherit" };
