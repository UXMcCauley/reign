import Image from "next/image"
import Link from "next/link";
import styles from "./styles/CurrentUser.module.scss"

export default function CurrentUser() {
    return (
        <div>

                <Image className={styles.avatar}
                       src="/batman_hero_avatar_comics-512.webp"
                       alt="Mindful Measures Logo"
                       width={40}
                       height={40}
                />

        </div>
    )
}