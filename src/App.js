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





      /*return (

        <Navigation>

          <div id="container">
            <HorizontalList id="content">
              <Sidebar />
              <div id="main">
                <VerticalList>
                <Hero />
                <List />

              </VerticalList>


              </div>

            </HorizontalList>
          </div>




        </Navigation>





    )*/








         return (
            <Screen id={data.id} ui_components={screen_components} styles={data.styles} />
          )

    }


};

const mapStateToProps = (state, ownProps) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(AppDisplay);
