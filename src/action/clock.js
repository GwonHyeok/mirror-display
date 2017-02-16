/**
 * Created by ghyeok on 2017. 2. 14..
 */
const UPDATE_CLOCK = 'UPDATE_CLOCK';

function updateClock() {
    return {type: UPDATE_CLOCK, dateTime: Date.now()};
}

function startClock() {
    return (dispatch) => {
        setInterval(function () {
            dispatch(updateClock());
        }, 1800);
    };
}

export  {
    UPDATE_CLOCK,
    startClock
}