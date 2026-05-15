"use client";

import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import useSimpleAnime from "@/hooks/useSimpleAnime";
import styles from "./bicicletas.module.css";

const bikes = [
  {
    name: "Nimbus Stark",
    price: 4999,
    image: "/img/bicicletas/nimbus.jpg",
    alt: "Bicicleta preta",
    description:
      "A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.",
    features: [
      { icon: "/img/icones/eletrica.svg", label: "Motor Elétrico" },
      { icon: "/img/icones/carbono.svg", label: "Fibra de Carbono" },
      { icon: "/img/icones/velocidade.svg", label: "50 km/h" },
      { icon: "/img/icones/rastreador.svg", label: "Rastreador" },
    ],
    href: "/bicicletas/nimbus",
  },
  {
    name: "Magic Might",
    price: 2499,
    image: "/img/bicicletas/magic.jpg",
    alt: "Bicicleta preta",
    description:
      "A Magic Might é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.",
    features: [
      { icon: "/img/icones/eletrica.svg", label: "Motor Elétrico" },
      { icon: "/img/icones/carbono.svg", label: "Fibra de Carbono" },
      { icon: "/img/icones/velocidade.svg", label: "45 km/h" },
      { icon: "/img/icones/rastreador.svg", label: "Rastreador" },
    ],
    href: "/bicicletas/magic",
    dark: true,
  },
  {
    name: "Nebula Cosmic",
    price: 3999,
    image: "/img/bicicletas/nebula.jpg",
    alt: "Bicicleta preta",
    description:
      "A Nebula Cosmic é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.",
    features: [
      { icon: "/img/icones/eletrica.svg", label: "Motor Elétrico" },
      { icon: "/img/icones/carbono.svg", label: "Fibra de Carbono" },
      { icon: "/img/icones/velocidade.svg", label: "50 km/h" },
      { icon: "/img/icones/rastreador.svg", label: "Rastreador" },
    ],
    href: "/bicicletas/nebula",
  },
];

function BicicletaCard({ bike, index }) {
  const animationClass = index % 2 === 0 ? "fadeInLeft" : "fadeInRight";

  return (
    <article
      data-anime={index * 200 + 200}
      className={`${bike.dark ? styles["bicicletas-bg"] : ""} ${animationClass}`.trim()}
    >
      <div className={`${styles.bicicletas} container`}>
        <div className={styles["bicicletas-imagem"]}>
          <Image src={bike.image} alt={bike.alt} width={1120} height={840} />
          <span className="font-2-m cor-0">R$ {bike.price}</span>
        </div>

        <div className={styles["bicicletas-conteudo"]}>
          <h2 className={bike.dark ? "font-1-xl cor-0" : "font-1-xl"}>
            {bike.name}
          </h2>
          <p className={bike.dark ? "font-2-s cor-5" : "font-2-s cor-8"}>
            {bike.description}
          </p>

          <ul className={bike.dark ? "font-1-m cor-5" : "font-1-m cor-8"}>
            {bike.features.map((feature) => (
              <li key={feature.label}>
                <Image src={feature.icon} alt="" width={24} height={24} />
                {feature.label}
              </li>
            ))}
          </ul>

          <Button href={bike.href} arrow>
            Mais Sobre
          </Button>
        </div>
      </div>
    </article>
  );
}

export default function BicicletasSection() {
  useSimpleAnime();

  return (
    <>
      <div className="titulo-bg">
        <div className="titulo container">
          <p data-anime="200" className="font-2-l-b cor-5 fadeInUp">
            Escolha a melhor para você
          </p>
          <h1 data-anime="300" className="font-1-xxl cor-0 fadeInUp">
            nossas bicicletas<span className="cor-p1">.</span>
          </h1>
        </div>
      </div>

      {bikes.map((bike, index) => (
        <BicicletaCard key={bike.name} bike={bike} index={index} />
      ))}
    </>
  );
}
