import React from 'react';
import { connect} from 'react-redux';
import List from './components/list';
import Screen from './components/screen';
import LayoutEngine from './LayoutEngine';
import data from '../data/app-layout.json';
import {Route, Link } from 'react-router-dom';

//  <Route exact path='/home' render={({match})=><QuestionDetail question_id={match.params.id}/>}/>
/*Specify a route for the main page which renders when the path is empty
  //      <Route exact path='/' render={()=><Splash />}/>
//*Specify a route for questions where the detail renders differently depending on the question selected, the ID of which is passed in at render time*/
        //*It would be possible to read the current path from within the component during rendering, but this way all data is passed in through props.*/}
//<Route exact path='/home' render={()=><Screen layout={LayoutEngine.getScreen(data, 'home')}/>}/>
// <Route exact path='/' render={()=><Screen layout={LayoutEngine.getScreen(data, 'home')} />}/>

//<Route exact path='/' render={()=><Screen />}/>

class AppDisplay extends React.Component {




    render(){

      console.log("LO"+LayoutEngine);
      console.log("data"+data);

      let screenName = 'Home';



      for(var i in data) {

                if(data[i].name === screenName) {

                  var _screen = data[i];



                }


      }

        const l = LayoutEngine.getScreen(_screen, 'Home');

          return (



                    <Screen id={_screen.id} ui_components={l} styles={_screen.styles} />








          )

    }


};

const mapStateToProps = (state, ownProps) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(AppDisplay);
