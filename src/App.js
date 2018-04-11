import React from 'react';
import ReactTV from 'react-tv';
import { connect} from 'react-redux';
import Screen from './components/screen';
import LayoutEngine from './LayoutEngine';
import data from '../data/app-layout.json';
import {Route, BrowserRouter, Link } from 'react-router-dom';
import util from 'util';
import history from './history.js';

import Sidebar from './components/sidebar/sidebar';
import Hero from './components/hero/hero';
import List from './components/list/list';





//import Navigation, { VerticalList, HorizontalList } from 'react-key-navigation';
import Navigation, { VerticalList, HorizontalList } from 'react-key-navigation'



//  <Route exact path='/home' render={({match})=><QuestionDetail question_id={match.params.id}/>}/>
/*Specify a route for the main page which renders when the path is empty
  //      <Route exact path='/' render={()=><Splash />}/>
//*Specify a route for questions where the detail renders differently depending on the question selected, the ID of which is passed in at render time*/
        //*It would be possible to read the current path from within the component during rendering, but this way all data is passed in through props.*/}
//<Route exact path='/home' render={()=><Screen layout={LayoutEngine.getScreen(data, 'home')}/>}/>
// <Route exact path='/' render={()=><Screen layout={LayoutEngine.getScreen(data, 'home')} />}/>

//<Route exact path='/' render={()=><Screen />}/>

class AppDisplay extends React.Component {

  changeFocusTo(index) {
    this.setState({active: index});
  }

  onBlurLists() {
    this.setState({active: null});
  }



  formatData() {

    var associatedScreens = {};

    for(var i in data) {

    //console.log("Screen comps"+util.inspect(data[i], false, null));

              associatedScreens[data[i].name] = {};

              associatedScreens[data[i].name].components = LayoutEngine.getScreen(data[i], data[i].name);
              associatedScreens[data[i].name].id = data[i].id;
              associatedScreens[data[i].name].styles = data[i].styles;
    }

    return associatedScreens;

  }

  filterData(screenName) {



    for(var i in data) {

      console.log("da"+data[i].name);

              if(data[i].name === screenName){
                  return data[i];
              }
    }



  }






    render(){




    //  let data = this.filterData('Splash');

    //console.log("DATAs"+util.inspect(data, false, null));

    let screens = this.formatData();

    //console.log("Screen comps"+util.inspect(screen_components, false, null));

    return (

    <div>



    <Route exact path='/' render={() =>

    <Screen id={screens.Splash.id} ui_components={screens.Splash.components} styles={screens.Splash.styles} />


    } />

    <Route exact path='/login' render={() =>

    <Screen id={screens.Login.id} ui_components={screens.Login.components} styles={screens.Login.styles} />


    } />

    <Route exact path='/home' render={() =>

    <Screen id={screens.Home.id} ui_components={screens.Home.components} styles={screens.Home.styles} />


    } />

  <Route exact path='/player' render={() =>


    <Screen id={screens.Player.id} ui_components={screens.Player.components} styles={screens.Player.styles} />


    } />



    <Route exact path='/screen1' render={() =>


    <Screen id={screens.Screen1.id} ui_components={screens.Screen1.components} styles={screens.Screen1.styles} />


    } />

    <Route exact path='/screen2' render={() =>

    <Screen id={screens.Screen2.id} ui_components={screens.Screen2.components} styles={screens.Screen2.styles} />


    } />

    <Route exact path='/screen3' render={() =>

    <Screen id={screens.Screen3.id} ui_components={screens.Screen3.components} styles={screens.Screen3.styles} />


    } />



    </div>

  )





    }


};

const mapStateToProps = (state, ownProps) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(AppDisplay);
