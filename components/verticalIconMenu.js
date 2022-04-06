import styles from "./ui/styles/VerticalIconMenu.module.scss"
import Link from "next/link"
import {useRouter} from "next/router";

export default function VerticalIconMenu({links, sub, isMain}) {
    const router = useRouter()
    return (
        <div className={`
        ${styles.container} 
        ${sub === true ? styles.sub : null } 
        ${isMain === true ? styles.isMain : null }
        ${links.length === 0 ? styles.hideMe : null}
        `}>
            {links.map((link, i) => {
                return (
                    <Link key={i} href={link.path} passHref>
                        <div className={`${styles.link} ${router.pathname === link.path ? styles.active : ''} `}>
                            <div className={styles.label}>{link.label}</div>
                        </div>
                    </Link>
                )
            })}

        </div>
    )
}
