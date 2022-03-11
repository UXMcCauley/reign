import styles from "./styles/Buttons.module.scss"
import {MegaphoneSimple, Camera, ThumbsUp, ThumbsDown, DotsThree, SignOut, ArrowBendUpLeft} from "phosphor-react";

export function PrimaryButton({color, label, action, icon}) {
     const useIcon = () => {
         switch (icon) {
             case "Publish":
                 return <MegaphoneSimple size={20} color={"white"}/>
             case "LogOut":
                 return <SignOut size={20} color={"white"}/>
             case "Photos":
                 return <Camera size={20} color={"white"}/>
             case "Approve":
                 return <ThumbsUp size={20} color={"white"}/>
             case "ThumbsDown":
                 return <ThumbsDown size={20} color={"white"}/>
             case "Ellipses":
                 return <DotsThree size={20} color={"white"}/>
             case "Reply":
                 return <ArrowBendUpLeft size={20} color={"white"}/>
         }
     }

    return (<div className={`${styles.button} ${styles[color]}`} onClick={action}>
        <div className={styles.icon}>
            {useIcon()}
        </div>
        <div className={styles.label}>{label}</div>
    </div>)
}