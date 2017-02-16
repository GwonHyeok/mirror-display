/**
 * Created by ghyeok on 2017. 2. 14..
 */
import React, {Component} from 'react'
import {connect} from 'react-redux';
import {loadWeather} from '../../action/weather';
import Weather from './Weather';

class WeatherContainer extends Component {

    render() {
        const {weather} = this.props;

        return (
            <div>
                <Weather
                    {...weather}
                />
            </div>
        )
    }

    /**
     * Override function
     * Component Will Mount
     */
    componentWillMount() {
        const {onLoadWeather} = this.props;
        onLoadWeather();
    }
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoadWeather() {
            dispatch(loadWeather())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);