import Link from "next/link";

export default function Confidentialite() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#f9fafb", minHeight: "100vh" }}>
      <nav style={{ background: "#0a1628", padding: "1rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
          <div style={{ width: "32px", height: "32px", background: "#10b981", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>
          </div>
          <span style={{ fontSize: "16px", fontWeight: 500, color: "white" }}>OVP <span style={{ color: "#10b981" }}>Connect</span></span>
        </Link>
      </nav>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "3rem 2rem" }}>
        <h1 style={{ fontSize: "28px", fontWeight: 500, color: "#111", marginBottom: "0.5rem" }}>Politique de confidentialité</h1>
        <p style={{ fontSize: "13px", color: "#9ca3af", marginBottom: "2.5rem" }}>Dernière mise à jour : juin 2026</p>

        {[
          {
            title: "1. Responsable du traitement",
            content: `Le responsable du traitement des données collectées via ovppro.fr est OVPPRO.fr, dont le siège social est situé au 10 rue de Penthièvre, 75008 Paris.\n\nContact : contact@optimisez-votre-pret.fr`
          },
          {
            title: "2. Données collectées",
            content: `Dans le cadre du dépôt d'un projet immobilier, OVP Connect collecte les données suivantes :\n\n— Données d'identité : prénom, nom\n— Coordonnées : email, téléphone\n— Données du projet : ville, code postal, type de bien, budget, surface, nombre de pièces\n— Données financières : revenus mensuels, apport, situation professionnelle\n— Données personnelles : situation familiale, délai du projet\n\nCes données sont fournies volontairement par l'utilisateur via le formulaire de dépôt de projet.`
          },
          {
            title: "3. Finalités du traitement",
            content: `Les données collectées sont traitées pour les finalités suivantes :\n— Mise en relation avec des professionnels de l'immobilier et du financement de votre secteur\n— Transmission du dossier aux professionnels abonnés à OVP Pro intervenant dans votre zone géographique\n— Gestion des demandes et suivi des mises en relation`
          },
          {
            title: "4. Base légale",
            content: `Le traitement de vos données repose sur votre consentement explicite, exprimé lors de la soumission du formulaire. Vous pouvez retirer ce consentement à tout moment en nous contactant.`
          },
          {
            title: "5. Destinataires des données",
            content: `Vos données sont transmises aux professionnels abonnés à la plateforme OVP Pro (agents immobiliers, courtiers en financement) intervenant dans votre zone géographique.\n\nOVP Connect ne revend jamais vos données à des tiers à des fins commerciales.`
          },
          {
            title: "6. Durée de conservation",
            content: `Vos données sont conservées pendant une durée maximale de 12 mois à compter de la date de dépôt de votre projet, sauf demande de suppression de votre part.`
          },
          {
            title: "7. Vos droits",
            content: `Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants :\n— Droit d'accès à vos données\n— Droit de rectification\n— Droit à l'effacement (droit à l'oubli)\n— Droit d'opposition au traitement\n— Droit à la portabilité de vos données\n— Droit à la limitation du traitement\n\nPour exercer ces droits, contactez-nous à : contact@optimisez-votre-pret.fr`
          },
          {
            title: "8. Cookies",
            content: `Le site ovppro.fr utilise des cookies techniques nécessaires au bon fonctionnement du site. Aucun cookie publicitaire ou de tracking n'est utilisé.`
          },
          {
            title: "9. Sécurité",
            content: `Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou divulgation.`
          },
          {
            title: "10. Réclamation",
            content: `Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) : www.cnil.fr`
          },
        ].map(s => (
          <div key={s.title} style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "16px", fontWeight: 500, color: "#111", marginBottom: "0.75rem" }}>{s.title}</h2>
            <p style={{ fontSize: "14px", color: "#4b5563", lineHeight: 1.8, whiteSpace: "pre-line" }}>{s.content}</p>
          </div>
        ))}

        <div style={{ borderTop: "0.5px solid #e5e7eb", paddingTop: "1.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/mentions-legales" style={{ fontSize: "13px", color: "#10b981", textDecoration: "none" }}>Mentions légales</Link>
          <Link href="/cgu" style={{ fontSize: "13px", color: "#10b981", textDecoration: "none" }}>CGU</Link>
          <Link href="/" style={{ fontSize: "13px", color: "#6b7280", textDecoration: "none" }}>← Retour à l'accueil</Link>
        </div>
      </div>
    </div>
  );
}