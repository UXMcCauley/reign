import Head from 'next/head'
import ContentContainer from "../../components/universal/layout"
import styles from "./HelpCenter.module.scss";
import {Button} from "@mui/material";
import {useState} from "react";

export default function SubmitRequestForm() {
    const [name, setName] = useState("")
    const [topic, setTopic] = useState("")
    const [message, setMessage] = useState("")
    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence</title>
                <meta name="description" content="Submit request form"/>
            </Head>
            <ContentContainer>
                <div
                    className={`${styles.innerContent} ${styles.form}`}>
                    <input type={"text"}
                           placeholder={"Your name..."}
                           value={name}
                           onChange={(event) => {
                               setName(event.target.value)
                           }}/>
                    <input type={"text"}
                           placeholder={"Topic of your request..."}
                           value={topic}
                           onChange={(event) => {
                               setTopic(event.target.value)
                           }}/>
                    <textarea
                        placeholder={"Type a detailed description of your request..."}
                        value={message}
                        onChange={(event) => {
                            setMessage(event.target.value)
                        }}/>
                    <div className={styles.button}>
                        <Button>Submit</Button>
                    </div>

                </div>


            </ContentContainer>
        </>
    )
}
