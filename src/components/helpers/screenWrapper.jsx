import React, { Component} from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import * as contentActions from '../../actions/contentActions';
import {Link} from 'react-router-dom';
import util from 'util';
import { Redirect } from 'react-router-dom';
import history from '../../history.js';

// Screens

import SplashScreen from '../screens/splash_screen';


import Navigation, { VerticalList, HorizontalList } from 'react-key-navigation'


/**
 * Each entry in the QuestionList is represtented by a QuestionListItem, which displays high-level information
 * about a question in a format that works well in a list
 //{ui_components.map(component=><ComponentWrapper key={ui_components.question_id} {...question}/>)}






 const Comps = ({ui_components, family, callback}) => (
   ui_components.map((Component, index) => {
          return (

                <Component key={index} callback={callback} style={family} />

          )
     })
 );*/

/**
 * Display all questions in an array provided to it as a simple list
 */
class ScreenWrapper extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      hold:true
    }

  this.transitionToPlayer = this.transitionToPlayer.bind(this);
  this.transitionToLogin = this.transitionToLogin.bind(this);


}



  transitionToPlayer(videoMetaData){

            this.setState({player: true});
            this.setState({content: videoMetaData});
            this.props.actions.setContent(this.state.content);
}

transitionToLogin(videoMetaData){

          this.setState({login: true});
          this.props.actions.setContent(this.state.content);
}





  render(){

    

      return (

            <div className="screen" >
              <SplashScreen />
            </div>



        )




   }
}

/**
 * Get the list of questions from the application's state
 * It is populated by a ../sagas/fetch-question(s)-saga.
 */
 //state, ownProps
 function mapStateToProps (state, ownProps) {

   console.log("MSTP called screen"+util.inspect(state, false, null));
   console.log("MSTP called screen ownProps"+util.inspect(ownProps, false, null));



   return {

   content: state.content

 }

 };

 const mapDispatchToProps = (dispatch)=>({

     actions: bindActionCreators(contentActions, dispatch)

 });

/**
<div className="screen" id={this.props.id} styles={this.props.styles.family} >
<Navigation >
<div id="content">

  <HorizontalList>

            <Sidebar action={this.transitionToLogin} />

            <div >

              <VerticalList>
                <List />
                <List />
              </VerticalList>

            </div>


  </HorizontalList>

</div>
  </Navigation>
</div>

 */
export default connect(mapStateToProps, mapDispatchToProps)(ScreenWrapper);
