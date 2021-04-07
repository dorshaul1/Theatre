
// import { Component } from 'react'

import { ChairsPreview } from '../ChairsPreview/ChairsPreview'
import './LinePreview.scss'

export const LinePreview = ({line}) => {

    // render() {
        return (
            <div className="linePreview flex culumn">
               {line.map((chair)=>{
                   return <ChairsPreview key={chair._id} chair={chair}/>
               })} 
            </div>
        )
    // }
}
