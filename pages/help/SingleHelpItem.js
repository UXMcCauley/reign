import React from 'react';

function SingleHelpItem(props) {

    const checkClass = (tag) => {
        let classType;
        switch (tag) {
            case "Feed":
                classType = "Feed"
                break;
            case "Keycards":
                classType = "Keycards"
                break;
            case "Dashboards":
                classType = "Dashboards"
                break;
            case "Messaging":
                classType = "Messaging"
                break;
            case "Employees":
                classType = "Employees"
                break;
            case "Data":
                classType = "Data"
                break;
            case "Scheduling":
                classType = "Scheduling"
                break;
        }
        return classType
    }

    return (
        <div className={"helpContainer"}>
            <div className={"question"}>{props.question}</div>
            <div className={`tag ${checkClass(props.tag)}`}>{props.tag}</div>
            <div className={"answer"}>{props.answer}</div>
        </div>
    );
}

export default SingleHelpItem;
