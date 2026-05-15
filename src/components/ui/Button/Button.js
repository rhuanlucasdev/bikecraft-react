import Link from "next/link";
import styles from "./button.module.css";
export default function Button({
  children,
  href,
  variant,
  arrow = false,
  className = "",
  ...props
}) {
  const buttonClasses = `
        ${styles.button}
        ${variant ? styles[variant] : ""}
        ${arrow ? styles.arrow : ""}
        ${className}
    `;
  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}
