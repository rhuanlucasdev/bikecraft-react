import Link from "next/link";
import styles from "./tecnologias.module.css";
import Image from "next/image";

export default function Tecnologias() {
  return (
    <article className={styles["tecnologia-bg"]}>
      <div className={`${styles.tecnologia} container`}>
        <div className={styles["tecnologia-conteudo"]}>
          <span className="font-2-l-b cor-5">Tecnologia Avançada</span>
          <h2 className="font-1-xxl cor-0">
            você escolhe as suas cores e componentes
            <span class="cor-p1">.</span>
          </h2>
          <p className="font-2-l cor-5">
            Cada Bikcraft é única e possui a sua identidade. As medidas serão
            exatas para o seu corpo e altura, garantindo maior conforto e
            ergonomia na sua pedalada. Você pode também personalizar
            completamente as suas cores.
          </p>
          <Link href="/bikes" className="link">
            Escolha um modelo
          </Link>
          <div className={styles["tecnologia-vantagens"]}>
            <div>
              <Image
                src="/img/icones/eletrica.svg"
                width={24}
                height={24}
                alt="Elétrica"
              />
              <h3 className="font-1-m cor-0">Motor Elétrico</h3>
              <p className="font-2-s cor-5">
                Toda Bikcraft é equipada com um motor elétrico que possui
                duração de até 120h. A bateria é recarregada com a sua energia
                gasta ao pedalar.
              </p>
            </div>
            <div>
              <Image
                src="/img/icones/rastreador.svg"
                width={24}
                height={24}
                alt="Rastreador"
              />
              <h3 className="font-1-m cor-0">Rastreador</h3>
              <p className="font-2-s cor-5">
                Sabemos o quão preciosa é a sua Bikcraft, por isso adicionamos
                rastreadores e sistemas anti-furto para garantir o seu sossego.
              </p>
            </div>
          </div>
        </div>
        <div className={styles["tecnologia-imagem"]}>
          <Image
            src="/img/fotos/tecnologia.jpg"
            width={1200}
            height={1920}
            alt="Tecnologia"
            className="rounded"
          />
        </div>
      </div>
    </article>
  );
}
