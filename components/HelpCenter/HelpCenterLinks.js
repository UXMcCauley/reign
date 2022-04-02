import React, {useState} from 'react';
import styles from "./HelpCenterLinks.module.scss"

function HelpCenterLinks(props) {
    const [state, setState] = useState("Questions")

    return (
        <div className={"helpCenterLinks"}>
            <div className={`${styles.link} ${state === "Questions" ? styles.active : null}`}
                 onClick={() => {
                     props.getState("Questions")
                     setState("Questions")
                 }}>
                Questions
            </div>
            <div
                className={`${styles.link} ${state === "Videos" ? styles.active : null}`}
                onClick={() => {
                    props.getState("Videos")
                    setState("Videos")
                }}>
                Videos
            </div>
            <div
                className={`${styles.link} ${state === "Submit a Ticket" ? styles.active : null}`}
                onClick={() => {
                    props.getState("Submit a Ticket")
                    setState("Submit a Ticket")
                }}>
                Submit a Ticket
            </div>

        </div>
    );
}

export default HelpCenterLinks;
