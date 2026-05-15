import Button from "../ui/Button/Button";
import styles from "./seguros.module.css";

export default function SegurosCard({
  title,
  price,
  benefits,
  highlight,
  link,
  className = "",
  ...props
}) {
  return (
    <div className={`${styles["seguros-item"]} ${className}`.trim()} {...props}>
      <h3 className={highlight ? "font-1-xl cor-p1" : "font-1-xl cor-6"}>
        {title}
      </h3>
      <span className="font-1-xl cor-0">
        R$ {price} <span className="font-1-xs cor-6">mensal</span>
      </span>
      <ul className="font-2-m cor-0">
        {benefits.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <Button href={link} variant={highlight ? "primary" : "secondary"}>
        Inscreva-se
      </Button>
    </div>
  );
}
