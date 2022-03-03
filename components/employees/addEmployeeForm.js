import {useState} from "react";
import styles from "./AddEmployeeForm.module.scss"
import {useRouter} from "next/router";

export default function AddEmployeeForm(props){
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
        <div className={`${styles.container} ${props.open === "open" ? styles.open : "closed"}`}>
            <a onClick={() => {
                setOpen("closed")
            }}>Cancel</a>
            <h1>Add an Employee</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
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
                    createdAt: "date"
                })
                router.reload(window.location.pathname)
            }}>
                <label>First Name</label>
                <input type={"text"} id={"firstName"} onChange={(e) => {
                    setFirstName(e.target.value)
                }} required={true}/>
                <label>Last Name</label>
                <input type={"text"} id={"lastName"} onChange={(e) => {
                    setLastName(e.target.value)
                }}/>
                <label>Email Address</label>
                <input type={"email"} id={"email"} onChange={(e) => {
                    setEmail(e.target.value)
                }}/>
                <label>Cell Phone</label>
                <input type={"text"} id={"phone"} onChange={(e) => {
                    setCell(e.target.value)
                }}/>
                <label>Home Phone (optional)</label>
                <input type={"text"} id={"phone"} onChange={(e) => {
                    setHome(e.target.value)
                }}/>
                <label>Birthdate</label>
                <input type={"date"} id={"phone"} onChange={(e) => {
                    setBirthdate(e.target.value)
                }}/>
                <label>Street Address</label>
                <input id={"text"} onChange={(e) => {
                    setStreet(e.target.value)
                }}/>
                <label>City</label>
                <input id={"text"} onChange={(e) => {
                    setCity(e.target.value)
                }}/>
                <label>State</label>
                <input id={"text"} onChange={(e) => {
                    setState(e.target.value)
                }}/>
                <label>Zip Code</label>
                <input id={"text"} onChange={(e) => {
                    setZip(e.target.value)
                }}/>
                <label>Gender</label>
                <select id={"Preferred Pronouns"} onChange={(e) => {
                    setGender(e.target.value)
                }}>
                    <option value={"Female"}>Female</option>
                    <option value={"Male"}>Male</option>
                    <option value={"Other"}>Other</option>
                </select>
                <label>Preferred Pronouns</label>
                <select id={"Preferred Pronouns"} onChange={(e) => {
                    setPronouns(e.target.value)
                }}>
                    <option value={"She/Her"}>She/Her</option>
                    <option value={"He/Him"}>He/Him</option>
                    <option value={"They/Them"}>They/Them</option>
                </select>
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}