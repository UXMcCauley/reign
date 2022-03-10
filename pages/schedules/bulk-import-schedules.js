import Head from 'next/head'
import ContentContainer from "../../components/universal/layout"
import DataTable from "react-data-table-component";
import {customTableStyles, scheduleUploadTableColumns} from "../../lib/helpers";
import {useState} from "react";
import styles from "./styles/BulkImportSchedules.module.scss"

export default function BulkImportSchedules() {
    const [tableData, setTableData] = useState({shifts: []})

    const handleCSVUpload = async (e) => {
        e.preventDefault()

        let jsonObjectTemp = {}
        let headRows = []
        let shifts = []

        const reader = new FileReader()

        reader.onload = async (e) => {

            // split into array by new line
            const text = (e.target.result.split("\r"))

            // get column names from first array item
            text[0].split(",").map(item => {
                item !== "" ? headRows.push(item.toLowerCase()) : null
            })

            jsonObjectTemp.heads = headRows

            // loop through the rest of the array and push to shifts
            // remove the return markup and delete empty cells
            for (let i = 1; i < text.length; i++) {
                let tempArr = []
                const arr = text[i].split(",")
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k] !== "") {
                        tempArr.push(arr[k])
                    }
                }

                // push each shift entry to the array
                if (tempArr[0] !== " ") {
                    shifts.push({
                        "name": tempArr[0].replace("\n", ""),
                        "date": tempArr[1],
                        "start": tempArr[2],
                        "end": tempArr[3]
                    })
                }

            }

            jsonObjectTemp.shifts = shifts
            console.log(jsonObjectTemp)
            setTableData({shifts: jsonObjectTemp.shifts})

        };
        reader.readAsText(e.target.files[0])
    }
    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence</title>
                <meta name="description" content="Bulk Import Schedules"/>
            </Head>
            <ContentContainer>
                <label className={styles.label}>
                    Upload schedule CSV
                    <input className={styles.fileInput}
                           type="file"
                           onChange={(e) => handleCSVUpload(e)}/>
                </label>
                <DataTable
                    columns={scheduleUploadTableColumns()}
                    data={tableData.shifts}
                    theme="dark"
                    dense={false}
                    pagination
                    selectableRows
                    persistTableHead
                    customStyles={customTableStyles}
                />
            </ContentContainer>
        </>
    )
}
