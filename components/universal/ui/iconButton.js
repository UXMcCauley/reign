import {PlusCircle, MinusCircle,} from "phosphor-react"
import Link from "next/link"
import styles from "./IconButton.module.scss"

// props (label, size, link)

export default function IconButton(props) {

    const getIcon = (icon) => {
        switch (icon) {
            case "add":
                return <PlusCircle size={props.size}/>
            case "minus":
                return <MinusCircle size={props.size}/>
        }
    }

    return (
        <Link href={props.link} passHref>
            <div className={styles.container}>
                <div className={styles.icon}>
                    {getIcon(props.icon)}
                </div>
                <div className={styles.label}>{props.label}</div>
            </div>
        </Link>
    )
}