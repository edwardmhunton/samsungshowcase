import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { push } from 'react-router-redux';
import history from '../history.js';
import util from 'util';

class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.state = {hold: true};
  }


  advance(){
      this.setState({hold: false});
  }

  componentDidMount() {

    var self = this;
      this.loadInterval = setTimeout(
          self.advance(),
            5000
        );
  }

  componentWillUnmount () {

      this.loadInterval = false;
  }



  render() {



          if(this.state.hold){

            

            return (
              <div className="splash">
              Splash
              </div>
            )

          } else {

            history.push('/login');

            return (

              <Redirect to="/login" push />

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
export default connect(mapStateToProps)(Splash);
