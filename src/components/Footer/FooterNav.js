import Link from "next/link";
const links = [
  {
    name: "Bicicletas",
    url: "/bicicletas",
  },
  {
    name: "Seguros",
    url: "/seguros",
  },
  {
    name: "Contato",
    url: "/contato",
  },
  {
    name: "Termos e Condições",
    url: "/termos",
  },
];

export default function FooterNav() {
  return (
    <nav>
      <ul className="font-2-m cor-5">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
