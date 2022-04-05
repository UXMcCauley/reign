import {useState} from "react";

export default function InequityGapFinder() {
    const [datasets, setDatasets] = useState([])
    const [gender, setGender] = useState("")
    const [ethnicity, setEthnicity] = useState("")
    const [age, setAge] = useState("")

    const fetchEmployees = async (body) => {
        const data = await fetch("/api/search/employees", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        const fetched = data.json()
        console.log(fetched)
        return fetched
    }

    const addDataset = () => {
        setDatasets(prevState => [...prevState, {
            gender: gender,
            ethnicity: ethnicity,
            age: age
        }])
    }
    return (
        <div>
            <div className={"flex w-full justify-start"}>
                <div>
                    <select onChange={(e) => {
                        setGender(e.target.value)
                    }} className={"text-black mr-5"}>
                        <option value={"All"}>All</option>
                        <option value={"Male"}>Male</option>
                        <option value={"Female"}>Female</option>
                        <option value={"Other"}>Other</option>
                    </select>
                </div>
                <div>
                    <select onChange={(e) => {
                        setEthnicity(e.target.value)
                    }} className={"text-black mr-5"}>
                        <option value={"All"}>All</option>
                        <option value={"African-American"}>African-American</option>
                        <option value={"Asian"}>Asian</option>
                        <option value={"Hispanic"}>Hispanic</option>
                        <option value={"White"}>White</option>
                    </select>
                </div>
                <div>
                    <select onChange={(e) => {
                        setAge(e.target.value)
                    }} className={"text-black mr-5"}>
                        <option value={"All"}>All</option>
                        <option value={"16-18"}>16-18</option>
                        <option value={"19-25"}>19-25</option>
                        <option value={"26-35"}>26-35</option>
                        <option value={"36-45"}>36-45</option>
                        <option value={"46-55"}>46-55</option>
                        <option value={"55+"}>55+</option>
                    </select>
                </div>
                <button onClick={() => {
                    fetchEmployees({
                        gender: gender,
                        age: age,
                        ethnicity: ethnicity,
                        orgId: "61bf60ecddd910d9c0a18df1"
                    })
                }} className={"bg-violet-700 pl-3 pr-3 rounded-xl"}>
                    Add this dataset
                </button>
            </div>
            <div>

            </div>
        </div>
    )
}
