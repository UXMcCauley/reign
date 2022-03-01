import styles from "./styles/NewsAndEvents.module.scss"

export default function NewsAndEvents(props) {
    return (
        <div className={styles.container}>
            <h1>News and Events</h1>
            <hr/>
            <div className={styles.newsItem}>
                News Item
            </div>
        </div>
    )
}
