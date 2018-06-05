import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './redux-test/css/itemslist.css';

//import App from './App.jsx';
//import App from './State.jsx';
//import App from './GantiWarna.jsx';
//import App from './Router.jsx';
//import App from './flux/components/App';
//import App from './belajar-bootstrap/App';

//ReactDOM.render(<App />, document.getElementById('app'));
//setTimeout(() => {
//    ReactDOM.unmountComponentAtNode(document.getElementById('app'))
//}, 10000)

//belajar redux --[
import App from './redux-test/components/App';
import store from './redux-test/stores/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
//--]
