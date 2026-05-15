"use client";
import BikeCard from "../BikeCard";
import styles from "./bikeList.module.css";
import useSimpleAnime from "@/hooks/useSimpleAnime";

const bikes = [
  {
    name: "Magic Might",
    price: 2499.0,
    image: "/img/bicicletas/magic-home.jpg",
    video: "/videos/magic-prev.mp4",
    href: "/bikes/magic-might",
    width: 920,
    height: 1040,
  },
  {
    name: "Nimbus Stark",
    price: 4999.0,
    image: "/img/bicicletas/nimbus-home.jpg",
    video: "/videos/nimbus-prev.mp4",
    href: "/bikes/nimbus-stark",
    width: 920,
    height: 1040,
  },
  {
    name: "Nebula Cosmic",
    price: 3999.0,
    image: "/img/bicicletas/nebula-home.jpg",
    video: "/videos/nebula-prev.mp4",
    href: "/bikes/nebula-cosmic",
    width: 920,
    height: 1040,
  },
];

export default function BikeList() {
  useSimpleAnime();
  return (
    <article className={styles["bicicletas-lista"]}>
      <h2 data-anime="200" className="container font-1-xxl fadeInUp">
        escolha a sua<span className="cor-p1">.</span>
      </h2>
      <ul>
        {bikes.map((bike, index) => (
          <BikeCard key={bike.name} {...bike} data-anime={200 + index * 150} />
        ))}
      </ul>
    </article>
  );
}
