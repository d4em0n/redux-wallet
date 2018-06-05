import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './redux-test/css/itemslist.css';

import App from './components/App';
import store from './stores/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
