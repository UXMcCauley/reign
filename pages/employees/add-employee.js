import styles from "./AddNewEmployee.module.scss"
import Head from "next/head";
import DashboardTitle from "../../components/dashboards/dashboardTitle";
import Layout, {ContentContainer} from "../../components/universal/ui/layout";
import ContentLayoutContainer from "../../components/ContentLayoutContainer";
import BackButton from "../../components/universal/ui/backButton";
import {useState} from "react";

export default function AddEmployee(){

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const createEmployee = async (body) => {
        await fetch("/api/addEmployee", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <Layout>
            <Head>
                <title>REIGN - Add a New Employee</title>
                <meta name="description" content="REIGN - Add a New Employee"/>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>
            <DashboardTitle label={"Add a New Employee"} icon={"Person"}/>
            <ContentContainer>
                <ContentLayoutContainer>
                    <div className={styles.container}>
                        <BackButton/>
                        <div>
                            <p>{firstName}</p>
                            <p>{lastName}</p>
                            <p>{email}</p>
                            <p>{phone}</p>
                        </div>
                        <div>
                            <form onSubmit={(e) => {
                                e.preventDefault()
                                createEmployee({
                                    first_name: firstName,
                                    last_name: lastName,
                                    email: email,
                                    phone: phone,
                                    createdAt: "date"
                                })
                            }}>
                                <input onChange={(e) => {
                                    setFirstName(e.target.value)
                                }}/>
                                <input onChange={(e) => {
                                    setLastName(e.target.value)
                                }}/>
                                <input onChange={(e) => {
                                    setEmail(e.target.value)
                                }}/>
                                <input onChange={(e) => {
                                    setPhone(e.target.value)
                                }}/>
                                <button type="submit">Submit</button>
                            </form>

                        </div>
                    </div>
                </ContentLayoutContainer>
            </ContentContainer>
        </Layout>
    )
}