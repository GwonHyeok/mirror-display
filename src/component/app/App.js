import React, {Component} from 'react';

import WeatherContainer from '../weather/WeatherContainer';
import Clock from '../clock/Clock';
import TextView from  '../textView/TextView';

class App extends Component {
    render() {
        return (
            <div>
                <WeatherContainer />
                <Clock/>
                <TextView/>
            </div>
        );
    }
}

export default App;
