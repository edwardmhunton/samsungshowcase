import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import history from '../history.js';






class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hold: true};
  }



  render(){

    return (
                <div className="component splash">
                <h4>Player Screen</h4>

                </div>
              )








    }
  }

const mapStateToProps = ()=>({

});

/**
 * Create and export a connected component
 */
export default connect(mapStateToProps)(Player);
