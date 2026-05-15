"use client";

import SegurosLista from "./SegurosLista";
import styles from "./seguros.module.css";
import useSimpleAnime from "@/hooks/useSimpleAnime";

const plans = [
  {
    title: "PRATA",
    price: 199,
    benefits: [
      "Duas trocas por ano",
      "Assistência técnica",
      "Suporte 08h às 18h",
      "Cobertura estadual",
    ],
    link: "/orcamento?tipo=seguro&produto=prata",
  },
  {
    title: "OURO",
    price: 299,
    highlight: true,
    benefits: [
      "Cinco trocas por ano",
      "Assistência especial",
      "Suporte 24h",
      "Cobertura nacional",
      "Desconto em parceiros",
      "Acesso ao Clube Bikcraft",
    ],
    link: "/orcamento?tipo=seguro&produto=ouro",
  },
];

export default function SegurosSection({ variant = "home" }) {
  useSimpleAnime();

  if (variant === "page") {
    return (
      <article className={styles["seguros-bg"]}>
        <div className="titulo-bg">
          <div className="titulo container">
            <p data-anime="200" className="font-2-l-b cor-5 fadeInUp">
              Escolha o seguro
            </p>
            <h1 data-anime="300" className="font-1-xxl cor-0 fadeInUp">
              você seguro<span className="cor-p1">.</span>
            </h1>
          </div>
        </div>

        <div className={`${styles["seguros"]} container`}>
          <SegurosLista plans={plans} variant="page" />
        </div>
      </article>
    );
  }

  return (
    <article className={styles["seguros-bg"]}>
      <div className={`${styles["seguros"]} container`}>
        <h2 data-anime="200" className="font-1-xxl cor-0 fadeInUp">
          seguros<span className="cor-p1">.</span>
        </h2>
        <SegurosLista plans={plans} />
      </div>
    </article>
  );
}
