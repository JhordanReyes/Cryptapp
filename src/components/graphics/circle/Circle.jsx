import React from 'react'
import "./style.css"
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
} from 'chart.js';

import { Doughnut } from "react-chartjs-2"

Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
);
const Circle = () => {
    const options = {
        elements:{
            arc: {
                borderWidth: 5,
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'AVERAGE',
                color: 'black'
            }
        }
    }
    const data = {
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: [
                "rgb(95, 63, 238)",
                "rgb(97, 233, 130)",
                "rgb(139, 120, 223)",
            ]
        }],
        labels: ['Bitcoin', 'Ethereum', 'Litecoin']
    }

    return (
        <div className='circle'>
            <Doughnut data={data} options={options}></Doughnut>
        </div>
    )
}

export default Circle