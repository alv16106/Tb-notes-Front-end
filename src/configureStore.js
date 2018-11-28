import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import mySaga from './sagas';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, reducer)

const configureStore = () => {
  const store = createStore(
    persistedReducer,
    compose(applyMiddleware(sagaMiddleware),),
  );

  const persistor = persistStore(store);
  //persistor.purge()

  sagaMiddleware.run(mySaga);

  return {store, persistor};
};

export default configureStore;