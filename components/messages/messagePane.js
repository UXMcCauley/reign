import styles from "./MessagePane.module.scss"
import ButtonFlex from "../universal/ui/buttonFlex";
import {Flag, Archive, ArrowFatLinesLeft} from "phosphor-react";

export default function MessagePane(props) {
    return (
        <div className={styles.container}>
            <ButtonFlex>
                <div>
                    <div className={styles.date}>
                        {props.received}
                    </div>
                    <div className={styles.sender}>
                        From: {props.sender}
                    </div>
                </div>
                <div className={styles.icons}>
                    <ArrowFatLinesLeft size={30}/>
                    <Flag size={30}/>
                    <Archive size={30}/>
                </div>
            </ButtonFlex>
            <div>
            </div>
            <hr/>
            <div className={styles.message}>{props.message}</div>
        </div>
    )
}
