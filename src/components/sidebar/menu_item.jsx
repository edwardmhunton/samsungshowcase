import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { push } from 'react-router-redux';
import history from '../../history.js';
import util from 'util';



class MenuItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {hold: true};
  }


  render(){


        return (

        <div class="component menu_item" >Menu Item</div>

        )


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
export default connect(mapStateToProps)(MenuItem);
