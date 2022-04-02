import React from 'react';

function EmployeeCompareLine({selectedEmployees, line}) {
    let symbol = "="
    let color = "bg-green-700"
    if(parseFloat(selectedEmployees[0][line]) > parseFloat(selectedEmployees[1][line])){
        symbol = ">"
        color = "bg-pink-700"
    } else if (parseFloat(selectedEmployees[0][line]) < parseFloat(selectedEmployees[1][line])){
        symbol = "<"
        color= "bg-violet-700"
    }else {
        symbol = "="
        color= "bg-green-700"
    }

    return (
        <div className={"w-full p-3 text-center border-b border-gray-700"}>
            <div className={`w-full text-black dark:text-white`}><h2 className={`uppercase font-light p-3`}>{line}</h2></div>
            <div className={`flex`}>
                <div className={`flex w-2/5 p-2 align-middle justify-center ${line === "name" ? "bg-pink-700 rounded-2xl" : null}`}>
                    <div
                        className={"self-center text-white"}>{selectedEmployees.length === 2 ? selectedEmployees[0][line] : null}</div>
                </div>
                <div className={`flex w-1/5 p-2 align-middle justify-center text-center `}>
                    <div
                        className={`rounded-full w-8 p-1 self-center justify-center ${line === "name" ? "hidden" : "visible"} ${color}`}>{symbol}</div>
                </div>
                <div className={`flex w-2/5 p-2 text-center align-middle justify-center  ${line === "name" ? "bg-violet-700 rounded-2xl" : null}`}>
                    <div
                        className={"self-center text-white"}>{selectedEmployees.length === 2 ? selectedEmployees[1][line] : null}</div>
                </div>
            </div>
        </div>
    );
}

export default EmployeeCompareLine;
