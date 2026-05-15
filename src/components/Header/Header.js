import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles["header-bg"]}>
      <div className={`${styles.header} container`}>
        <a href="/">
          <Image
            src="/img/bikcraft.svg"
            alt="Bikcraft Logo"
            width={132}
            height={32}
          />
        </a>
        <nav>
          <ul className={`${styles["header-menu"]} font-1-m cor-0`}>
            <li>
              <a href="/bicicletas">Bicicletas</a>
            </li>
            <li>
              <a href="/seguros">Seguros</a>
            </li>
            <li>
              <a href="/contato">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
