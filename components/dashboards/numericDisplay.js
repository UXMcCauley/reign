import styles from "./styles/NumericDisplay.module.scss"
import YMQToggle from "./ymqToggle";
import {useState} from "react";

export default function NumericDisplay(props) {
    const [state, setState] = useState("Year")
    const getActive = (value) => {
        setState(value)
    }
    const evaluateNumber = () => {
        if(state === "Year"){
            return Math.round(props.number).toLocaleString("en-US")
        }else if(state === "Month"){
            return Math.round(props.number / 12).toLocaleString("en-US")
        }else{
            return Math.round(props.number / 4).toLocaleString("en-US")
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.number}>{props.isMoney === true ? "$" : null}{evaluateNumber()}</div>
            <div className={styles.label}>{state}</div>
            {
                props.toggle === false ? null : <YMQToggle getActive={getActive}/>
            }

        </div>
    )
}