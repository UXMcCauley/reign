import Header from "./header"
import styles from "./styles/ContentContainer.module.scss"
import VerticalIconMenu from "./ui/verticalIconMenu";

export default function ContentContainer({children}) {

    return (
        <div className={styles.contentContainer}>
            <Header/>

            <div className={styles.content}>
                <VerticalIconMenu size={28}/>
                <div className={styles.innerContent}>
                    {children}
                </div>
            </div>
        </div>
    )
}

