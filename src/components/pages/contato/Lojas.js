"use client";

import Image from "next/image";
import useSimpleAnime from "@/hooks/useSimpleAnime";
import styles from "./lojas.module.css";

const lojas = [
  {
    name: "Rio de Janeiro",
    map: "/img/lojas/rj.jpg",
    address: ["Rua Ali Perto, 25", "Rio de Janeiro - RJ"],
    email: "rj@bikcraft.com",
    phone: "+55 21 9999-9999",
    alt: "mapa marcando o endereço em Rua Ali Perto, 25 - Rio de Janeiro - RJ",
  },
  {
    name: "São Paulo",
    map: "/img/lojas/sp.jpg",
    address: ["Rua Ali Perto, 25", "São Paulo - SP"],
    email: "sp@bikcraft.com",
    phone: "+55 11 9999-9999",
    alt: "mapa marcando o endereço em Rua Ali Perto, 25 - São Paulo - SP",
  },
];

export default function Lojas() {
  useSimpleAnime();

  return (
    <article className={`container ${styles.lojas}`}>
      <h2 className="font-1-xxl fadeInUp" data-anime="100">
        lojas locais<span className="cor-p1">.</span>
      </h2>

      {lojas.map((loja, index) => (
        <div
          key={loja.name}
          className={`${styles["lojas-item"]} fadeInUp`}
          data-anime={200 + index * 150}
        >
          <Image src={loja.map} alt={loja.alt} width={1120} height={680} />
          <div className={styles["lojas-conteudo"]}>
            <h3 className="font-1-xl">{loja.name}</h3>
            <div className={`${styles["lojas-dados"]} font-2-s cor-8`}>
              {loja.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className={`${styles["lojas-dados"]} font-2-s cor-8`}>
              <a href={`mailto:${loja.email}`}>{loja.email}</a>
              <a href={`tel:${loja.phone.replace(/\D/g, "")}`}>{loja.phone}</a>
            </div>
            <p className={`${styles["lojas-tempo"]} font-1-s`}>
              <Image
                src="/img/icones/horario.svg"
                alt=""
                width={20}
                height={20}
              />
              08-18h de seg à dom
            </p>
          </div>
        </div>
      ))}
    </article>
  );
}
