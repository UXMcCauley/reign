import Head from 'next/head'
import ContentContainer from "../../components/universal/layout"
import {customTableStyles, keycardsTableColumns} from "../../lib/helpers";
import DataTable from "react-data-table-component";
import IconButton from "../../components/universal/ui/iconButton";
import ButtonFlex from "../../components/universal/ui/buttonFlex";
import styles from "../employees/styles/Employees.module.scss";
import {useState} from "react";

export default function AllKeycards({keycards}) {
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence - Keycards</title>
                <meta name="description" content="Keycards List"/>
            </Head>
            <ContentContainer>
                <ButtonFlex>
                    <IconButton icon={"eye"} label={"View all tasks"} size={30} link={"/keycards/tasks"}/>
                    <IconButton icon={"add"} label={"Add a new keycard"} size={30} link={"/keycards/add-new-keycard"}/>
                </ButtonFlex>
                <input type={"text"}
                       className={styles.searchField}
                       value={searchTerm}
                       placeholder={"Search keycards..."}
                       onChange={(e) => {
                           setSearchTerm(e.target.value)
                       }}/>
                <div className={styles.tableContainer}>
                    <DataTable
                        columns={keycardsTableColumns()}
                        data={keycards.filter((item) => {
                            if (searchTerm === "") {
                                return item;
                            } else if (
                                item.name.toLowerCase().includes(searchTerm.toLowerCase())
                            ) {
                                return item;
                            }
                        })}
                        theme="dark"
                        dense={false}
                        pagination
                        selectableRows
                        persistTableHead
                        customStyles={customTableStyles}
                    />
                </div>
            </ContentContainer>
        </>
    )
}

export async function getServerSideProps({req}) {
    const protocol = req.headers['x-forwarded-proto'] || 'http'
    const baseUrl = req ? `${protocol}://${req.headers.host}` : ''
    const res = await fetch(baseUrl + '/api/keycards')
    const data = await res.json()
    return { props: { keycards: data } }
}
