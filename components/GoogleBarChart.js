import { Chart } from "react-google-charts";
import {useEffect, useState} from "react";

export function GoogleBarChart({data}) {
    const [colors, setColors] = useState("#000000")

    useEffect(() => {
        localStorage.getItem("theme") === 'dark' ? setColors("#ffffff") : setColors('#000000')
    },[])

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
            position: "bottom",
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
            chartType="BarChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );
}
