import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { push } from 'react-router-redux';
import history from '../../history.js';
import util from 'util';

import Menu from './menu';

import Navigation, { VerticalList, HorizontalList } from 'react-key-navigation'


//import List from './List';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: null,
      hold: true
    }
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



          if(this.state.hold){

            let i = 1;

            return (
              <div className="component sidebar">


                <VerticalList onBlur={() => this.onBlurLists()}>


                    <Menu title={""} onFocus={() => this.changeFocusTo(i)} visible={this.state.active !== null ? i >= this.state.active : true}/>

                </VerticalList>

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
export default connect(mapStateToProps)(Sidebar);
