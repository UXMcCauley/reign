import {useState} from "react";
import styles from "../../../components/employees/AddEmployeeForm.module.scss"
import {useRouter} from "next/router";
import {PrimaryButton} from "../../../components/ui/Buttons";
import faker from "@faker-js/faker";

export default function AddEmployeeForm(props) {
    const fakeFirstName = faker.name.firstName()
    const fakeLastName = faker.name.lastName()
    const fakeEmail = faker.internet.email()
    const fakeCell = faker.phone.phoneNumber("(414) ###-####")
    const fakeHome = faker.phone.phoneNumber("(262) ###-####")
    const fakeBirthdate = faker.date.between('1959-01-01', '2004-01-01')
    const fakeStreet = faker.address.streetAddress()
    const fakeCity = faker.address.city()
    const fakeState = faker.address.state()
    const fakeZip = faker.address.zipCode("53###")
    const fakeGender = faker.helpers.randomize(["Male", "Female", "Other"])
    const fakePronouns = faker.helpers.randomize(["He/him", "She/her", "They/them"])
    const fakeStartDate = faker.date.between('2016-01-01', '2022-04-01')
    const fakeUsername = faker.internet.userName()
    const fakePassword = faker.internet.password()
    const fakeBio = faker.lorem.paragraphs(2)
    const fakeKpi = faker.datatype.number({min: 1.8, max: 3.5, precision: 0.01})
    const fakePerformance = faker.datatype.number({min: 4, max: 10, precision: 0.01})
    const fakeWage = faker.datatype.number({min: 18, max: 28, precision: 0.01})
    const fakeRole = faker.helpers.randomize(["Carpenter", "Roofer", "Concrete", "HVAC", "Manufacturing", "Siding", "Administrative"])
    const fakeAvatar = faker.image.avatar()
    const fakeAttendance = faker.datatype.number({min: 83, max: 100, precision: 0.1})
    const fakeEthnicity = faker.helpers.randomize(["African-American", "Asian", "Hispanic", "White"])
    // console.log(props)

    const router = useRouter()

    const [firstName, setFirstName] = useState(fakeFirstName)
    const [lastName, setLastName] = useState(fakeLastName)
    const [email, setEmail] = useState(fakeEmail)
    const [cell, setCell] = useState(fakeCell)
    const [home, setHome] = useState(fakeHome)
    const [birthdate, setBirthdate] = useState(fakeBirthdate)
    const [street, setStreet] = useState(fakeStreet)
    const [city, setCity] = useState(fakeCity)
    const [state, setState] = useState(fakeState)
    const [zip, setZip] = useState(fakeZip)
    const [gender, setGender] = useState(fakeGender)
    const [pronouns, setPronouns] = useState(fakePronouns)
    const [startDate, setStartDate] = useState(fakeStartDate)
    const [orgId, setOrgId] = useState("61bf60ecddd910d9c0a18df1")
    const [username, setUsername] = useState(fakeUsername)
    const [password, setPassword] = useState(fakePassword)
    const [highSchool, setHighSchool] = useState(fakeCity + " High School")
    const [college, setCollege] = useState(fakeState + " Community College")
    const [bio, setBio] = useState(fakeBio)
    const [kpi, setKpi] = useState(fakeKpi)
    const [performance, setPerformance] = useState(fakePerformance)
    const [wage, setWage] = useState(fakeWage)
    const [role, setRole] = useState(fakeRole)
    const [avatar, setAvatar] = useState(fakeAvatar)
    const [attendance, setAttendance] = useState(fakeAttendance)
    const [ethnicity, setEthnicity] = useState(fakeEthnicity)

    // const formFields = [["firstName"], "lastName", "email", 'cell', "home", "birthdate", "street", "city", "state", "zip", "gender", "pronouns", "startDate", "orgId", "username", "password", "highSchool", "college", "bio"]
    const formFields = [
        ["firstName", firstName],
        ["lastName", lastName],
        ["email", email],
        ["cell", cell],
        ["home", home],
        ["birthdate", birthdate],
        ["street", street],
        ["city", city],
        ["state", state],
        ["zip", zip],
        ["gender", gender],
        ["pronouns", pronouns],
        ["orgId", orgId],
        ["username", username],
        ["password", password],
        ["highSchool", highSchool],
        ["college", college],
        ["bio", bio],
        ["kpi", kpi],
        ["performance", performance],
        ["wage", wage],
        ["role", role],
        ["avatar", avatar],
        ["attendance", attendance],
        ["ethnicity", ethnicity]
    ]

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
            <h1>Add an Employee</h1>
            <form>
                <PrimaryButton disabled={firstName === ""}
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
                                       createdAt: new Date(),
                                       startDate: startDate,
                                       username: username,
                                       password: password,
                                       highSchool: highSchool,
                                       college: college,
                                       bio: bio,
                                       kpi: kpi,
                                       performance: performance,
                                       wage: wage,
                                       role: role,
                                       avatar: avatar,
                                       attendance: attendance,
                                       ethnicity: ethnicity
                                   })
                                   setOverlay(true)
                                   window.location.reload()
                               }}/>
                {formFields.map((field, i) => {
                    return (
                        <div key={i}>
                            <label htmlFor={field[0]}>{field[0]}</label>
                            <input id={field[0]} type={"text"} value={field[1]}/>
                        </div>
                    )
                })}

            </form>
        </div>
    )
}
