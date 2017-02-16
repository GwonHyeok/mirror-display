import React from 'react';
import configureStore from './store/index';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import reducer from './reducer/index';
import AppContainer from './component/app/AppContainer'

const store = configureStore(reducer, {
    clock: {
        dateTime: Date.now()
    },
    textView: {
        text: `안녕하세요`
    }
});

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer/>
        </Provider>,
        document.getElementById('app')
    )
};

store.subscribe(render);
render();