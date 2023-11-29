import Image from "next/image";
import ButtonLink from "./ButtonLink";
import styles from "./Header.module.css";
import Button from "./Button";

export default function Header({ type, title, count = 0 }) {
  return (
    <div className={styles.header}>
      <ButtonLink href="/">
        <Image src="/images/add.svg" width={25} height={25} alt="add" />
        New Reservation
      </ButtonLink>
      <div className={styles.title}>
        <div>{title}</div>
        {type === "list" && <div className={styles.count}>{count}</div>}
      </div>
      <Image src="/images/close.svg" width={25} height={25} alt="close" />
    </div>
  );
}
