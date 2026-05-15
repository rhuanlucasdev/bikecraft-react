import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    name: "instagram",
    url: "https://www.instagram.com/bikcraft",
    icon: "/img/redes/instagram.svg",
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/bikcraft",
    icon: "/img/redes/facebook.svg",
  },
  {
    name: "youtube",
    url: "https://www.youtube.com/bikcraft",
    icon: "/img/redes/youtube.svg",
  },
];

export default function SocialLinks() {
  return (
    <>
      {socials.map((social) => (
        <Link
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={social.icon}
            alt={`${social.name}`}
            width={32}
            height={32}
          />
        </Link>
      ))}
    </>
  );
}
