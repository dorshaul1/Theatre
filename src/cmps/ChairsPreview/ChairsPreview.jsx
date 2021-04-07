
import { Component } from 'react'

import './ChairsPreview.scss'

export const ChairsPreview = ({ chair }) => {

    const getChairClass=(chair)=>{
        var classStr = "flex center chairsPreview "
        const chairStatus = getChairStatus(chair)
        classStr+=chairStatus
        return classStr

    }

    const getChairStatus=(chair)=>{
        if (chair.isChair) {
            switch (chair.status) {
                case "reserved":
                    return "reserved"
                case "available":
                    return "available"
                case "selected":
                    return "selected"
                default:
                    return "pathway"
            }
        } else {
            return "pathway"
        }
    }

    return (
        <div className={getChairClass(chair)} >
            {JSON.stringify(chair.pos.chairNum)}
        </div>
    )
    // }
}
