import React, { useState } from 'react'
import BarGraph from '../Graph/BarGraph'
import { data } from '../Graph/Data'
import greenLogo from '../images/greenLogo.svg'
import Vector from '../images/Vector.svg'
import Ellipse from '../images/Ellipse.svg'

import dropDownArr from '../images/dropDownArr.svg'
import '../App.css';
import PieChartComp from '../Graph/PieChart.jsx'
import SuuplierTable from '../Graph/SuuplierTable.jsx'
import PieChart from '../Graph/PieChart.jsx'

const Main = () => {

    // const [data, setData] = useState({
    //     labels: SampleData.map((SampleData) => SampleData.Year),
    //     datasets: [{
    //         label: "Emissions",
    //         data: SampleData.map((SampleData) => SampleData.Emissions),
    //     }]
    // })

    const dataSet = {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Aug', 'Oct', 'Sep', 'Nov'],
        datasets: [
            {
                label: 'Emissions 2022',
                backgroundColor: 'rgb(36, 196, 36)',
                borderColor: 'rgb(36, 196, 36)',
                borderWidth: 1,
                data: data.filter((item) => item.Year === 2022).map((item) => item.Emissions),
            },
            {
                label: 'Emissions 2023',
                backgroundColor: 'rgb(0, 0, 255)',
                borderColor: 'rgb(0, 0, 255)',
                borderWidth: 1,
                data: data.filter((item) => item.Year === 2023).map((item) => item.Emissions),
            },
        ],
    };



    return (
        <div>
            <div id='topBar'>
                <div id='topbar-section1'>
                    <img src={greenLogo} alt="" />
                    <p> Category-1 </p>
                </div>
                <div id='topbar-section2'>
                    <img src={Ellipse} alt="" />
                    <img src={dropDownArr} alt="" />
                    <img src={Vector} alt="" />

                </div>
            </div>
            <div id='barDiv'>
                <div id='barBoxShadow'>
                    <BarGraph chartData={dataSet} />
                </div>
            </div>
            <div className='supplierDiv'>
                <div>
                    <p>Top 3 Suppliers contributing to Category-1</p>
                </div>
                <div></div>
            </div>

            <div>
                <PieChart Data={data} />
            </div>

            <SuuplierTable />
        </div>
    )
}

export default Main
