import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import registerServiceWorker from './serviceWorker';

import configureStore from './configureStore';

import HomeApp from './components/home/HomeApp';

import actions from './actions';
import App from './components/App';
import { PersistGate } from 'redux-persist/integration/react';

const {store, persistor} = configureStore();


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
