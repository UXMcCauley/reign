import {useEffect, useState} from "react";

function TopMetricYMQ({employees, title, type}) {
    const [value, setValue] = useState(employees.length)
    const [options, setOptions] = useState([])
    const makeSelect = () => {
        return (
           <select className={"rounded-full dark:bg-gray-800 text-black dark:text-white"}
           onChange={(e) => {
               countOccurrences(e.target.value)
           }}
           >
               <option value={"All"}>All</option>
               {options.map((option, i) => {
                   return <option key={i} value={option}>{option}</option>
               })}
           </select>
        )
    }

    const countOccurrences = (value) => {
        let tempOccurrences = employees.filter((a) => {
            return a[type] === value
        })

        if(value === "All"){
            setValue(employees.length)
        }else{
            setValue(tempOccurrences.length)
        }


        console.log(tempOccurrences)
    }

    useEffect(() => {
        let tempOptions = []
        for(let i = 0; i < employees.length; i++){
            if(tempOptions.indexOf(employees[i][type]) < 0){
                tempOptions.push(employees[i][type])
            }
        }
        setOptions(tempOptions)
    }, [])

    return (
        <div className={`flex flex-col align-middle text-center justify-center `}>
            <div
                className={"text-sm text-black text-center uppercase font-light self-center dark:text-white mb-7"}>{title}</div>
            <div className={"flex text-center flex-col align-middle justify-center"}>
                <div
                    className={"text-4xl text-black text-center proportional-nums dark:text-white"}>{value}</div>
                <div className={`self-center mt-6`}>
                    {type ? makeSelect() : null}
                </div>
            </div>
        </div>
    );
}

export default TopMetricYMQ;
