/**
 * Created by ghyeok on 2017. 2. 14..
 */
import React, {Component} from 'react';

class Weather extends Component {

    render() {
        if (this.props.weather) {
            const {title, category, info} = this.props.weather;
            return (
                <div>
                    <p>{category}</p>
                    <h3>{info[0].temperature.current} 도</h3>
                </div>
            )
        }

        return <p>날씨 정보를 불러오는 중 입니다.</p>
    }
}

export default Weather;