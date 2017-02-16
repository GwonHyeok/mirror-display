/**
 * Created by ghyeok on 2017. 2. 14..
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startClock} from '../../action/clock';

import moment  from 'moment';

class Clock extends Component {

    constructor() {
        super();

        moment.locale('ko');
    }

    componentWillMount() {
        const {startClock} = this.props;
        startClock();
    }

    render() {
        const {date, time} = this.format(this.props.dateTime);
        return (
            <div>
                <p>{date}</p>
                <h1>{time}</h1>
            </div>
        );
    }

    format(dateTime) {
        const dateTimeMoment = moment(dateTime);
        const date = dateTimeMoment.format('dddd, MMMM Do YYYY');
        const time = dateTimeMoment.format('h:mm a');
        return {date, time};
    }

}

const mapStateToProps = (state) => {
    return state.clock;
};

const mapDispatchToProps = (dispatch) => {
    return {
        startClock() {
            dispatch(startClock())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Clock);