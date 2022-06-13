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

export default function LineChart2({data, title}) {
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
            <div className={"text-black dark:text-white w-full text-center uppercase font-light mb-10"}>{title}</div>
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
            }} data={data} type={"Line"}/>
        </div>
    )
}
