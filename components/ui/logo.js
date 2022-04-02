import Image from "next/image"
import styles from "./styles/Logo.module.scss"
import colors from "../../lib/colors";

export default function Logo() {
    return (
        <div className={styles.logoContainer}>
            <div className={styles.logo}>
                <Image
                    src="/img/Reignlogo.png"
                    alt="Mindful Measures Logo"
                    width={40}
                    height={40}/>
            </div>
            <div className={styles.title}>
                REIGN <span style={{color: colors.gray}}>Workforce Intelligence</span>
            </div>
        </div>
    )
}
