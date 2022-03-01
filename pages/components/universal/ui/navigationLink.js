import styles from "./styles/NavigationLink.module.scss"
import {useRouter} from "next/router"

export default function NavigationLink(props) {
    const router = useRouter()
    return (
        <div className={`${styles.link} ${router.pathname === props.link ? styles.active : ''}`}>
            {props.alert ? <div className={styles.alert}/> : null}
            <a href={props.link}>{props.label}</a>
        </div>
    )
}