import type { Metadata } from "next";
import FormulaireClient from "./FormulaireClient";

export const metadata: Metadata = {
  title: "Déposer votre projet immobilier",
  description: "Déposez gratuitement votre projet immobilier avec OVP Connect. Présentez votre recherche, votre budget et votre situation pour être mis en relation avec des professionnels.",
  alternates: {
    canonical: "https://ovppro.fr/formulaire",
  },
};

export default function FormulairePage() {
  return <FormulaireClient />;
}
