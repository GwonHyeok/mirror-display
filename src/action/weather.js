/**
 * Created by ghyeok on 2017. 2. 14..
 */
import {Weather} from 'kma-js';

const LOAD_WEATHER = 'LOAD_WEATHER';
const SET_WEATHER = 'SET_WEATHER';

function setWeather(weather) {
    return {type: SET_WEATHER, weather};
}

function loadWeather() {
    return (dispatch) => {
        Weather.townWeather(37.4886858, 126.9993888)
            .then(res => dispatch(setWeather(res)))
            .catch(err => console.error(err));
    };
}


export {
    LOAD_WEATHER,
    SET_WEATHER,
    loadWeather,
    setWeather
}