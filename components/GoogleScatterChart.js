import React from "react";
import {Chart} from "react-google-charts";
import faker from "@faker-js/faker";

const fakeData = (title) => {
    return [
        title,
        faker.datatype.number({min: 6, max: 10, precision: 0.1}),
        faker.datatype.number({min: 6, max: 10, precision: 0.1}),
        faker.datatype.number({min: 6, max: 10, precision: 0.1})
    ]
}


export function GoogleScatterChart({labels, height}) {
    const data = [
        labels,
        fakeData("Carpenter"),
        fakeData("Comm.Roofer"),
        fakeData("Res.Roofer"),
        fakeData("Painter"),
        fakeData("HVAC"),
        fakeData("Flooring"),
        fakeData("Siding"),
        fakeData("Carpenter"),
        fakeData("Manufacturer"),
        fakeData("Gen.Laborer"),
    ];

    const options = {
        title: "",
        titleTextStyle: {color: '#ffffff'},
        // horizontal axis
        hAxis: {
            textStyle: {
                color: '#ffffff',
                fontSize: 12
            },
            slantedText: false,
            minTextSpacing: 1,
        },
        // vertical axis
        vAxis: {
            textStyle: {
                color: '#ffffff',
                fontSize: 12
            },
            slantedText: false,
            minTextSpacing: 1,
        },
        curveType: "function",
        'chartArea': {'width': '96%', 'height': '80%'},
        legend: {
            position: "bottom",
            textStyle: {
                color: '#ffffff',
                fontSize: 14,
                bold: true,
                italic: false
            }
        },
        backgroundColor: "transparent",
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
        ]
    };
    return (
        <Chart
            chartType="ScatterChart"
            width="100%"
            height={height}
            data={data}
            options={options}
        />
    );
}
