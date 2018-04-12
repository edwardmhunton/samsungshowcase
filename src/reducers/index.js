import {combineReducers} from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import content from './contentReducer';

const rootReducer = combineReducers({
  content,
  router: routerReducer
});

export default rootReducer;
