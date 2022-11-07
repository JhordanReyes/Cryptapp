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

import { Bar } from "react-chartjs-2"

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

const Barra2 = ({ dataBarra2}) => {
    const data = {
        labels: dataBarra2.map((crypto) => crypto.CoinInfo.Internal),
        datasets: [{
            label: "REPORT #2",
            data: dataBarra2.map((crypto) => crypto.RAW.USD.PRICE),
            backgroundColor: "rgb(95, 63, 238)",
            borderRadius: 10,
        }]
    };
    return (
        <div className='barra1'>
            <Bar data={data}></Bar>
        </div>
    )
}

export default Barra2