"use client";
import Image from "next/image";
import useSimpleAnime from "@/hooks/useSimpleAnime";

export default function VantagensList({ vantagens }) {
  useSimpleAnime();
  return (
    <ul>
      {vantagens.map((vantagem, index) => (
        <li key={vantagem} data-anime={200 + index * 100} className="fadeInUp">
          <Image
            src={vantagem.src}
            alt={vantagem.name}
            width={32}
            height={32}
          />
          <h3 className="font-1-l cor-0">{vantagem.name}</h3>
          <p className="font-2-s cor-5">{vantagem.desc}</p>
        </li>
      ))}
    </ul>
  );
}
