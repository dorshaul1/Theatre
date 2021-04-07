
import { Component } from 'react'
import { theatreService } from '../../services/theatre-service'
import { ChairsList } from '../ChairsList'

import './Theatre.scss'

export class Theatre extends Component {

    state = {
        theatre: null,
        rows: null
    }

    componentDidMount() {
        const theatreToShow = theatreService.getTheatre()
        // console.log('theatreToShow:', theatreToShow)
        this.setState({ theatre: theatreToShow }, ()=>{
            this.rowCount()
        })
        // console.log('theatre:', theatre)
    }

     rowCount() {
        let maxRowNum = 0
         this.state.theatre.forEach(chair => {
            maxRowNum = (chair.pos.line > maxRowNum) ? chair.pos.line : maxRowNum
        })
        this.setState({ rows: maxRowNum })
        // console.log('maxRowNum:', maxRowNum)
    }

    changeChairStatus(chairId){
         console.log('chairId:', chairId)
        // console.log('this.state.theatre:', this.state.theatre)
        // this.state.theatre.findIndex()
    }

    render() {
        return (
            <div className="theatre flex column">
                <div className="screen"></div>

                <ChairsList theatre={this.state.theatre} changeChairStatus={this.changeChairStatus} rowsCount={this.state.rows}/>
            </div>
        )
    }
}
