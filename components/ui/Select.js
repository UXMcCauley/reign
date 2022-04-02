import {useEffect, useState} from "react";

export default function Select({options}) {
    const [value, setValue]= useState("Please select...")

    return (
            <select
                id="location"
                name="location"
                className="text-black mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md appearance-none clear-right"
                defaultValue={value}
                onChange={(e) => {
                    setValue(e.target.value)
                }}
            >
                {options.map((item, i) => {
                    return <option key={i}>{item}</option>
                })}

            </select>

    )
}
