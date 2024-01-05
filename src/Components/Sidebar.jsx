import React from 'react'
import '../App.css';
import logo from '../images/logo.png'
import waterDrop from '../images/waterDrop.svg';
import energy from '../images/energy.svg';
import wasteBin from '../images/wasteBin.svg';

const Sidebar = () => {
    return (
        <div className='sidebar-div'>
            <div className='sidebar-inner-div'>
                <img src={logo} alt="" />
            </div>
            <div className='sidebar-inner-div'>
                <p className='section-tag'>DATA-IN</p>
                <button className='sidebar-btn'>
                    <img src={energy} alt="" />
                    Energy
                </button>
                {/* <DropDownBtn title={"Energy"}
                    a1={"Category1"}
                    a2={"Category2"}
                    a3={"Category3"} /> */}
                <button className='sidebar-btn'>
                    <img src={waterDrop} alt="" />
                    Water and Effluents
                </button>
            </div>
            <div className='sidebar-inner-div' >
                <p className='section-tag'>ANALYZE</p>
                <button className='sidebar-btn'>
                    <img src={energy} alt="" />
                    Energy
                </button>
                <button className='sidebar-btn'>
                    <img src={wasteBin} alt="" />
                    Waste
                </button>
            </div>
            <div id='helpBtnDiv'>
                <button id='helpBtn'>
                    Open Help Centre
                </button>
            </div>
        </div>
    )
}

export default Sidebar
