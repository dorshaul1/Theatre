
import { Component } from 'react'
import { LinePreview } from '../LinePreview'

import './ChairsList.scss'

export const ChairsList = ({ theatre, rowsCount }) => {
    // console.log('theatre:', theatre)

    const getChairsRow = (row) => {
        let chairs = []
        theatre.filter(chair => {
            if (+(chair.pos.line) === row)
                chairs.push(chair)
        })
        return chairs
    }

    const getLines = () => {
        let lines = []
        for (let i = 1; i <= rowsCount; i++) {
            lines.push(getChairsRow(i))
        }
        // console.log('lines:', lines)
        return lines
    }

    return (
        <div>
            {getLines().map((line, idx) => {
                // console.log('line:', line)
                return <LinePreview  key={idx} line={line} />
                // return line.map((chair) => <>)
                })}
                </div>
                )
            }

