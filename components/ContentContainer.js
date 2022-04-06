import Header from "./header"
import MainNavigation from "./MainNavigation";
import {useState} from "react";
export default function ContentContainer({children}) {
    const [state, setState] = useState(false)
    return (
        <div className={`contentContainer ${state ? "theme--dark" : "theme--default"}`}>
            {/*<button onClick={() => {*/}
            {/*    setState(!state)*/}
            {/*}}>Toggle Dark</button>*/}
            <Header/>
            <div className={"content"}>
                <MainNavigation/>
                <div className={"innerContent"}>
                    {children}
                </div>
            </div>
        </div>
    )
}

