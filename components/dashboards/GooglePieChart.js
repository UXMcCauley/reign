import {Chart} from "react-google-charts";
import {useState} from "react";

function GooglePieChart({data, label, title}) {
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
        width: 400,
        height: 400,
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
    return (
        <div className={"pieChartContainer"}>
            <div className="chartTitle">{title}</div>
            <div style={{position: "relative"}}>
                <div className={"labelContainer"}>
                    <div className={"top"}>{selected[0]}</div>
                    <div className={"bottom"}>{selected[1]} {selected.length > 0 ? label : null}</div>
                </div>
                <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                    chartEvents={chartEvents}
                /></div>
        </div>
    );
}

export default GooglePieChart;
