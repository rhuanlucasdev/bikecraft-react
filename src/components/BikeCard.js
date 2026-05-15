import Image from "next/image";
import Link from "next/link";

export default function BikeCard({ name, price, image, href, width, height }) {
  return (
    <li>
      <Link href={href}>
        <Image src={image} alt={name} width={width} height={height} />
        <h3 className="font-1-xl">{name}</h3>
        <span className="font-2-m cor-8">R$ {price.toFixed(2)}</span>
      </Link>
    </li>
  );
}
