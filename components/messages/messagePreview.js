import styles from "./MessagePreview.module.scss"
import {truncateString} from "../../lib/helpers";
import {Flag, HandWaving} from "phosphor-react";

export default function MessagePreview(props) {
    return (
        <div className={`${styles.container} ${!props.read ? styles.unread : null}`} onClick={() => {
            props.getMessageContent({
                sender: props.sender,
                received: props.received,
                message: props.message,
                read: props.read
            })
        }}>
            <div className={styles.iconsContainer}>
                <div>
                    {props.urgent ?  <HandWaving size={20} color={"#bc1a5a"}/> : null}
                    {props.flagged ? <Flag size={20} color={"#56a8d7"}/> : null}
                </div>
            </div>
            <div className={styles.name}>{props.sender}</div>
            <div className={styles.date}>{props.received}</div>
            <div className={styles.preview}>{truncateString(props.message, 50)}</div>
        </div>
    )
}
