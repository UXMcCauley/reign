import Image from "next/image"
import styles from "./styles/Logo.module.scss"

export default function Logo() {
    return (
        <div className={styles.logoContainer}>
            <div className={styles.logo}>

                    <Image
                        src="/MM-LOGO-SVG-GREEN.png"
                        alt="Mindful Measures Logo"
                        width={40}
                        height={40}/>

            </div>
            <div className={styles.title}>
                REIGN Workforce Analytics
            </div>
        </div>
    )
}