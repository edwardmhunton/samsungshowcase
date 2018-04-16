import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as contentActions from '../../actions/contentActions';
import { Redirect } from 'react-router-dom';
import { push } from 'react-router-redux';
import history from '../../history.js';
import util from 'util';

import Navigation, { VerticalList, HorizontalList, Focusable } from 'react-key-navigation';

import PlayerWrapper from '../ui_components/player/player_wrapper';



//import List from './List';

class PlayerScreen extends React.Component {

  constructor(props) {
    super(props);
    this._lastFocus = null;
    this.actions = {};


    this.previous = this.previous.bind(this);


  }





  changeFocusTo(index) {
    this.setState({active: index});
  }

  onBlurLists() {
    this.setState({active: null});
  }



  advance(){
      this.setState({hold: false});
  }

  previous(){
    console.log("previous called");
      //this.setState({hold: false});
        history.push('/home');
      //  history.goBack();
  }




  render() {

    console.log("The State:"+util.inspect(this.state, false, null));
    console.log("The Props:"+util.inspect(this.props, false, null));

    this.actions.previous = this.previous;





        //  if(this.state.hold){



            return (
              <Navigation >
                  <div id="content">

                <HorizontalList>


                      <PlayerWrapper content={this.props.content.content} actions={this.actions}/>



                </HorizontalList>
              </div>
            </Navigation>


            )

        //  }




  }


}



function mapStateToProps (state, ownProps){

  console.log("MSTP called wrapperx"+util.inspect(state, false, null));

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
export default connect(mapStateToProps, mapDispatchToProps)(PlayerScreen);
