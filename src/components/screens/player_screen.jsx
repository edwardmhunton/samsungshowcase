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
    //this._lastFocus = null;

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




  render() {

    console.log("The State:"+util.inspect(this.state, false, null));
    console.log("The Props:"+util.inspect(this.props, false, null));




        //  if(this.state.hold){



            return (
              <Navigation >
                  <div id="content">

                <HorizontalList>


                      <PlayerWrapper content={this.props.content.content} />



                </HorizontalList>
              </div>
            </Navigation>


            )

        //  }




  }


}



function mapStateToProps (state, ownProps){

  console.log("MSTP called wrapper"+util.inspect(state.content, false, null));

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
