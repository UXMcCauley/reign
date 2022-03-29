import {useState} from "react";
import Image from "next/image"
import styles from "./styles/DashPreview.module.scss"
import {Star} from "phosphor-react";
import Link from "next/link";

function DashPreview({label, link, active}) {
    const [star, setStar] = useState(active)
    return (
        <div className={styles.container}>
            <Link href={link} passHref>
                <a>
                    <Image alt={"placeholder"}
                           src={"/img/hard-hat-reign-poster.png"}
                           width={220}
                           height={180}/>
                </a>
            </Link>
            <div className={styles.titleContainer}>
                <Link href={link} passHref>
                    <a>
                        <div>
                            {label}
                        </div>
                    </a>
                </Link>
                <div>
                    <Star size={22} color={star ? "yellow" : "#6a6a6a"} onClick={() => {
                        setStar(!star)
                    }}/>
                </div>

            </div>

        </div>
    );
}

export default DashPreview;
