import {useState} from "react"
import {useRouter} from "next/router"

// my component imports
import {PrimaryButton} from "./Buttons";
import Logo from "./logo"
import NotificationBell from "./notificationBell"

export default function Header() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [initials, setInitials] = useState("AM")
    const router = useRouter()
    return (
        <div className={"headerContainer"}>
            <Logo/>
            <div className={"rightModule"}><NotificationBell alert={false}/>
                <div className={"avatar"}>
                    {initials}
                </div>
                <div className={"username"}>
                    {firstName} {lastName}
                </div>
                <div className={"button"}>
                    <PrimaryButton label={"Log out"} color={"pink"} action={() => {router.push("/sign-in")}} icon={"LogOut"}/>
                </div>
            </div>
        </div>
    )
}
