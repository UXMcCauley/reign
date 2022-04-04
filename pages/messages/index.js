import Head from 'next/head'
import {useEffect, useState} from "react";
import SingleColumnLayout from "../../components/layouts/SingleColumnLayout";
import MessageList from "./components/MessageList";
import {DotsThree} from "phosphor-react";

export default function Index() {
    const [activeMessage, setActiveMessage] = useState({})
    const [theme, setTheme] = useState("light")
    const handleMessageChange = (message) => {
        setActiveMessage(message)
    }
    useEffect(() => {
        console.log(theme)
        setTheme(localStorage.getItem("theme"))

    }, [])
    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence - Messages</title>
                <meta name="description" content="Messages"/>
            </Head>
            <SingleColumnLayout>
                <div className={"flex"}>
                    <div className={"w-1/6 h-screen border-r border-gray-200 dark:border-gray-800 pr-4"}>
                        <h1 className={"pb-0 text-black dark:text-white"}>Messages</h1>
                        <MessageList handleMessageChange={handleMessageChange}/>
                    </div>
                    <div className={"relative w-3/6 h-screen border-r border-gray-200 dark:border-gray-800"}>
                        <div className={"absolute flex h-20 w-full align-middle justify-between bg-gray-200 dark:bg-gray-800 shadow-xl"}>
                            <h1 className={"self-center pb-0 text-black dark:text-white m-0 ml-5"}>{activeMessage.name}</h1>
                            <div className={"self-center mr-5"}>
                                <DotsThree color={theme === "dark" ? "white" : "black"} size={30}/>
                            </div>
                        </div>
                        <div className={"absolute flex bottom-12 right-0 left-0 m-6"}>
                            <div className={"flex-1"}>
                                <input className={"w-full rounded-md border-gray-200 dark:border-gray-800 text-black dark:text-white"} type={"text"}/>
                            </div>
                            <div className={"flex-none w-32 ml-10"}>
                                <button className={"w-full bg-violet-700 h-full rounded-md"} type={"submit"}>Send</button>
                            </div>
                        </div>
                    </div>
                    <div className={"w-2/6 h-screen pl-4"}>
                        <h1 className={"pb-0 text-black dark:text-white"}>Details</h1>
                    </div>
                </div>
            </SingleColumnLayout>
        </>
    )
}
