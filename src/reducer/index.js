import weather from './weather';
import clock from './clock';
import textView from './textView';

import {combineReducers} from "redux";

export default combineReducers({
    weather,
    clock,
    textView
});
