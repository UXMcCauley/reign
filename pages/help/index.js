import Head from 'next/head'
import ContentContainer from "../../components/universal/layout"
import SingleHelpItem from "../../components/HelpCenter/SingleHelpItem";
import HelpCenterLinks from "../../components/HelpCenter/HelpCenterLinks";
import styles from "./HelpCenter.module.scss"
import {useState} from "react";
import {Button} from "@mui/material";

export default function HelpCenter(props) {
    const [state, setState] = useState("Questions")
    const [name, setName] = useState("")
    const [topic, setTopic] = useState("")
    const [message, setMessage] = useState("")
    const getState = (value) => {
        return setState(value)
    }
    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence - Help</title>
                <meta name="description" content=" Help Center"/>
            </Head>
            <ContentContainer>
                <h1 className={styles.h1}>{state}</h1>
                <div className={styles.container}>
                    <HelpCenterLinks getState={getState}/>
                    <div className={`${styles.innerContent} ${state === "Questions" ? styles.open : null}`}>
                        {
                            props.qna.records.map(q => {
                                return <SingleHelpItem key={q.id}
                                                       question={q.fields.Question}
                                                       tag={q.fields.Category}
                                                       answer={q.fields.Answer}/>
                            })
                        }
                    </div>
                    <div className={`${styles.innerContent} ${state === "Videos" ? styles.open : null}`}>
                        Tutorial Videos
                    </div>
                    <div className={`${styles.innerContent} ${state === "Submit a Ticket" ? styles.open : null} ${styles.form}`}>

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
                </div>
            </ContentContainer>
        </>
    )
}

export async function getServerSideProps() {
    // set up variables
    const url = "https://api.airtable.com/v0/"
    const app = "apppbpS0rK10adQYh/"
    const key = "?api_key=keyYCtVdqu5KWRkCr&view="

    // fetch data
    const questions = await fetch(url + app + "HelpCenter" + key)

    // cast data to json
    const qna = await questions.json()

    // return data as component props on render
    return {props: {qna}}
}
