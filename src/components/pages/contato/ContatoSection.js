"use client";

import Link from "next/link";
import useSimpleAnime from "@/hooks/useSimpleAnime";
import styles from "./contatosection.module.css";
import SocialLinks from "@/components/Footer/SocialLinks";
import ContatoForm from "./ContatoForm";
import Lojas from "./Lojas";

export default function ContatoSection() {
  useSimpleAnime();

  return (
    <main className={styles["contato-bg"]}>
      <div className="titulo-bg">
        <div className="titulo container">
          <p className="font-2-l-b cor-5 fadeInLeft" data-anime="100">
            Respostas em até 24h
          </p>
          <h1 className="font-1-xxl cor-0 fadeInRight" data-anime="200">
            nosso contato<span className="cor-p1">.</span>
          </h1>
        </div>
      </div>
      <div className={`${styles["contato"]} container`}>
        <section
          className={`${styles["contato-dados"]} fadeInLeft`}
          data-anime="300"
          aria-label="Endereco"
        >
          <h2 className="font-1-m cor-0">Loja Online</h2>
          <div className={`${styles["contato-endereco"]} font-2-s cor-4`}>
            <p>Av. Paulista, 2100</p>
            <p>São Paulo, SP</p>
            <p>Brasil - America do Sul</p>
          </div>
          <address className={`${styles["contato-meios"]} font-2-s cor-4`}>
            <Link href="mailto:contato@bikcraft.com">contato@bikcraft.com</Link>
            <Link href="mailto:assistencia@bikcraft.com">
              assistencia@bikcraft.com
            </Link>
            <Link href="tel:+5521999999999">+55 21 99999-9999</Link>
          </address>
          <div className={styles["contato-redes"]}>
            <SocialLinks variant="gold" />
          </div>
        </section>
        <ContatoForm />
      </div>
      <Lojas />
    </main>
  );
}
