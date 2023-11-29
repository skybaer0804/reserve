import ButtonLink from "./ButtonLInk";
import styles from "./Header.module.css";

export default function Header({ type, title, count = 0 }) {
  return (
    <div>
      <ButtonLink className={styles.button} href="/">
        +reserve
      </ButtonLink>
      <div>{title}</div>
      {type === "list" && count && <p>{count}</p>}
      <ButtonLink className={styles.button} href="/">
        X
      </ButtonLink>
    </div>
  );
}
