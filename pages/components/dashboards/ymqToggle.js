import styles from "./YMQToggle.module.scss"
import {useState} from "react";

export default function YMQToggle(props) {
    const [slidePosition, setSlidePosition] = useState("3px")
    const [active, setActive] = useState("y")

    return (
        <div className={styles.container}>
            <div className={styles.slider} style={{left: slidePosition}}/>
            <div onClick={() => {
                setActive("y")
                setSlidePosition("3px")
                props.getActive("Year")
            }} className={`${styles.y} ${active === "y" ? styles.active : ""}`}>Y</div>
            <div onClick={() => {
                setActive("m")
                setSlidePosition("28px")
                props.getActive("Month")
            }} className={`${styles.m} ${active === "m" ? styles.active : ""}`}>M</div>
            <div onClick={() => {
                setActive("q")
                setSlidePosition("49px")
                props.getActive("Quarter")
            }} className={`${styles.q} ${active === "q" ? styles.active : ""}`}>Q</div>
        </div>
    )
}