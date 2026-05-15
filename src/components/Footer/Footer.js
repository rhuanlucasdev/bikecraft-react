import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
import SocialLinks from "./SocialLinks";
import FooterNav from "./FooterNav";

export default function Footer() {
  return (
    <footer className={styles["footer-bg"]}>
      <div className={`${styles.footer} container`}>
        <div data-anime="100" className="fadeInLeft">
          <Image
            src="/img/bikcraft.svg"
            alt="bikcraft logo"
            width={132}
            height={32}
          />
        </div>
        <div
          data-anime="200"
          className={`${styles["footer-contato"]} fadeInUp`}
        >
          <h3 className="font-2-l-b cor-0">Contato</h3>
          <ul className="font-2-m cor-5">
            <li>
              <Link href="tel:+5521999999999">+55 21 99999-9999</Link>
            </li>
            <li>
              <Link href="mailto:contato@bikcraft.com">
                contato@bikcraft.com
              </Link>
            </li>
            <li>Av. Paulista, 2100</li>
            <li>São Paulo, SP</li>
          </ul>
          <div
            data-anime="300"
            className={`${styles["footer-redes"]} fadeInUp`}
          >
            <SocialLinks />
          </div>
        </div>
        <div
          data-anime="300"
          className={`${styles["footer-informacoes"]} fadeInUp`}
        >
          <h3 className="font-2-l-b cor-0">Informações</h3>
          <FooterNav />
        </div>
        <p
          data-anime="400"
          className={`${styles["footer-copy"]} font-2-m cor-6 fadeInUp`}
        >
          {new Date().getFullYear()} Bikcraft © Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
