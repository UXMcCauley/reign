import {useEffect, useState} from "react";

function TopMetricYMQ({title, value, options, showSelect}) {
    const [selectOptions, setSelectOptions] = useState(["one", "two", "three"])
    const [selected, setSelected] = useState("")
    const [number, setNumber] = useState(value)
    useEffect(() => {
        if(options.length > 1){
            setSelected(options[0])
            setNumber(value)
            setSelectOptions(options)
        }
    },[])
    return (
        <div className={`flex flex-col align-middle text-center justify-center `}>
            <div className={"text-xs text-black text-center uppercase font-light self-center dark:text-white mb-2"}>{title}</div>
            <div className={"flex text-center flex-col align-middle justify-center"}>
                <div className={"text-4xl text-black text-center proportional-nums dark:text-white"}>{number !== undefined ? number.toLocaleString(undefined, {maximumFractionDigits: 2}) : null}</div>
                <div className={`self-center mt-3`}>
                    {showSelect === true ? <select
                        onChange={(e) => {
                            setSelected(e.target.value)
                            if (e.target.value === options[0]) {
                                setNumber(value)
                            } else if (e.target.value === options[1]) {
                                setNumber(value / 4)
                            } else if (e.target.value === options[2]) {
                                setNumber(value / 12)
                            }
                        }}
                        className={`${selectOptions.length > 0 ? "visible" : "hidden"} text-black py-1 rounded-full`}>
                        {options.map((option, i) => {
                            return <option key={i}>{option}</option>
                        })}
                    </select> : null}
                </div>
            </div>
        </div>
    );
}

export default TopMetricYMQ;
