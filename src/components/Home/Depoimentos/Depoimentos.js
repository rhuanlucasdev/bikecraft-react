"use client";
import styles from "./depoimentos.module.css";
import useSimpleAnime from "@/hooks/useSimpleAnime";

export default function Depoimentos() {
  useSimpleAnime();
  return (
    <section className={styles["depoimento"]} aria-label="Nossos Parceiros">
      <div
        className={`${styles["media"]} fadeInScale fadeInBlur`}
        data-anime="200"
      >
        <video autoPlay muted loop playsInline>
          <source src="/videos/depoimento.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        className={`${styles["depoimento-conteudo"]} fadeInUp`}
        data-anime="400"
      >
        <blockquote data-anime="500" className="fadeInUp font-1-xl cor-p5">
          <p>
            Pedalar sempre foi a minha paixão, o que o pessoal da Bikcraft fez
            foi intensificar o meu amor por esta atividade. Recomendo à todos
            que amo.
          </p>
        </blockquote>
        <span data-anime="600" className="font-1-m-b cor-p4 fadeInUp">
          Ana Júlia
        </span>
      </div>
    </section>
  );
}
