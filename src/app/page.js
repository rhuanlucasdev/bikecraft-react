import BikeList from "@/components/BikeList/BikeList";
import Hero from "@/components/Home/Hero/Hero";
import Tecnologias from "@/components/Home/Tecnologias/Tecnologias";
import Parceiros from "@/components/Home/Parceiros/Parceiros";
import Depoimentos from "@/components/Home/Depoimentos/Depoimentos";
import SegurosSection from "@/components/Seguros/SegurosSection";

export default function Home() {
  return (
    <>
      <Hero />
      <BikeList />
      <Tecnologias />
      <Parceiros />
      <Depoimentos />
      <SegurosSection />
    </>
  );
}
