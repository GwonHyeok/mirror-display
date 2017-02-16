/**
 * Created by ghyeok on 2017. 2. 14..
 */
import {weatherAction} from '../action/index';
const {LOAD_WEATHER, SET_WEATHER} = weatherAction;

const weather = (state = [], action) => {
    switch (action.type) {
        case LOAD_WEATHER:
            break;

        case SET_WEATHER:
            return Object.assign({}, state, {weather: action.weather});

        default:
            return state;
    }
};

export default weather;