import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { push } from 'react-router-redux';
import history from '../history.js';
import util from 'util';
import { Button } from 'react-bootstrap';

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
  this.loadInterval =  setTimeout(function(){
    self.advance()
  }, 1000);
  }

  componentWillUnmount () {

      this.loadInterval = false;
  }



  render() {



          if(this.state.hold){



            return (
              <div className="component splash">
              <h4>Splash / Loader</h4>

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
const mapStateToProps = ()=>({

});


//const mapStateToProps = (state, ownProps) => {
//  return {
  //  ...state
//  }
//}

/**
 * Create and export a connected component
 */
export default connect(mapStateToProps)(Splash);
