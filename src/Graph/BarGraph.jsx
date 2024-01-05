import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart, ChartJS } from 'chart.js/auto';
// import { Chart as ChartJS } from 'chart.js'

const BarGraph = ({ chartData }) => {

    return (
        <Bar data={chartData} />
    )
}

export default BarGraph
