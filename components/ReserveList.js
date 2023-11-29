import { useEffect, useState } from "react";
import styles from "./ReserveList.module.css";

export default function ReserveList({ className = "", reserveList }) {
  return (
    <ul className={`${styles.movieList} ${className}`}>
      {reserveList &&
        reserveList.map((reserve) => (
          <li key={reserve.RS_SEQ}>
            <Link href={`/reserve/${reserve.RS_SEQ}`}>
              <div className={styles.posterContainer}>reserve item content</div>
            </Link>
          </li>
        ))}
    </ul>
  );
}
