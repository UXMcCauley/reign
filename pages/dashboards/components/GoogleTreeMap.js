import { Chart } from "react-google-charts";

export default function GoogleTreemap({data, title}) {
    const options = {
        minColor: "#92007b",
        midColor: "#00407e",
        maxColor: "#00794d",
        minHighlightColor: '#8c6bb1',
        midHighlightColor: '#9ebcda',
        maxHighlightColor: '#edf8fb',
        headerHeight: 44,
        headerColor: "#000",
        borderColor: "black",
        fontColor: "white",
        showScale: false,
        enableHighlight: true,
        generateTooltip: showFullTooltip
    };

    function showFullTooltip(row, size, value) {
        return '<div style="background:#000000; padding:10px; border-style:solid">' +
           (value*100/5).toLocaleString(undefined, {minimumFractionDigits: 1}) + "% " + size +  ' </div>';
    }
    return (
        <div className={"w-full mt-20"}>
            <h1 className={"w-full text-center mb-0 text-black dark:text-white"}>{title}</h1>
            <p className={"w-full text-center mb-10 text-sm text-black dark:text-white"}>Click to drill down, right-click to roll-up.</p>
            <Chart
            chartType="TreeMap"
            width="100%"
            height="400px"
            data={data}
            options={options}
        /></div>
    );
}
