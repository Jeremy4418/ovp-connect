import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation",
  description: "Conditions générales d'utilisation du service OVP Connect : accès, utilisation des données, obligations et responsabilités.",
  alternates: {
    canonical: "https://ovppro.fr/cgu",
  },
};

export default function CGU() {
  return (
    <div style={{ background: "#F2EFE7", minHeight: "100vh", color: "#241F1A" }}>
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2rem", height: "64px", background: "#FBFAF6", borderBottom: "1px solid #DDD7C9" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "#241F1A", fontWeight: 700, fontSize: "16px" }}>
          <img src="/favicon.png" alt="OVP Connect" width={30} height={30} style={{ display: "block" }} />
          OVP <span style={{ color: "#4A5D45" }}>Connect</span>
        </Link>
      </nav>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "3rem 2rem" }}>
        <h1 style={{ fontSize: "27px", fontWeight: 800, color: "#241F1A", marginBottom: "0.5rem" }}>Conditions générales d'utilisation</h1>
        <p style={{ fontSize: "13px", color: "#8A7F6E", marginBottom: "2.5rem" }}>Dernière mise à jour : août 2026</p>

        {[
          {
            title: "1. Objet",
            content: `Les présentes conditions générales d'utilisation (CGU) ont pour objet de définir les modalités et conditions d'utilisation du site ovppro.fr et du service OVP Connect, ainsi que les droits et obligations des utilisateurs.\n\nL'utilisation du site implique l'acceptation pleine et entière des présentes CGU.`
          },
          {
            title: "2. Description du service",
            content: `OVP Connect est une plateforme gratuite de mise en relation entre des particuliers souhaitant acquérir un bien immobilier (ci-après "l'Acheteur") et des professionnels de l'immobilier et du financement abonnés à la plateforme OVP Pro (ci-après "les Professionnels").\n\nOVP Connect ne garantit pas la conclusion d'une transaction immobilière ni l'obtention d'un financement.`
          },
          {
            title: "3. Accès au service",
            content: `Le service est accessible gratuitement à tout particulier souhaitant déposer un projet d'acquisition immobilière. L'Acheteur doit fournir des informations exactes, complètes et à jour lors du dépôt de son projet.`
          },
          {
            title: "4. Utilisation des données",
            content: `En soumettant le formulaire, l'Acheteur accepte que ses données personnelles et financières soient transmises aux Professionnels abonnés à OVP Pro intervenant dans sa zone géographique.\n\nCes données sont utilisées exclusivement dans le cadre de la mise en relation et ne sont pas revendues à des tiers.`
          },
          {
            title: "5. Obligations de l'Acheteur",
            content: `L'Acheteur s'engage à :\n— Fournir des informations exactes et sincères\n— Ne pas utiliser le service à des fins frauduleuses\n— Ne pas soumettre plusieurs demandes pour un même projet\n— Répondre de bonne foi aux sollicitations des Professionnels`
          },
          {
            title: "6. Responsabilité d'OVP Connect",
            content: `OVP Connect agit en qualité d'intermédiaire technique de mise en relation. Elle n'est pas responsable :\n— De la qualité des prestations fournies par les Professionnels\n— Des suites données ou non données à une mise en relation\n— Des inexactitudes dans les informations fournies par l'Acheteur\n— De tout préjudice résultant d'une relation entre l'Acheteur et un Professionnel`
          },
          {
            title: "7. Propriété intellectuelle",
            content: `Tous les éléments du site ovppro.fr sont protégés par le droit de la propriété intellectuelle. Toute reproduction ou utilisation sans autorisation préalable est interdite.`
          },
          {
            title: "8. Modification des CGU",
            content: `OVPPRO.fr se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront informés des modifications par la mise à jour de la date en haut de cette page. L'utilisation du service après modification vaut acceptation des nouvelles CGU.`
          },
          {
            title: "9. Droit applicable",
            content: `Les présentes CGU sont soumises au droit français. En cas de litige, les parties s'efforceront de trouver une solution amiable. À défaut, les tribunaux compétents sont ceux du ressort de Paris.`
          },
        ].map(s => (
          <div key={s.title} style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "16px", fontWeight: 700, color: "#241F1A", marginBottom: "0.75rem" }}>{s.title}</h2>
            <p style={{ fontSize: "14px", color: "#4B4438", lineHeight: 1.8, whiteSpace: "pre-line" }}>{s.content}</p>
          </div>
        ))}

        <div style={{ borderTop: "1px solid #DDD7C9", paddingTop: "1.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/mentions-legales" style={{ fontSize: "13px", color: "#4A5D45", textDecoration: "none" }}>Mentions légales</Link>
          <Link href="/confidentialite" style={{ fontSize: "13px", color: "#4A5D45", textDecoration: "none" }}>Politique de confidentialité</Link>
          <Link href="/" style={{ fontSize: "13px", color: "#6B5F4F", textDecoration: "none" }}>← Retour à l'accueil</Link>
        </div>
      </div>
    </div>
  );
}
