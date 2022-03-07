import styles from "./styles/VendorTile.module.scss"

export default function VendorTile(props){
    return (
        <div className={styles.outerContainer} onClick={() => {alert("Download options coming soon.")}}>
            <div className={styles.imgContainer} style={{backgroundImage: `url(${props.img})`}}/>
        </div>
    )

}
