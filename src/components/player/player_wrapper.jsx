import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as contentActions from '../../actions/contentActions';
import { Redirect } from 'react-router-dom';
import { push } from 'react-router-redux';
import history from '../../history.js';
import util from 'util';

import Navigation, { VerticalList, HorizontalList, Focusable } from 'react-key-navigation'


//import List from './List';

class PlayerWrapper extends React.Component {

  constructor(props) {
    super(props);

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

  componentDidMount() {

    var self = this;

  }

  componentWillUnmount () {


  }



  render() {

    console.log("The State:"+util.inspect(this.state, false, null))



        //  if(this.state.hold){



            return (

              <div className="component player_wrapper">

                      <h4>Player Wrapper {this.props.content}</h4>

              </div>


            )

        //  }




  }


}



function mapStateToProps (state, ownProps){

  console.log("MSTP called wrapper"+util.inspect(state.content.content, false, null));

  return {
      content: state.content.content
  }



};

const mapDispatchToProps = (dispatch)=>({

    actions: bindActionCreators(contentActions, dispatch)

});

/**
* Create and export a connected component
*/
export default connect(mapStateToProps, mapDispatchToProps)(PlayerWrapper);
