import React from 'react';
import E_App from './E_App'

export default function FiscalYear (props) {
    const { year, state, selectYear } = props
    const { apiData, selectedYear, EPC_data } = state
    return(
        <div>
            <div onClick={()=> selectYear(year)}>{year}</div>
            <div>
                {selectedYear === year ? 
                apiData.fundingDetail.map((app, idx) => {
                    return(
                    app.fundingYear*1 === year ?
                        <E_App 
                        frn = {app.frn}
                        appNum = {app[471]}
                        fundingYear = {app.fundingYear}
                        inventory = {app.inventory}
                        EPC_data = {EPC_data}
                        key = {idx}
                        />
                        : ''
                )})
                : ''}
            </div>
        </div>
    )
}