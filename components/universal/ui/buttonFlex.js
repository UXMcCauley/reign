import styles from "./styles/ButtonFlex.module.scss"

export default function ButtonFlex({children}){
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}
