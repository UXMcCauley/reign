import {useState} from "react";
import InequityGapTable from "./InequityGapTable";

export default function InequityGapFinder() {
    const [datasets, setDatasets] = useState([])
    const [gender, setGender] = useState("All")
    const [ethnicity, setEthnicity] = useState("All")
    const [age, setAge] = useState("All")

    const fetchEmployees = async () => {
        await fetch("/api/search/employees?age=" + age + "&gender=" + gender + "&ethnicity=" + ethnicity)
            .then(res => res.json())
            .then(res => {
                setDatasets(prevState => [...prevState, {
                    gender: gender,
                    ethnicity: ethnicity,
                    age: age,
                    employees: res.employees,
                    data: res.data[0]
                }])
            })
            .catch(e => console.warn(e))
    }
    return (
        <div>
            <div className={"flex w-full justify-start"}>
                <div>
                    <select onChange={(e) => {
                        setGender(e.target.value)
                    }} className={"text-black mr-5 rounded-full dark:bg-gray-800 dark:text-white"}>
                        <option value={"All"}>All</option>
                        <option value={"Male"}>Male</option>
                        <option value={"Female"}>Female</option>
                        <option value={"Other"}>Other</option>
                    </select>
                </div>
                <div>
                    <select onChange={(e) => {
                        setEthnicity(e.target.value)
                    }} className={"text-black mr-5 rounded-full dark:bg-gray-800 dark:text-white"}>
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
                    }} className={"text-black mr-5 rounded-full dark:bg-gray-800 dark:text-white"}>
                        <option value={"All"}>All</option>
                        <option value={"16-18"}>16-18</option>
                        <option value={"19-25"}>19-25</option>
                        <option value={"26-35"}>26-35</option>
                        <option value={"36-45"}>36-45</option>
                        <option value={"46-55"}>46-55</option>
                        <option value={"55+"}>56+</option>
                    </select>
                </div>
                <button onClick={() => {
                    fetchEmployees(age, gender, ethnicity)
                        .then(r => console.log(r))
                }} className={"bg-violet-700 pl-5 pr-5 rounded-full"}>
                    Add this dataset
                </button>
                <button onClick={() => {
                    setDatasets([])
                }} className={"bg-gray-700 pl-5 pr-5 rounded-full ml-2"}>
                    Clear table
                </button>

            </div>
            <InequityGapTable data={datasets}/>
        </div>
    )
}
