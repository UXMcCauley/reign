import Head from 'next/head'
import ContentContainer from "../../components/universal/layout"
import DataTable from 'react-data-table-component';
import {employeeTableColumns} from "../../lib/helpers";
import IconButton from "../../components/universal/ui/iconButton";
import styles from "./styles/Employees.module.scss"
import ButtonFlex from "../../components/universal/ui/buttonFlex";
import {useState} from "react";

const customStyles = {
    table: {
      style: {
          width: "100%"
      }
    },
    rows: {
        style: {
            minHeight: '72px', // override the row height
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
            backgroundColor: "black"
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
        },
    },
};

export default function Employees(props) {
    const [open, setOpen] = useState("closed")
    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence - Employees</title>
                <meta name="description" content="Employees"/>
            </Head>
            <ContentContainer>
                <div className={styles.tableContainer}>
                    <ButtonFlex>
                    <IconButton icon={"download"} label={"Download Employees CSV"} size={30}
                                link={"/employees/add-employee"}/>
                    <button onClick={() => {
                        setOpen(open === "closed" ? "open" : "closed")
                    }}>Open Me
                    </button>
                </ButtonFlex>
                    <DataTable
                        columns={employeeTableColumns()}
                        data={props.data}
                        theme="dark"
                        pagination
                        selectableRows
                        persistTableHead
                        customStyles={customStyles}
                    />
                </div>

            </ContentContainer>
        </>
    )
}

export async function getServerSideProps({req}) {
    const protocol = req.headers['x-forwarded-proto'] || 'http'
    const baseUrl = req ? `${protocol}://${req.headers.host}` : ''
    const res = await fetch(baseUrl + '/api/employees')
    const data = await res.json()
    return {props: {data}}
}
