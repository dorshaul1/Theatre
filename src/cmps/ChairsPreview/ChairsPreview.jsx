
import { Component } from 'react'

import './ChairsPreview.scss'

export const ChairsPreview = ({chair})=> {

    // render() {
        return (
            <div>
            {JSON.stringify(chair.price)}
            </div>
        )
    // }
}
