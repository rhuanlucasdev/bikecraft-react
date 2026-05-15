import Perguntas from "@/components/pages/seguros/Perguntas/Perguntas";
import Vantagens from "@/components/pages/seguros/Vantagens/Vantagens";
import SegurosSection from "@/components/Seguros/SegurosSection";

export const metadata = {
  title: "Seguros | Bikcraft",
};

export default function SegurosPage() {
  return (
    <>
      <SegurosSection variant="page" />
      <Vantagens />
      <Perguntas />
    </>
  );
}
