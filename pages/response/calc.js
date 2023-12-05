import styles from './Calc.module.css';

export default function Calc() {
    return (
        <div className={styles.message}>
            <textarea className={styles.message_text} />
            <button className={styles.message_send}>전송</button>
        </div>
    );
}
