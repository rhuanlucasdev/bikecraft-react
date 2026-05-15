"use client";
import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useSimpleAnime from "@/hooks/useSimpleAnime";

export default function Header() {
  useSimpleAnime();

  const pathname = usePathname();
  const isActive = (path) => pathname.startsWith(path);
  const links = [
    { href: "/bicicletas", label: "Bicicletas" },
    { href: "/seguros", label: "Seguros" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <header className={styles["header-bg"]}>
      <div className={`${styles.header} container`}>
        <div data-anime="100" className="fadeInLeft">
          <Link href="/">
            <Image
              src="/img/bikcraft.svg"
              alt="Bikcraft Logo"
              width={132}
              height={32}
            />
          </Link>
        </div>
        <nav data-anime="200" className="fadeInRight">
          <ul className={`${styles["header-menu"]} font-1-m cor-0`}>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${styles.link} ${
                    isActive(link.href) ? styles.linkActive : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
