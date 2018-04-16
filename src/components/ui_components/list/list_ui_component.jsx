import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { push } from 'react-router-redux';
import history from '../../../history.js';
import util from 'util';

import ListItem from './list_item';

import Navigation, { VerticalList, HorizontalList } from 'react-key-navigation';


//import List from './List';

class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: null,
      hold: true
    }
  }

  changeFocusTo(index) {
    console.log("changeFocusTo"+index);
    this.setState({active: index});
  }

  onBlurLists() {
      console.log("BLUR LIST");
    this.setState({active: null});
  }

  onFocusLists() {
      console.log("FOC LIST");
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

    console.log("MSTP called list"+util.inspect(this.state, false, null));
    console.log("MSTP called list"+util.inspect(this.props, false, null));

          if(this.state.hold){

            let i = 1;

            return (
              <div className="component list">


                <HorizontalList  navDefault={this.props.navDefault} onBlur={() => this.onBlurLists()} onFocus={() => this.onFocusLists()}>

                  <ListItem active={this.props.navDefault} action={this.props.action} title={"Blockbusters"} visible={this.state.active !== null ? i >= this.state.active : true}/>

                </HorizontalList>

              </div>
            )

          }




  }


}



const mapStateToProps = (state, ownProps) => {
  return {
    ...state
  }
}

/**
 * Create and export a connected component
 */
export default connect(mapStateToProps)(List);
