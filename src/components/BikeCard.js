import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BikeCard({
  name,
  price,
  image,
  video,
  href,
  width,
  height,
  "data-anime": dataAnime,
}) {
  const [hover, setHover] = useState(false);
  return (
    <li
      className="fadeInScale hoverLift"
      data-anime={dataAnime}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link href={href}>
        <div className="media">
          {!hover && (
            <Image src={image} alt={name} width={width} height={height} />
          )}

          {hover && (
            <video
              className="video"
              src={video}
              autoPlay
              muted
              loop
              playsInline
            />
          )}
        </div>
        <h3 className="font-1-xl">{name}</h3>
        <span className="font-2-m cor-8">R$ {price.toFixed(2)}</span>
      </Link>
    </li>
  );
}
