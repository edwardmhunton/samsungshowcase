// The layout engine consumes the Layout json and builds a screen, generally sits in the App component
import React from 'react';
import List from './components/list';
import Hero from './components/Hero';
import Grid from './components/Grid';

//API

 const LayoutEngine = () => {}

LayoutEngine.components = {
     hero: Hero,
     list: List,
     grid: Grid

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

  console.log(screenName);
  return LayoutEngine.addUI(data);




}


export default LayoutEngine;
