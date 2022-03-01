import styles from "./styles/FeedActivityItem.module.scss"

export default function FeedActivityItem(props) {
    return (
        <div className={styles.container}>
            <div className={styles.avatar}>
                <img src={props.avatar} width={"44px"} height={"44px"} style={{borderRadius: "30px"}}/>
            </div>
            <div className={styles.textContent}>
                <div className={styles.nameAndTimeContainer}>
                    <div className={styles.name}>{props.name}</div>

                </div>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.time}>{props.time}</div>
            </div>

        </div>
    )
}