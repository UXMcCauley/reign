import React from 'react';
import styles from "./SingleHelpItem.module.scss"

function SingleHelpItem(props) {

    const checkClass = (tag) => {
        let classType;
        switch (tag) {
            case "Feed":
                classType = styles.Feed
                break;
            case "Keycards":
                classType = styles.Keycards
                break;
            case "Dashboards":
                classType = styles.Dashboards
                break;
            case "Messaging":
                classType = styles.Messaging
                break;
            case "Employees":
                classType = styles.Employees
                break;
            case "Data":
                classType = styles.Data
                break;
            case "Scheduling":
                classType = styles.Scheduling
                break;
        }
        return classType
    }

    return (
        <div className={styles.container}>
            <div className={styles.question}>{props.question}</div>
            <div className={`${styles.tag} ${checkClass(props.tag)}`}>{props.tag}</div>
            <div className={styles.answer}>{props.answer}</div>
        </div>
    );
}

export default SingleHelpItem;
