import Header from "./header"
import styles from "./styles/Layout.module.scss"
import VerticalIconMenu from "./ui/verticalIconMenu";

export function ContentContainer({children}) {

    return (
        <div className={styles.contentContainer}>
            <div className={styles.content}>
                <VerticalIconMenu size={28}/>
                <div style={{width: "100%"}}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default function Layout({children}) {
    return (
        <div className={styles.layout}>
            <Header/>
            <main>
                {children}
            </main>
        </div>
    )
}
