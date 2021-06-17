import React from 'react';
import EPC_form from './EPC_form'

export default function E_App (props) {
    const { 
        frn, appNum, fundingYear, inventory, 
        EPC_data, year, selectYear, deselectYear
     } = props
     return(
         <div className='E_app'>
            <div>FRN: {frn}</div>
            <div>471: {appNum}</div>
            <div>Year: {fundingYear}</div>
            <div>API Amount: ${inventory.reduce((acc, cur)=> {
                acc += cur.total_eligible
                return acc
            }, 0).toLocaleString('en-US')}
            <EPC_form _appNum={appNum}  EPC_data = {EPC_data} 
            selectYear = {selectYear} year = {year} deselectYear = {deselectYear}
            />
            </div>
         </div>
     )
}