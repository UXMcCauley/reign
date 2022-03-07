
import styles from "./styles/PageTitle.module.scss"

export default function PageTitle(props) {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>{props.label}</h1>
            </div>
        </div>
    )
}
