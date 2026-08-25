import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité d'OVP Connect : données collectées, finalités, durée de conservation et vos droits RGPD.",
  alternates: {
    canonical: "https://ovppro.fr/confidentialite",
  },
};

export default function Confidentialite() {
  return (
    <div style={{ background: "#F2EFE7", minHeight: "100vh", color: "#241F1A" }}>
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2rem", height: "64px", background: "#FBFAF6", borderBottom: "1px solid #DDD7C9" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "#241F1A", fontWeight: 700, fontSize: "16px" }}>
          <img src="/favicon.png" alt="OVP Connect" width={30} height={30} style={{ display: "block" }} />
          OVP <span style={{ color: "#4A5D45" }}>Connect</span>
        </Link>
      </nav>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "3rem 2rem" }}>
        <h1 style={{ fontSize: "27px", fontWeight: 800, color: "#241F1A", marginBottom: "0.5rem" }}>Politique de confidentialité</h1>
        <p style={{ fontSize: "13px", color: "#8A7F6E", marginBottom: "2.5rem" }}>Dernière mise à jour : août 2026</p>

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
            title: "8. Cookies et mesure d'audience",
            content: `Le site ovppro.fr utilise des cookies techniques nécessaires à son bon fonctionnement.\n\nLe site utilise également Google Analytics, un outil de mesure d'audience qui permet d'analyser la fréquentation du site (pages visitées, provenance des visiteurs, durée de visite). Ces données sont traitées par Google et peuvent donner lieu à un transfert hors de l'Union européenne, encadré par les clauses contractuelles types de Google.\n\nAucune donnée collectée via Google Analytics n'est utilisée à des fins publicitaires par OVP Connect.`
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
            <h2 style={{ fontSize: "16px", fontWeight: 700, color: "#241F1A", marginBottom: "0.75rem" }}>{s.title}</h2>
            <p style={{ fontSize: "14px", color: "#4B4438", lineHeight: 1.8, whiteSpace: "pre-line" }}>{s.content}</p>
          </div>
        ))}

        <div style={{ borderTop: "1px solid #DDD7C9", paddingTop: "1.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/mentions-legales" style={{ fontSize: "13px", color: "#4A5D45", textDecoration: "none" }}>Mentions légales</Link>
          <Link href="/cgu" style={{ fontSize: "13px", color: "#4A5D45", textDecoration: "none" }}>CGU</Link>
          <Link href="/" style={{ fontSize: "13px", color: "#6B5F4F", textDecoration: "none" }}>← Retour à l'accueil</Link>
        </div>
      </div>
    </div>
  );
}
