import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import registerServiceWorker from './serviceWorker';

import configureStore from './configureStore';

import HomeApp from './components/home/HomeApp';

import actions from './actions';
import App from './components/App';

const store = configureStore();


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
