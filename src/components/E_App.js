import React from 'react';
import EPC_form from './EPC_form'

export default function E_App (props) {
    const { 
        frn, appNum, fundingYear, inventory, EPC_data
     } = props
     return(
         <div>
            <div>FRN: {frn}</div>
            <div>471: {appNum}</div>
            <div>Year: {fundingYear}</div>
            <div>Total Funding: ${inventory.reduce((acc, cur)=> {
                acc += cur.total_eligible
                return acc
            }, 0).toLocaleString('en-US')}
            <div>EPC Total: ${EPC_data.filter((app)=> {
                return app.appNum === appNum
            }).map((matchingApp) => {
                return
                <div>{matchingApp.total_eligible}</div>
            })}</div>
            <EPC_form _appNum={appNum}/>
            </div>
         </div>
     )
}