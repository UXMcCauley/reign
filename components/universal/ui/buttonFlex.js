import styles from "./ButtonFlex.module.scss"

export default function ButtonFlex({children}){
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}