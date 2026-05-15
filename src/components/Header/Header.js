import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles["header-bg"]}>
      <div className={`${styles.header} container`}>
        <Link href="/">
          <Image
            src="/img/bikcraft.svg"
            alt="Bikcraft Logo"
            width={132}
            height={32}
          />
        </Link>
        <nav>
          <ul className={`${styles["header-menu"]} font-1-m cor-0`}>
            <li>
              <Link href="/bicicletas">Bicicletas</Link>
            </li>
            <li>
              <Link href="/seguros">Seguros</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
