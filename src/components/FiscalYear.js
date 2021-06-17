import React from 'react';
import E_App from './E_App'

export default function FiscalYear (props) {
    const { year, state, selectYear, deselectYear } = props
    const { apiData, selectedYear, EPC_data } = state
    return(
        <div>
            <div className='fiscalYear' onClick={()=> 
                state.selectedYear ? deselectYear() :
                selectYear(year)}>
                Fiscal Year: {year} <button>+</button></div>
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
                        year = {year}
                        selectYear = {selectYear}
                        deselectYear = {deselectYear}
                        key = {idx}
                        />
                        : ''
                )}
                )
                : ''}
            </div>
        </div>
    )
}