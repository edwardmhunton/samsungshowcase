/**
 * This is the main entry point of the client application and is loaded by Webpack.
 * It is NOT loaded by the server at any time as the configurations used (i.e.,browserHistory) only work in the client context.
 * The server may load the App component when server rendering.
 */
import App from './App'
import ReactTV from 'react-tv';
import ReactDOM from 'react-dom'
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from './store/configureStore';
import initialState from './reducers/initialState';
import history from './history.js';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './css/styles.css';
import './css/components.css';
import './css/nav_styles.css';
import createHistory from 'history/createBrowserHistory';

import Navigation, { VerticalList, HorizontalList } from 'react-key-navigation'


//import ReactTV, { renderOnAppLoaded } from 'react-tv';
//import { withFocusable, withNavigation } from 'react-tv-navigation';


import util from 'util';

const store = configureStore(initialState);


if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        render(NextApp);
    });
}
const render = (_App)=> {
    ReactTV.render(
        <Provider store={store}>
            <ConnectedRouter  history={history}>

                 <_App />

             </ConnectedRouter>
         </Provider>
        ,document.getElementById("app_container"));
};


store.subscribe(() => {
    const state = store.getState();

          render(App);

});

/**
 * Reads the current path, which corresponds to the route the user is seeing, and makes a request
 * the the appropriate saga to fetch any data that might be required.
 * @param location
 * The current URL that is loaded
 */
const fetchDataForLocation = location =>{
    /**
     * If the location is the standard route, fetch an undetailed list of all questions
     */


    /**
     * If the location is the details route, fetch details for one question
     */
  // if (location.pathname.includes(`questions`)) {
      //  store.dispatch({type:`REQUEST_FETCH_QUESTION`,question_id:location.pathname.split('/')[2]});
    //}
      store.dispatch({type:`REQUEST_FETCH_CONTENT`});
      store.dispatch({type:`SET_PREVIOUS_MENU_ID`, menu_id:0});
      store.dispatch({type:`SET_PREVIOUS_MENU_ITEM_ID`, menu_item_id:10});
};
/**
 * Initialize data fetching procedure
 */
fetchDataForLocation(history.location);

/**
 * Listen to changes in path, and trigger
 * data fetching procedure on any relevant changes
 */
history.listen(fetchDataForLocation);
