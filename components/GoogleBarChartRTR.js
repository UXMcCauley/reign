import { Chart } from "react-google-charts";
import { useState} from "react";

export function GoogleBarChartRTR({data}) {
    const [colors, setColors] = useState("#000000")


    const options = {
        title: "",
        chartArea: { width: "70%", height: "84%" },
        colors: ["#810ab0", "#e30070",  "#00557f"],
        hAxis: {
            minValue: 0,
            textStyle: {
                color: colors,
                fontSize: 12
            },
        },
        vAxis: {
            title: "Group",
            textStyle: {
                color: colors,
                fontSize: 12
            },
        },
        legend: {
            position: "top",
            textStyle: {
                color: colors,
                fontSize: 14,
                bold: true,
                italic: false
            }
        },
        backgroundColor: "transparent",
    };

    return (
        <Chart
            chartType="ColumnChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );
}
