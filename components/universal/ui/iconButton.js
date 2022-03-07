import {PlusCircle, MinusCircle, Eye, Upload, Download} from "phosphor-react"
import Link from "next/link"
import styles from "./styles/IconButton.module.scss"

// props (label, size, link)

export default function IconButton(props) {

    const getIcon = (icon) => {
        switch (icon) {
            case "add":
                return <PlusCircle size={props.size}/>
            case "minus":
                return <MinusCircle size={props.size}/>
            case "eye":
                return <Eye size={props.size}/>
            case "upload":
                return <Upload size={props.size}/>
            case "download":
                return <Download size={props.size}/>
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
