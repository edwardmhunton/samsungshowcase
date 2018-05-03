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
import FeaturedScreen from './components/screens/featured_screen';
import BrowseScreen from './components/screens/browse_screen';
import TvguideScreen from './components/screens/tvguide_screen';
import PlayerScreen from './components/screens/player_screen';
import SettingsScreen from './components/screens/settings_screen';






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
            <Route exact path='/featured' render={() => <FeaturedScreen /> } />
            <Route exact path='/browse' render={() => <BrowseScreen /> } />
            <Route exact path='/tv guide' render={() => <TvguideScreen /> } />
            <Route exact path='/settings' render={() => <SettingsScreen /> } />
            <Route exact path='/player' render={() => <PlayerScreen /> } />
      </Switch>


  )





    }


};

export default App;
