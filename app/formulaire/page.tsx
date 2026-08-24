import type { Metadata } from "next";
import FormulaireClient from "./FormulaireClient";

export const metadata: Metadata = {
  title: "Déposer mon projet — OVP Connect",
  description: "Déposez gratuitement votre projet immobilier en quelques minutes. Un courtier analyse votre financement, un agent immobilier trouve votre bien idéal.",
  alternates: {
    canonical: "https://ovppro.fr/formulaire",
  },
};

export default function FormulairePage() {
  return <FormulaireClient />;
}
