/**
 * Created by ghyeok on 2017. 2. 16..
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import App from './App';

class AppContainer extends Component {

    render() {
        return <App/>
    }

}

export default connect(undefined, undefined)(AppContainer);