
import { Component } from 'react'
import { ReservationSummary } from '../../cmps/ReservationSummary/ReservationSummary'
import { Theatre } from '../../cmps/Theatre'

import './TheatreApp.scss'

export class TheatreApp extends Component {

    render() {
        return (
            <div className="theatreApp flex column align-center">
            <h1>Theatre</h1>
            <Theatre />
            <ReservationSummary />
            </div>
        )
    }
}
