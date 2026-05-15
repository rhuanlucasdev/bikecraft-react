import Button from "../ui/Button/Button";
import Image from "next/image";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <main className={styles["introducao-bg"]}>
      <div className={`${styles.introducao} container`}>
        <div className={styles["introducao-conteudo"]}>
          <h1 className="font-1-xxl cor-0 fadeInDown">
            Bicicletas feitas sob medida<span className="cor-p1">.</span>
          </h1>
          <p className="font-2-l cor-5 fadeInDown">
            Bicicletas elétricas de alta precisão e qualidade, feitas sob medida
            para você. Explore o mundo na sua velocidade com a Bikcraft.
          </p>
          <Button href="/bicicletas">Escolha a sua</Button>
        </div>
        <picture className="fadeInDown">
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
