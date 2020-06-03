import React, { Component } from 'react'
import moment from 'moment'
import './index.scss'

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            calendar: []
        }
    }
    componentDidMount() {
        let startDate = moment().isoWeekday(8);
        if (startDate.date() === 8) {
            startDate = startDate.isoWeekday(-6)
        }
        let today = moment().isoWeekday('Sunday');
        let week = moment.duration().asWeeks();
        console.log(week);
        while (startDate.isAfter(today + 14)) {
            let startDateWeek = startDate.isoWeekday('Monday').format('DD-MM-YYYY');
            let endDateWeek = startDate.isoWeekday('Sunday').format('DD-MM-YYYY');
            startDate.add(7, 'days');
            this.state.calendar.push([startDateWeek, endDateWeek]);
        }
    }

    render() {
        return (
            <div className="ca-wrapper">

            </div>
        )
    }
}