
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

    render() {
        return (
            <div>
                <div className="screen"></div>

                <ChairsList theatre={this.state.theatre} rowsCount={this.state.rows}/>
            </div>
        )
    }
}
