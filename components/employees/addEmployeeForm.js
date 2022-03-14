import {useState} from "react";
import styles from "./AddEmployeeForm.module.scss"
import {useRouter} from "next/router";
import {PrimaryButton} from "../universal/ui/Buttons";

export default function AddEmployeeForm(props) {
    // console.log(props)
    const router = useRouter()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [cell, setCell] = useState("")
    const [home, setHome] = useState("")
    const [birthdate, setBirthdate] = useState("")
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zip, setZip] = useState("")
    const [gender, setGender] = useState("")
    const [pronouns, setPronouns] = useState("")
    const [orgId, setOrgId] = useState("61bf60ecddd910d9c0a18df1")
    const [overlay, setOverlay] = useState(false)

    const createEmployee = async (body) => {
        await fetch("/api/add/addEmployee", {
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
        <div className={styles.container}>
            <div className={`${styles.overlayContainer} ${overlay === true ? styles.open : null}`}>
                <div className={styles.overlayContentContainer}>
                    <h1 style={{width: "100%", textAlign: "center"}}>employee added!</h1>
                    <p style={{fontWeight: "100", padding: 20}}><strong
                        style={{color: "yellowgreen"}}>{firstName} {lastName}</strong> has been added to your
                        organization. You can close this window to add
                        another employee, or click the button to see <strong
                            style={{color: "yellowgreen"}}>{firstName}</strong> in your employee list.</p>
                    <PrimaryButton color={"blue"} label={"View all employees"} disabled={false} action={() => {
                        router.push("/employees/all-employees")
                    }}/>
                </div>
            </div>
            <h1>Add an Employee</h1>
            <form autoComplete="off" onSubmit={(e) => {
                e.preventDefault()
            }}>
                <div className={styles.fieldContainer}>
                    <label>Organization ID</label>
                    <input type={"text"} id={"orgId"} value={props.currentOrg} disabled={true}/>
                </div>
                <div className={styles.formLineContainer}>
                    <div className={styles.fieldContainer}>
                        <label>First Name</label>
                        <input type={"text"} value={firstName} id={"firstName"} onChange={(e) => {
                            setFirstName(e.target.value)
                        }} required={true}/>
                    </div>

                    <div className={styles.fieldContainer}>
                        <label>Last Name</label>
                        <input type={"text"} value={lastName} id={"lastName"} onChange={(e) => {
                            setLastName(e.target.value)
                        }}/>
                    </div>
                </div>
                <div className={styles.formLineContainer}>
                    <div className={styles.fieldContainer}>
                        <label>Birthdate</label>
                        <input type={"date"} id={"phone"} value={birthdate} onChange={(e) => {
                            setBirthdate(e.target.value)
                        }}/>
                    </div>
                    <div className={styles.fieldContainer}>
                        <label>Gender</label>
                        <select id={"Preferred Pronouns"} onChange={(e) => {
                            setGender(e.target.value)
                        }}>
                            <option value={"Female"}>Female</option>
                            <option value={"Male"}>Male</option>
                            <option value={"Other"}>Other</option>
                        </select>
                    </div>
                    <div className={styles.fieldContainer}>
                        <label>Preferred Pronouns</label>
                        <select id={"Preferred Pronouns"} onChange={(e) => {
                            setPronouns(e.target.value)
                        }}>
                            <option value={"She/Her"}>She/Her</option>
                            <option value={"He/Him"}>He/Him</option>
                            <option value={"They/Them"}>They/Them</option>
                        </select>
                    </div>
                </div>
                <div className={styles.formLineContainer}>
                    <div className={styles.fieldContainer}>
                        <label>Email Address</label>
                        <input type={"email"} id={"email"} onChange={(e) => {
                            setEmail(e.target.value)
                        }}/>
                    </div>
                    <div className={styles.fieldContainer}>
                        <label>Cell Phone</label>
                        <input type={"text"} id={"phone"} onChange={(e) => {
                            setCell(e.target.value)
                        }}/>
                    </div>
                    <div className={styles.fieldContainer}>
                        <label>Home Phone (optional)</label>
                        <input type={"text"} id={"phone"} onChange={(e) => {
                            setHome(e.target.value)
                        }}/>
                    </div>

                </div>
                <div className={styles.formLineContainer}>
                    <div className={styles.fieldContainer}>
                        <label>Street Address</label>
                        <input id={"text"} onChange={(e) => {
                            setStreet(e.target.value)
                        }}/>
                    </div>
                    <div className={styles.fieldContainer}>
                        <label>City</label>
                        <input id={"text"} onChange={(e) => {
                            setCity(e.target.value)
                        }}/>
                    </div>
                    <div className={styles.fieldContainer}>
                        <label>State</label>
                        <input id={"text"} onChange={(e) => {
                            setState(e.target.value)
                        }}/>
                    </div>
                    <div className={styles.fieldContainer}>
                        <label>Zip Code</label>
                        <input id={"text"} onChange={(e) => {
                            setZip(e.target.value)
                        }}/>
                    </div>
                </div>
                <PrimaryButton disabled={firstName === "" ? true : false}
                               label={"Add employee"}
                               color={"blue"}
                               action={() => {
                                   createEmployee({
                                       firstName: firstName,
                                       lastName: lastName,
                                       email: email,
                                       cell: cell,
                                       home: home,
                                       birthdate: birthdate,
                                       street: street,
                                       city: city,
                                       state: state,
                                       zipCode: zip,
                                       gender: gender,
                                       pronouns: pronouns,
                                       organization: orgId,
                                       createdAt: new Date()
                                   })
                                   setOverlay(true)
                               }}/>
            </form>

        </div>
    )
}
