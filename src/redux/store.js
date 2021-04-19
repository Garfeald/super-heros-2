import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import { rootReducer } from './rootReduser.js';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware();
const middlewareEnhancer = applyMiddleware(sagaMiddleware, logger);
const composedEnhancers = compose(middlewareEnhancer);

export const store = createStore(rootReducer, composedEnhancers);


sagaMiddleware.run(rootSaga);