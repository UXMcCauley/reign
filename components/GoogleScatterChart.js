import React from "react";
import { Chart } from "react-google-charts";
import faker from "@faker-js/faker";

const fakeData = (title) => {
    return [
        title,
        faker.datatype.number({min: 6, max: 10, precision: 0.1}),
        faker.datatype.number({min: 6, max: 10, precision: 0.1}),
        faker.datatype.number({min: 6, max: 10, precision: 0.1})
    ]
}

export const data = [
    ["Year", "Level 1", "Level 2", "Level 3"],
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

export const options = {
    title: "",
    titleTextStyle: {color: '#ffffff'},
// horizontal axis
    hAxis: {
        textStyle: {
            color: '#ffffff',
            fontSize: 12},
        slantedText: false,
        minTextSpacing: 1,
    },
// vertical axis
    vAxis: {
        textStyle: {
            color: '#ffffff',
            fontSize: 12},
        slantedText: false,
        minTextSpacing: 1,
    },
    curveType: "function",
    legend: { position: "bottom",
        textStyle: {
            color: '#ffffff',
            fontSize:14,
            bold:true,
            italic:false
        }},
    backgroundColor: "transparent"
};

export function GoogleScatterChart() {
    return (
        <Chart
            chartType="ScatterChart"
            width="100%"
            height="600px"
            data={data}
            options={options}
        />
    );
}
