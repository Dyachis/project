import React from 'react'
import { DateRange } from 'react-date-range';
import './DataStyle/main.css'
import './DataStyle/default.css'

export default function DataRangePicker(state, setState) {

    const dates = [new Date(), new Date('2024-12-31')]

    return <li className="dropdown">
        <div className="dropbtn">Dates</div>
        <div className="dropdown-content-dates">
            <div className='strelka-dates'>&#9650;</div>
            <div style={{ width: '210px' }}>
                    <DateRange
                        showMonthAndYearPickers={true}
                        minDate={dates[0]}
                        maxDate={dates[1]}
                        editableDateInputs={true}
                        onChange={item => state.setState([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={state.state}
                        style={{ width: '200px' }}
                    />
            </div>
        </div>
    </li>
}