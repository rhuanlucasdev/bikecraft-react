import BikeList from "@/components/BikeList/BikeList";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Tecnologias from "@/components/Tecnologias/Tecnologias";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <BikeList />
      <Tecnologias />
      <Footer />
    </>
  );
}
