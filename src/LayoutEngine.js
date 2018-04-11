// The layout engine consumes the Layout json and builds a screen, generally sits in the App component
import React from 'react';

//ui components

import List from './components/list/list';
import Hero from './components/hero/hero';
import PlayerWrapper from './components/player/player_wrapper';
import Grid from './components/grid';
import Splash from './components/splash';
import Player from './components/player';
import Login from './components/login';
import Sidebar from './components/sidebar/sidebar';
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
