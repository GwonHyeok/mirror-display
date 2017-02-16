/**
 * Created by ghyeok on 2017. 2. 16..
 */
import React, {Component} from 'react';
import {connect} from  'react-redux'

class TextView extends Component {
    render() {
        const {text} = this.props;
        const style = {
            fontSize: '30px'
        };

        return (
            <p style={style}>{text}</p>
        );
    }
}

const mapStateToProps = (state) => {
    return state.textView;
};

export default connect(mapStateToProps, undefined)(TextView);