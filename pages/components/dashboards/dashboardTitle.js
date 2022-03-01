import {Gauge, ChartPieSlice, Fingerprint, HandsClapping, Money } from "phosphor-react"
import styles from "./styles/DashboardTitle.module.scss"

export default function DashboardTitle(props) {

    const getIcon = (value) => {
        switch (value) {
            case "Gauge":
                return <Gauge size={42} className={styles.icon}/>
            case "ChartPieSlice":
                return <ChartPieSlice size={42} className={styles.icon}/>
            case "Fingerprint":
                return <Fingerprint size={42} className={styles.icon}/>
            case "HandsClapping":
                return <HandsClapping size={42} className={styles.icon}/>
            case "Money":
                return <Money size={42} className={styles.icon}/>
        }
    }

    return (
        <div className={styles.container}>
            {getIcon(props.icon)}
            <div className={styles.title}>
                <h1>{props.label}</h1>
            </div>
        </div>
    )
}