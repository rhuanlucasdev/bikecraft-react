"use client";
import Image from "next/image";
import styles from "./parceiros.module.css";
import useSimpleAnime from "@/hooks/useSimpleAnime";

const partners = [
  {
    name: "Caravan",
    src: "/img/parceiros/caravan.svg",
    width: 140,
    height: 38,
  },
  { name: "Ranek", src: "/img/parceiros/ranek.svg", width: 149, height: 36 },
  { name: "Handel", src: "/img/parceiros/handel.svg", width: 140, height: 50 },
  { name: "Dogs", src: "/img/parceiros/dogs.svg", width: 152, height: 39 },
  {
    name: "LeScone",
    src: "/img/parceiros/lescone.svg",
    width: 208,
    height: 41,
  },
  {
    name: "FlexBlog",
    src: "/img/parceiros/flexblog.svg",
    width: 165,
    height: 38,
  },
  {
    name: "Wildbeast",
    src: "/img/parceiros/wildbeast.svg",
    width: 196,
    height: 34,
  },
  {
    name: "Surfbot",
    src: "/img/parceiros/surfbot.svg",
    width: 200,
    height: 49,
  },
];

export default function Parceiros() {
  useSimpleAnime();
  return (
    <section className={styles["parceiros"]}>
      <h2 data-anime="100" className="container font-1-xxl fadeInRight">
        nossos parceiros<span className="cor-p1">.</span>
      </h2>
      <ul>
        {partners.map((p, i) => (
          <li key={p.name} data-anime={i * 150} className="fadeInUp">
            <Image src={p.src} alt={p.name} width={p.width} height={p.height} />
          </li>
        ))}
      </ul>
    </section>
  );
}
