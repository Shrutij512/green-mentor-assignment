import React from 'react'
import { data } from '../Graph/Data'
import '../App.css';


const SuuplierTable = () => {

    const Data = data;
    const calculateMoM = () => {
        const momData = [];
        for (let i = 1; i < Data.length; i++) {
            const momValue = ((Data[i].Revenue - Data[i - 1].Revenue) / Data[i - 1].Revenue) * 100;
            momData.push(momValue.toFixed(2)); // Round to 2 decimal places
        }
        return momData;
    };

    const momValues = calculateMoM();

    const limitedData = data.slice(0, 8);

    return (
        <div>
            <div>
                <p id='table-heading'>Supplier-wise</p>
                <table id='supplierTable'>
                    <thead>
                        <tr>
                            <th>Supplier</th>
                            <th>Year</th>
                            <th>EMISSION/REVENUE RATIO</th>
                            <th>MOM</th>
                        </tr>
                    </thead>
                    <tbody>
                        {limitedData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.Supplier}</td>
                                <td>{item.Year}</td>
                                <td>{item.E_R}</td>
                                <td style={{ color: momValues[index] > 0 ? 'green' : 'red' }}>
                                    {momValues[index] > 0 ? `↑ ${momValues[index]}%` : `↓ ${Math.abs(momValues[index])}%`}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SuuplierTable
