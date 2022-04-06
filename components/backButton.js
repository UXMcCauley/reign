import { useRouter } from 'next/router'
import {ArrowCircleLeft} from "phosphor-react";
import styles from "./ui/styles/IconButton.module.scss";

export default function BackButton() {
    const router = useRouter()

    return (
        <div className={styles.container} onClick={() => {router.back()}}>
            <div className={styles.icon}>
                <ArrowCircleLeft size={30}/>
            </div>
            <div className={styles.label}>Back</div>
        </div>
    )
}
