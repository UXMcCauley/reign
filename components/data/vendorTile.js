export default function VendorTile(props){
    return (
        <div className={"outerContainer"} onClick={() => {alert("Download options coming soon.")}}>
            <div className={"imgContainer"} style={{backgroundImage: `url(${props.img})`}}/>
        </div>
    )

}
