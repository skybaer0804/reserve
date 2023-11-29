import styles from "./Button.module.css";

export default function Button({ childern }) {
  return <div className={styles.button}>{childern}</div>;
}
