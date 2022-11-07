import React from 'react'
import "./style.css"

import {
    Chart,
    BarElement,
    BarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
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
    BarElement,
    BarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
);

const Barra1 = ({ dataBarra1}) => {
    
        const data = {
            labels: dataBarra1.map((crypto) => crypto.CoinInfo.Internal),
            datasets: [{
                label: "REPORT #1",
                data: dataBarra1.map((crypto) => crypto.RAW.USD.PRICE),
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

export default Barra1