import Image from "next/image";
import styles from "./footer.module.css";
import SocialLinks from "./SocialLinks";
import FooterNav from "./FooterNav";

export default function Footer() {
  return (
    <footer className={styles["footer-bg"]}>
      <div className={`${styles.footer} container`}>
        <Image
          src="/img/bikcraft.svg"
          alt="bikcraft logo"
          width={132}
          height={32}
        />
        <div className={styles["footer-contato"]}>
          <h3 className="font-2-l-b cor-0">Contato</h3>
          <ul className="font-2-m cor-5">
            <li>
              <a href="tel:+5521999999999">+55 21 99999-9999</a>
            </li>
            <li>
              <a href="mailto:contato@bikcraft.com">contato@bikcraft.com</a>
            </li>
            <li>Av. Paulista, 2100</li>
            <li>São Paulo, SP</li>
          </ul>
          <div className={styles["footer-redes"]}>
            <SocialLinks />
          </div>
        </div>
        <div className={styles["footer-informacoes"]}>
          <h3 className="font-2-l-b cor-0">Informações</h3>
          <FooterNav />
        </div>
        <p className={`${styles["footer-copy"]} font-2-m cor-6`}>
          {new Date().getFullYear()} Bikcraft © Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
