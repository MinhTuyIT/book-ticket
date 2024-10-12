import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import rootSaga from './sagas';
import { persistStore} from 'redux-persist';
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({ reducer, middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store , persistor};
