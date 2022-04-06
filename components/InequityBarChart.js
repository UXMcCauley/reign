import {Bar} from "react-chartjs-2";
import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale, LineElement,
    PointElement, Title,
    Tooltip
} from "chart.js";
import {useEffect, useState} from "react";

export default function InequityBarChart({data}){
    const [barChartData, setBarChartData] = useState([])
    const [cleanChartData, setCleanChartData] = useState([])
    // let chartData = data[0].data.filter(item => {
    //     return item !== null
    // })

    // console.log(data[0].data.filter(item => {
    //     return item !== null
    // }))
    useEffect(() => {
        setBarChartData(data)

        barChartData.map(item => {
            let temp = {
                label: item.ethnicity + "" + item.gender,
                data: item.data,
                backgroundColor: "red"
            }
            setCleanChartData(prevState => [...prevState, temp])
        })

        console.log(cleanChartData)
    }, [data])

    ChartJS.register(ArcElement,
        BarElement,
        Tooltip,
        Legend,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title);
    return (
        <div>
            <div className={"text-black dark:text-white w-full text-center uppercase font-light mb-10"}>{"Title"}</div>
            <Bar type={"Bar"} data={{
                labels: ["KPI", "Wage", "Performance", "Attendance", "#/Employees", "Skill Level"],
                datasets: cleanChartData,
            }} options={{
                indexAxis: 'x',
                elements: {
                    bar: {
                        borderWidth: 2,
                    },
                },
                responsive: true,
                plugins: {
                    datalabels: {
                        anchor: "start"
                    },
                    legend: {
                        position: 'bottom',
                        display: false,
                    },
                    title: {
                        display: false,
                        text: 'Total EmployeeId by Keycard',
                    },
                },
            }}/>
        </div>
    )
}
