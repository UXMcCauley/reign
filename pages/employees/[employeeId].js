import {useRouter} from "next/router";
import ContentContainer from "../../components/universal/layout";
import {useEffect, useState} from "react";
import absoluteUrl from "next-absolute-url";
import styles from "./styles/EmployeeId.module.scss"
import {Download} from "phosphor-react";

function EmployeeId({employee, reqData}) {
    console.log(reqData)
    const router = useRouter()
    const empId = router.query.employeeId
    const [employeeData, setEmployeeData] = useState({
        employee:
            {
                birthdate: "",
                cell: "",
                city: "",
                email: "",
                firstName: "",
                gender: "",
                home: "",
                lastName: "",
                organization: "",
                password: "",
                pronouns: "",
                state: "",
                street: "",
                timestamp: "",
                username: "",
                zipCode: "",
                _id: ""
            }
    })

    const getActiveEmployee = async () => {
        // fetch employee timecard data after click
        const {origin} = absoluteUrl()
        const apiURL = `${origin}/api/one/employee?employeeId=${empId}`
        const data = await fetch(apiURL)
        data.json()
            .then(res => {
                setEmployeeData(res)
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getActiveEmployee().then(res => console.log(res))
    }, [])

    return (
        <ContentContainer>
            {employeeData.employee._id}
            {employeeData.employee.firstName}
            {employeeData.employee.lastName}
            {employeeData.employee.cell}
            {employeeData.employee.home}

            {employeeData.employee.gender}
            {employeeData.employee.street}
            {employeeData.employee.city}
            {employeeData.employee.state}
            {employeeData.employee.zipCode}

            <div className={styles.setFlex}>
                {/*Contact Row*/}
                <div className={styles.row}>
                    <div className={styles.flexBox}>
                        Avatar
                    </div>
                    <div className={styles.flexBox}>
                        {employeeData.employee.firstName} {employeeData.employee.lastName}
                    </div>
                    <div className={styles.flexBox}>
                        {employeeData.employee.birthdate}
                    </div>
                    <div className={styles.flexBox}>
                        {employeeData.employee.cell} | {employeeData.employee.home}
                    </div>
                    <div className={styles.flexBox}>
                        {employeeData.employee.email}
                    </div>
                    <div className={styles.flexBox}>
                        <select>
                            <option>Select a project...</option>
                        </select>
                    </div>

                    <div className={styles.flexBox}>
                        <Download size={30} color={"white"}/>
                    </div>
                </div>
                {/*Bio Row*/}
                <div className={styles.row}>
                    <div className={styles.flexBox}>
                        Bio
                    </div>
                    <div className={styles.flexBox}>
                        Education
                    </div>
                    <div className={styles.flexBox}>
                        Certifications
                    </div>
                </div>
                {/*Badges Row*/}
                <div className={styles.row}>
                    <div className={styles.flexBox}>
                        Badges
                    </div>
                </div>
                <div className={styles.row}>

                </div>
                <div className={styles.row}>

                </div>
                <div className={styles.row}>

                </div>
                <div className={styles.row}>

                </div>
                <div className={styles.row}>

                </div>
            </div>
        </ContentContainer>
    );
}

export default EmployeeId;
