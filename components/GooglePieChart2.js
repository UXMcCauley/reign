import {Chart} from "react-google-charts";
import {useEffect, useState} from "react";

export function GooglePieChart2({data}) {
    const [colors, setColors] = useState("#000000")

    useEffect(() => {
        localStorage.getItem("theme") === 'dark' ? setColors("#ffffff") : setColors('#000000')
    },[])

    const options = {
        pieHole: 0.4,
        stroke: "black",
        border: "none",
        pieSliceBorderColor: "black",
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
        is3D: false,
        backgroundColor: "transparent",
        chartArea: {width: "80%", height: "80%"},
        legend: {
            textStyle: {
                color: colors,
                fontSize: 12
            },
        }
    };
    return (
        <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );
}
