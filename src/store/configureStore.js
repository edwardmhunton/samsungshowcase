import {createStore, applyMiddleware, combineReducers } from 'redux';
import reduxImutableStateInvariant from 'redux-immutable-state-invariant';
import { routerReducer as router, ConnectedRouter, routerMiddleware, push } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import content from '../reducers/contentReducer'

//export default function configureStore(history, initialState = {}) {
  export default function configureStore(initialState) {


  //initialState = [];

          //  const middleware = routerMiddleware(history);
            const sagaMiddleware = createSagaMiddleware();
            const imutableState = reduxImutableStateInvariant();
            const middlewareChain = [imutableState, sagaMiddleware]; //middleware,

            return createStore(combineReducers({
              content,
              router
            }),

              initialState,
              applyMiddleware(...middlewareChain)
            );

}
