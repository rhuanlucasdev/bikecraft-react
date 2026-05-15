"use client";
import { useState } from "react";
import useSimpleAnime from "@/hooks/useSimpleAnime";
import styles from "./perguntas.module.css";

export default function PerguntasList({ perguntas }) {
  const [openIndex, setOpenIndex] = useState(null);
  useSimpleAnime();

  return (
    <dl>
      {perguntas.map((pergunta, index) => (
        <div
          key={pergunta.id || index}
          data-anime={200 + index * 100}
          className="fadeInUp"
        >
          <dt>
            <button
              className="font-1-m-b"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
            >
              {pergunta.ask}
            </button>
          </dt>
          {openIndex === index && (
            <dd className={`font-2-s cor-9 ${styles.ativa}`}>
              {pergunta.answer}
            </dd>
          )}
        </div>
      ))}
    </dl>
  );
}
