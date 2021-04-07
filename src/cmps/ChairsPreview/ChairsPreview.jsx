
import { Component } from 'react'

import './ChairsPreview.scss'

export const ChairsPreview = ({ chair }) => {

    // render() {
        // console.log('chair.status :', chair )
    return (
        <div className={(chair.status === 'available') ? "chairsPreview available flex center":"chairsPreview reserved flex center" } >
            {JSON.stringify(chair.pos.chairNum)}
        </div>
    )
    // }
}
