import path from 'path';
import express from 'express';
import webpack from 'webpack';
import yields from 'express-yields';
import fs from 'fs-extra';
import App from '../src/App';
import { delay } from 'redux-saga';
import { renderToString } from 'react-dom/server'
import React from 'react'
import { argv } from 'optimist';
//import { videos, video } from '../data/api-real-url';
import { get } from 'request-promise';
import { ConnectedRouter } from 'react-router-redux';
import getStore from '../src/getStore'
import { Provider } from 'react-redux';
import createHistory from 'history/createMemoryHistory';
import serveStatic from 'serve-static';

const port = process.env.PORT || 3000;
const app = express();


const useServerRender = argv.useServerRender === 'true';
const useLiveData = argv.useLiveData === 'true';

if(process.env.NODE_ENV === 'development') {

  const config = require('../webpack.config.dev.babel.js').default;
  const compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler,{
      noInfo: true,
      stats: {
          assets: false,
          colors: true,
          version: false,
          hash: false,
          timings: false,
          chunks: false,
          chunkModules: false
      }
  }));
  app.use(require('webpack-hot-middleware')(compiler));



} else {
    app.use('/static', express.static(path.join(__dirname, '/../public')))
    console.log('serve static');
    //app.use(express.static(path.join(__dirname,'public')));

}

function * getStructure (){
    let data;
    if (useLiveData) {
        data = yield get(questions,{gzip:true});
    } else {
        data = yield fs.readFile('./data/app-layout.json',"utf-8");
    }
    console.log(data);
    return JSON.parse(data);
}

app.get(['/home'], function * (req,res){

});

app.get(['/'], function * (req,res){
    /**
     * Read the raw index HTML file
     */
    let index = yield fs.readFile('./public/index.html',"utf-8");

    /**
     * Create a memoryHistory, which can be
     * used to pre-configure our Redux state and routes
     */
  //  const history = createHistory({
        /**
         * By setting initialEntries to the current path, the application will correctly render into the
         * right view when server rendering
         */
      //  initialEntries: [req.path],
  //  });

    /**
     * Create a default initial state which will be populated based on the route
     */
  //  const initialState = {
    //    questions:[]
    //};

    /**
     * Check to see if the route accessed is the "question detail" route
     */
    //if (req.params.id) {
        /**
         * If there is req.params.id, this must be the question detail route.
         * You are encouraged to create more robust conditions if you add more routes
         */
      //  const question_id = req.params.id;
        /**
         * Get the question that corresponds to the request, and preload the initial state with it
         */
      //  const response = yield getQuestion(question_id);
      //  const questionDetails = response.items[0];
      //  initialState.questions = [{...questionDetails,question_id}];
    //} else {
        /**
         * Otherwise, we are on the "new questions view", so preload the state with all the new questions (not including their bodies or answers)
         */
        //const questions = yield getQuestions();
      //  initialState.questions = [...questions.items]
  //  }

    /**
     * Create a redux store that will be used only for server-rendering our application (the client will use a different store)
     */
  //  const store = getStore(history,initialState);

    /**
     * If server render is used, replace the specified block in index with the application's rendered HTML
     */
    if (useServerRender) {
        const appRendered = renderToString(
            /**
             * Surround the application in a provider with a store populated with our initialState and memoryHistory
             */
          /*  <Provider store={store}>
                <ConnectedRouter history={history}>
                    <App />
                </ConnectedRouter>
            </Provider> */
        );
        index = index.replace(`<%= preloadedApplication %>`,appRendered)
    } else {
        /**
         * If server render is not used, just output a loading message, and the application will appear
         * when React boostraps on the client side.
         */
        index = index.replace(`<%= preloadedApplication %>`,`Please wait while we load the application.`);
    }
    res.send(index);
});



app.listen(port, '0.0.0.0', ()=>console.info(`Listening at http://localhost:${port}`));
