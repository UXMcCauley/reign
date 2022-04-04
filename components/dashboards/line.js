import {Line} from "react-chartjs-2";
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

export default function LineChart(props) {
    ChartJS.register(ArcElement,
        BarElement,
        Tooltip,
        Legend,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title);
    const datasets = []
    props.data.map((dataset) => {
        datasets.push({
            label: dataset.fields.Name,
            data: dataset.fields.Data.split(',').map(Number),
            borderColor: dataset.fields.BackgroundColor,
            backgroundColor: dataset.fields.BorderColor,
        })
    })
    const totalData = {
        labels: props.data[0].fields.XAxis.split(","),
        datasets: datasets
    }
    return (
        <div>
            <div className={"text-black dark:text-white w-full text-center uppercase font-light mb-10"}>{props.data[0].fields.Title}</div>
            <Line options={{
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    title: {
                        display: false,
                        text: 'Chart.js Line Chart',
                    },
                },
            }} data={totalData} type={"Line"}/>
        </div>
    )
}
