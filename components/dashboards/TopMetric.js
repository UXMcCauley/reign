import Select from "../ui/Select";
import {useState} from "react";

function TopMetric({title, value, subtitle, options}) {
    const [selected, setSelected] = useState(options[0])
    const [number, setNumber] = useState(value)
    return (
        <div className={`flex flex-col align-middle text-center justify-center `}>
            <div className={"text-xs text-black text-center uppercase font-light self-center dark:text-white"}>{title}</div>
            <div className={"flex text-center flex-col align-middle justify-center"}>
                <div className={"text-4xl text-black text-center proportional-nums dark:text-white"}>{number.toLocaleString(undefined, {maximumFractionDigits: 2})}</div>
                {/*<div className={`text-black text-center dark:text-white ${subtitle.length > 0 ? "visible" : "hidden"}`}>{selected}</div>*/}
                <div className={`self-center`}>
                    <select
                        onChange={(e) => {
                            setSelected(e.target.value)
                            if(e.target.value === options[0]){
                                setNumber(value)
                            }else if (e.target.value === options[1]){
                                setNumber(value/4)
                            }else if (e.target.value === options[2]){
                                setNumber(value/12)
                            }
                        }}
                        className={`${options.length > 0 ? "visible" : "hidden"} text-black py-1 rounded-full`}>
                        {options.map((option, i) => {
                            return <option key={i}>{option}</option>
                        })}
                    </select>
                </div>
            </div>
        </div>
    );
}

export default TopMetric;
