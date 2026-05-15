import BikeCard from "../BikeCard";
import styles from "./bikeList.module.css";

const bikes = [
  {
    name: "Magic Might",
    price: 2499.0,
    image: "/img/bicicletas/magic-home.jpg",
    href: "/bikes/magic-might",
    width: 920,
    height: 1040,
  },
  {
    name: "Nimbus Stark",
    price: 4999.0,
    image: "/img/bicicletas/nimbus-home.jpg",
    href: "/bikes/nimbus-stark",
    width: 920,
    height: 1040,
  },
  {
    name: "Nebula Cosmic",
    price: 3999.0,
    image: "/img/bicicletas/nebula-home.jpg",
    href: "/bikes/nebula-cosmic",
    width: 920,
    height: 1040,
  },
];

export default function BikeList() {
  return (
    <article className={styles["bicicletas-lista"]}>
      <h2 className="container font-1-xxl">
        escolha a sua<span className="cor-p1">.</span>
      </h2>
      <ul>
        {bikes.map((bike) => (
          <BikeCard key={bike.name} {...bike} />
        ))}
      </ul>
    </article>
  );
}
