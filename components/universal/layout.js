import Header from "./header"
import styles from "./styles/ContentContainer.module.scss"
import MainNavigation from "./ui/MainNavigation";

export default function ContentContainer({children}) {
    return (
        <div className={styles.contentContainer}>
            <Header/>
            <div className={styles.content}>
                    <MainNavigation/>
                <div className={styles.innerContent}>
                    {children}
                </div>
            </div>
        </div>
    )
}

