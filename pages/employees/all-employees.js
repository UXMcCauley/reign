import Head from 'next/head'
import ContentContainer from "../../components/universal/layout"
import DataTable from 'react-data-table-component';
import {employeeTableColumns} from "../../lib/helpers";
import styles from "./styles/Employees.module.scss"
import {useState} from "react";

const customStyles = {
    table: {
      style: {
          boxSizing: "border-box",
          width: "100%",
          backgroundColor: "transparent",
      }
    },
    rows: {
        style: {
            minHeight: '72px', // override the row height
            backgroundColor: "transparent",
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
            backgroundColor: "black",
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
            backgroundColor: "transparent",
        },
    },
};

export default function AllEmployees(props) {
    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence - Employees</title>
                <meta name="description" content="Employees"/>
            </Head>
            <ContentContainer>
                <div className={styles.tableContainer}>
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
