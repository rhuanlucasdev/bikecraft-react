"use client";
import useSimpleAnime from "@/hooks/useSimpleAnime";
import style from "./segurosSections.module.css";
import VantagensList from "./VantagensList";

const vantagens = [
  {
    name: "Reparo Elétrico",
    desc: "Garantimos o reparo completo do seu motor em caso de falhas. Sabemos que falhas são raras, mas estamos aqui para caso ocorra.",
    src: "/img/icones/eletrica.svg",
  },
  {
    name: "Carbono",
    desc: "Nossos quadros são feitos para durar para sempre. Mas caso algo ocorra, ficamos felizes em reparar.",
    src: "/img/icones/carbono.svg",
  },
  {
    name: "Sustentável",
    desc: "Trabalhamos com a filosofia de desperdício zero. Qualquer parte defeituosa é reciclada e reutilizada em outro projeto.",
    src: "/img/icones/sustentavel.svg",
  },
  {
    name: "Rastreador",
    desc: "Utilizamos o GPS da sua Bikcraft em conjunto com especialistas em segurança para efetuarmos a recuperação.",
    src: "/img/icones/rastreador.svg",
  },
  {
    name: "Segurança",
    desc: "Com o seguro Bikcraft você pode ficar tranquilo em saber que o seu dinheiro não será perdido em casos de roubo.",
    src: "/img/icones/seguro.svg",
  },
  {
    name: "Rapidez",
    desc: "A sua Bikcraft ficará pronta para uso no mesmo dia, caso você traga ela para ser reparada em uma das filiais.",
    src: "/img/icones/velocidade.svg",
  },
];

export default function Vantagens() {
  useSimpleAnime();
  return (
    <article className={style["vantagens-bg"]}>
      <div className={`container ${style["vantagens"]}`}>
        <h2 className="font-1-xxl cor-0 fadeInUp" data-anime="100">
          vantagens<span className="cor-p1">.</span>
        </h2>
        <VantagensList vantagens={vantagens} />
      </div>
    </article>
  );
}
