import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { push } from 'react-router-redux';
import history from '../../history.js';
import util from 'util';

import Menu from './menu';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {hold: true};
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



            return (
              <div className="component sidebar">
              Sidebar
              <Menu />
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
