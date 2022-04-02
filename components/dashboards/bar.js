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

export default function BarChart(props){
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
            <div className="chartTitle">{props.data.records[0].fields.Name}</div>
            <Bar type={"Bar"} data={{
                labels: props.data.records[0].fields.XAxis.split(","),
                datasets: [
                    {
                        label: 'Employees',
                        data: props.data.records[0].fields.Data.split(',').map(Number),
                        backgroundColor: props.data.records[0].fields.BackgroundColor,
                        borderColor: props.data.records[0].fields.BackgroundColor
                    }
                ],
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
