
// import { Component } from 'react'

import { ChairsPreview } from '../ChairsPreview/ChairsPreview'
import './LinePreview.scss'

export const LinePreview = ({ line, changeChairStatus }) => {
// console.log('changeChairStatus:', changeChairStatus)
// console.log('changeChairStatus:', changeChairStatus)

    // render() {
    return (
        <div className="linePreview flex culumn">
            {line.map((chair) => {
                // console.log('chair:', chair)
                return chair && <ChairsPreview onclick={()=>{changeChairStatus(chair._id)}} key={chair._id} chair={chair} />
            })}
        </div>
        // onClick={changeChairStatus}
    )
    // }
}
