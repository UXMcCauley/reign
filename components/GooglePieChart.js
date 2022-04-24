import {Chart} from "react-google-charts";
import {useState} from "react";

function GooglePieChart({data, label, title, selectOptions, showSelect}) {
    const [selected, setSelected] = useState([])
    const chartEvents = [
        {
            eventName: "ready",
            callback: ({chartWrapper, google}) => {
                const chart = chartWrapper.getChart();
                const handler = function (e) {
                    const parts = e.targetID.split("#");
                    if (parts.indexOf("slice") > -1) {
                        let idx = parts[1];
                        idx = parseInt(idx) + 1;
                        setSelected(data[idx])
                    }
                };
                google.visualization.events.addListener(
                    chartWrapper.getChart(),
                    "click",
                    handler
                );
            }
        }
    ]

    const options = {
        backgroundColor: "transparent",
        pieHole: 0.4,
        stroke: "black",
        border: "none",
        legend: "none",
        chartArea: {'width': '97%', 'height': '97%'},
        width: 330,
        height: 330,
        colors: [
            "#e12162",
            "#bc1a5a",
            "#9829ab",
            "#5528ab",
            "#282bab",
            "#2769aa",
            "#56a8d7",
            "#56d5b8",
            "#60c186",
        ],
        pieSliceBorderColor: "black"
    };

    const makeSelectOptions = (selectOptions) => {
        return (
            <select className={"w-1/2 m-auto mt-5 text-black rounded-full dark:bg-gray-800 dark:text-white"}>
                {selectOptions.map((option, i) => {
                    return <option key={i}>{option}</option>
                } )}
            </select>
        )
    }

    return (
        <div className={"flex flex-col"}>
            <div className={"text-black dark:text-white text-l uppercase font-light w-full text-center mt-14 mb-4"}>{title}</div>
            <div className={`relative`}>
                <div className={`text-black dark:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
                    <div className={`text-center text-sm`}>{selected[0]}</div>
                    <div className={`text-center`}>{selected[1]} {selected.length > 0 ? label : null}</div>
                </div>
                <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                    chartEvents={chartEvents}
                />
            </div>
            {showSelect ? makeSelectOptions(selectOptions) : null}
        </div>
    );
}

export default GooglePieChart;
