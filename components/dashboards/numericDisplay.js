import styles from "./styles/NumericDisplay.module.scss"
import YMQToggle from "./ymqToggle";
import {useState} from "react";

export default function NumericDisplay(props) {
    const [state, setState] = useState("Year")
    const getActive = (value) => {
        setState(value)
    }
    const evaluateNumber = () => {
        if (state === "Year") {
            return Math.round(props.number).toLocaleString("en-US")
        } else if (state === "Month") {
            return Math.round(props.number / 12).toLocaleString("en-US")
        } else {
            return Math.round(props.number / 4).toLocaleString("en-US")
        }
    }

    const checkInteraction = (value, selectType) => {
        switch (value) {
            case "select":
                return select(selectType)
            case "toggle":
                return <YMQToggle getActive={getActive}/>
            case "none":
                return
        }
    }

    const select = (check) => {
        switch (check) {
            case "ethnicity":
                return (
                    <select>
                        <option value={"All"}>All</option>
                        <option value={"Asian"}>Asian</option>
                        <option value={"Black"}>Black</option>
                        <option value={"Hispanic"}>Hispanic</option>
                        <option value={"White"}>White</option>
                    </select>
                )

            case "gender":
                return (
                    <select>
                        <option value={"All"}>All</option>
                        <option value={"Female"}>Asian</option>
                        <option value={"Male"}>Black</option>
                    </select>
                )
            case "keycard":
                return (
                    <select>
                        <option value={"All"}>All</option>
                        <option value={"Female"}>Residential Roofer</option>
                        <option value={"Carpenter"}>Carpenter</option>
                        <option value={"Concrete"}>Concrete</option>
                        <option value={"General Laborer"}>General Laborer</option>
                        <option value={"Male"}>Siding Installer</option>
                        <option value={"Siding Installer"}>Commercial Roofer</option>
                        <option value={"Painter"}>Painter</option>
                        <option value={"Flooring Installer"}>Flooring Installer</option>
                        <option value={"HVAC"}>HVAC</option>
                        <option value={"Manufacturing"}>Manufacturing</option>
                    </select>
                )
            case "age":
                return (
                    <select>
                        <option value={"All"}>All</option>
                        <option value={"18-24"}>18-24</option>
                        <option value={"25-34"}>25-34</option>
                        <option value={"35-44"}>35-44</option>
                        <option value={"45-54"}>45-54</option>
                        <option value={"55+"}>55+</option>
                    </select>
                )
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.number}>{props.isMoney === true ? "$" : null}{evaluateNumber()}</div>
            <div className={styles.label}>{state}</div>
            {
                checkInteraction(props.interaction, props.selectCategory)
            }

        </div>
    )
}
