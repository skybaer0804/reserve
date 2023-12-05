import styles from './Media.module.css';
import { useMediaQuery } from 'react-responsive';

export default function Media() {
    const mobile = useMediaQuery({ maxDeviceWidth: 767 });

    const tablet = useMediaQuery({ minDeviceWidth: 768 });

    const desktop = useMediaQuery({ minDeviceWidth: 992 });

    return (
        <>
            <div className={styles.div_1}></div>
            <div className={styles.div_2}></div>
            <div className={styles.div_3}></div>
            <div className={styles.div_4}></div>
            <div className={styles.div_5}></div>
            <div className={styles.div_6}></div>
        </>
    );
}
