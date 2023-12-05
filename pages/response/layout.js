import styles from './Layout.module.css';

export default function Layout() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>Header</div>
            <div className={styles.main}>Main</div>
            <div className={styles.aside}>Aside</div>
            <div className={styles.footer}>Footer</div>
        </div>
    );
}
