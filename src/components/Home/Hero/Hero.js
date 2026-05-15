"use client";
import Button from "@/components/ui/Button/Button";
import Image from "next/image";
import styles from "./hero.module.css";
import useSimpleAnime from "@/hooks/useSimpleAnime";

export default function Hero() {
  useSimpleAnime();
  return (
    <main className={styles["introducao-bg"]}>
      <div className={`${styles.introducao} container`}>
        <div className={styles["introducao-conteudo"]}>
          <h1 data-anime="200" className="font-1-xxl cor-0 fadeInDown">
            Bicicletas feitas sob medida<span className="cor-p1">.</span>
          </h1>
          <p data-anime="400" className="font-2-l cor-5 fadeInUp">
            Bicicletas elétricas de alta precisão e qualidade, feitas sob medida
            para você. Explore o mundo na sua velocidade com a Bikcraft.
          </p>
          <Button data-anime="600" className="fadeInScale" href="/bicicletas">
            Escolha a sua
          </Button>
        </div>
        <picture data-anime="800" className="fadeInBlur">
          <source
            media="(max-width: 800px)"
            srcSet="/img/bicicletas/nimbus.jpg"
          />
          <Image
            src="/img/fotos/introducao.jpg"
            alt="Bicicleta Elétrica Bikcraft Nimbus"
            width={1200}
            height={1600}
          />
        </picture>
      </div>
    </main>
  );
}
