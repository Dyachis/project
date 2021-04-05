import { useState, useEffect } from 'react'
import './calendar.css'
import moment from 'moment'

import buildCalendar from './build'
import dayStyles, { beforeToday } from './styles'


export default function Calendar({ value, onChange }){
    moment.updateLocale('en', {week: {dow: 1}})
    const [calendar, setCalendar] = useState([])

    useEffect(() => {
        setCalendar(buildCalendar(value))
    }, [value])   

    function currMonthName(){
        return value.format('MMMM')
    }    

    function currYear(){
        return value.format('YYYY')
    }

    function prevMonth(){
        return value.clone().subtract(1, 'month')
    }

    function nextMonth(){
        return value.clone().add(1, 'month')
    }

    function thisMonth(){
        return value.isSame(new Date(), 'month')
    }
    
    return <div className='calendar'>
        <div className='calendar__header'>
            <div onClick={() => !thisMonth() && onChange(prevMonth())}>{!thisMonth() && String.fromCharCode(171)}</div>
            <div>{currMonthName()} {currYear()}</div>
            <div onClick={() => onChange(nextMonth())}>{String.fromCharCode(187)}</div>
        </div>
        <div className='calendar__body'>
        {
            calendar.map(week => <div className='week'>
                {
                    week.map(day => (
                        <div className='day' onClick={() => !beforeToday(day) && onChange(day)}>
                            <div className={dayStyles(day, value)}>{day.format('D')}</div>
                        </div>
                    ))   
                }
            </div>)
        }
        </div>
        </div>
}