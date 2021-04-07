
import { Component } from 'react'

import './ChairsPreview.scss'

export const ChairsPreview = ({chair})=> {

    // render() {
        return (
            <div className="chairsPreview flex center">
            {JSON.stringify(chair.pos.chairNum)}
            </div>
        )
    // }
}
