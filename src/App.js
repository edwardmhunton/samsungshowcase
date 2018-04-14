import React from 'react';
import ReactTV from 'react-tv';
import { connect} from 'react-redux';
import ScreenWrapper from './components/helpers/screenWrapper';
import data from '../data/app-layout.json';
import {Route, BrowserRouter, Switch } from 'react-router-dom';
import util from 'util';
import history from './history.js';

import ScreensFromJson from './components/helpers/screensFromJson';

import SplashScreen from './components/screens/splash_screen';
import LoginScreen from './components/screens/login_screen';
import HomeScreen from './components/screens/home_screen';



class App extends React.Component {

  componentDidMount() {
    this.screens = ScreensFromJson.formatData(data);

  }



  filterData(screenName) {



    for(var i in data) {
              if(data[i].name === screenName){
                  return data[i];
              }
    }
  }






    render(){





    return (

      <Switch>



    <Route exact path='/' render={() => <SplashScreen /> } />
    <Route exact path='/login' render={() => <LoginScreen /> } />
    <Route exact path='/home' render={() => <HomeScreen /> } />

  </Switch>


  )





    }


};

export default App;

//<Screen id={screens.Splash.id} ui_components={screens.Splash.components} styles={screens.Splash.styles} />
