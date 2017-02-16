/**
 * Created by ghyeok on 2017. 2. 14..
 */
import {clockAction} from '../action/index'
const {UPDATE_CLOCK} = clockAction;

const clock = (state = [], action) => {

    switch (action.type) {
        case UPDATE_CLOCK:
            return Object.assign({}, state, {dateTime: action.dateTime});

        default:
            return state;
    }

};

export default clock;