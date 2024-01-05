import React from 'react'
import '../App.css';


const Card = ({ title, text1, text2 }) => {
    return (
        <div className='card-div'>
            <div>
                <p>{title}</p>
                <div id='inner-card-div'>
                    <p>{text1}</p>
                    <p>{text2}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
