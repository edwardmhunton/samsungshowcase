import {createStore, applyMiddleware, combineReducers } from 'redux';
import reduxImutableStateInvariant from 'redux-immutable-state-invariant';
import { routerReducer as router, ConnectedRouter, routerMiddleware, push } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import content from '../reducers/contentReducer';
import category from '../reducers/categoryReducer';
import menu from '../reducers/menuReducer';

import fetchContentSaga from '../sagas/fetch-content.saga.js';


//export default function configureStore(history, initialState = {}) {
  export default function configureStore(initialState) {


  //initialState = [];

          //const middleware = routerMiddleware(history);
            const sagaMiddleware = createSagaMiddleware();
            const imutableState = reduxImutableStateInvariant();
            const middlewareChain = [imutableState, sagaMiddleware]; //middleware,

            const store = createStore(combineReducers({
              content,
              menu,
              category,
              router
            }),

              initialState,
              applyMiddleware(...middlewareChain)
            );
            sagaMiddleware.run(fetchContentSaga);
            return store;

}
