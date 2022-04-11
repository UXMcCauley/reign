import {useEffect, useState} from "react";

function TopMetricYMQ({title, value, type}) {
    const [number, setNumber] = useState(value)
    const [options, setOptions] = useState([])
    console.log(value[type])
    const findAverage = (data) => {
        let base = 0
        data.map(item => {
            base += item.averageWage
        })
        return base / data.length
    }

    useEffect(() => {
        if (type) {
            setNumber(findAverage(value[type]))
        } else {
            setNumber(value.allWages[0].averageWage)
        }

        if (type) {
            setOptions(value[type].map(opt => {
                return opt._id
            }))
        }


    }, [])

    return (
        <div className={`flex flex-col align-middle text-center justify-center `}>
            <div
                className={"text-sm text-black text-center uppercase font-light self-center dark:text-white mb-7"}>{title}</div>
            <div className={"flex text-center flex-col align-middle justify-center"}>
                <div
                    className={"text-4xl text-black text-center proportional-nums dark:text-white"}>{number !== undefined ? number.toLocaleString(undefined, {maximumFractionDigits: 2}) : null}</div>
                <div className={`self-center mt-6`}>
                    {options.length > 0 ? <select onChange={(e) => {
                        console.log(e.target.value)
                        value[type].filter(item => {
                            if(item._id === e.target.value){
                                 setNumber(item.averageWage)
                            }else if(e.target.value === "All"){
                                setNumber(findAverage(value[type]))
                            }

                        })
                    }}
                                                  className={"text-black rounded-full dark:bg-gray-800 dark:text-white"}>
                        <option value={"All"}>All</option>
                        {options.map((opt, i) =>
                            <option key={i} value={opt}>{opt}</option>)}
                    </select> : null}
                </div>
            </div>
        </div>
    );
}

export default TopMetricYMQ;
