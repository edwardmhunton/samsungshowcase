import React, { Component} from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import * as contentActions from '../actions/contentActions';
import {Link} from 'react-router-dom';
import util from 'util';
import { Redirect } from 'react-router-dom';
import history from '../history.js';

import Hero from './hero/hero';
import List from './list/list';
import Sidebar from './sidebar/sidebar';


import Navigation, { VerticalList, HorizontalList } from 'react-key-navigation'


/**
 * Each entry in the QuestionList is represtented by a QuestionListItem, which displays high-level information
 * about a question in a format that works well in a list
 //{ui_components.map(component=><ComponentWrapper key={ui_components.question_id} {...question}/>)}

 */




 const Comps = ({ui_components, family, callback}) => (
   ui_components.map((Component, index) => {
          return (

                <Component key={index} callback={callback} style={family} />

          )
     })
 );

/**
 * Display all questions in an array provided to it as a simple list
 */
class Screen extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      hold:true,
      player:false
    }

  this.transitionToPlayer = this.transitionToPlayer.bind(this);

}



  transitionToPlayer(videoMetaData){



            //console.log('trans to P: '+util.inspect(this, false, null));

            this.setState({player: true});
            this.setState({content: videoMetaData});
            this.props.actions.setContent(this.state.content);




  }





  render(){

    if(this.state.player === true){
      this.state.player = false;
      return (
            <Redirect to="/player" push />
      )
    }

    console.log("BIG LOGS"+ util.inspect(this.props.ui_components[0].params.component_type, false, null));

    if(this.props.ui_components[0].params.component_type === 'sidebar'){ /// rubbish code - change!!

      return (



        <div className="screen" id={this.props.id} styles={this.props.styles.family} >
          <Navigation >
        <div id="content">
        <HorizontalList>

                  <Sidebar action={this.transitionToPlayer} />

                  <div id="main">

                    <VerticalList>
                      <Hero />
                      <List />
                    </VerticalList>

                  </div>


        </HorizontalList>

        </div>
        </Navigation>
      </div>



    )

    } else {

      console.log("Props in non-nav screen"+ util.inspect(this.props, false, null));

      return (

            <div className="screen" id={this.props.id} styles={this.props.styles.family} >
              
            <div id="content">

                          <Comps  ui_components = {this.props.ui_components} family={this.props.styles.family} />

            </div>
          </div>



        )

    }




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
 * Create and export a connected component
 */
export default connect(mapStateToProps, mapDispatchToProps)(Screen);
