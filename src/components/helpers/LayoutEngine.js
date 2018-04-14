// The layout engine consumes the Layout json and builds a screen, generally sits in the App component
import React from 'react';

//ui components
import List from '../ui_components/list/list';
import Hero from '../ui_components/hero/hero';
import PlayerWrapper from '../ui_components/player/player_wrapper';
import Grid from '../ui_components/grid/grid';
import Splash from '../ui_components/splash/splash_ui_component';
//import Player from '../ui_components/player';
import Login from '../ui_components/login/login_ui_component';
import Sidebar from '../ui_components/sidebar/sidebar_ui_component';

//screens

import SplashScreen from '../screens/splash_screen';


//import Player from './components/player/player';


//API

 const LayoutEngine = () => {}

LayoutEngine.components = {
     hero: Hero,
     list: List,
     grid: Grid,
     splash: Splash,
     login: Login,
     sidebar: Sidebar,
     player_wrapper: PlayerWrapper

 };

LayoutEngine.addUI = (content) => {

  return (

    content.ui_components.map(function(result) {

      let comp = LayoutEngine.components[result.component_type];
      comp.params = result;
      return comp;


    })

  )


}

LayoutEngine.getScreen = (data, screenName) => {
  return LayoutEngine.addUI(data);
}

LayoutEngine.getAllScreen = (data) => {



}


export default LayoutEngine;
