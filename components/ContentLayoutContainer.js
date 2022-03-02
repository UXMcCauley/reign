import styles from "./ContentLayoutContainer.module.scss"

export default function ContentLayoutContainer({children}) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}