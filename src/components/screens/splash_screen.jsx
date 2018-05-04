import React, { Component} from 'react';

//redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as contentActions from '../../actions/contentActions';
import { push } from 'react-router-redux';

//routing
import {Redirect} from 'react-router-dom';
import history from '../../history.js';

//ui_components
import SplashUIComponent from '../ui_components/splash/splash_ui_component';

import util from 'util';
import Navigation, { VerticalList, HorizontalList } from '../navigation';

class SplashScreen extends React.Component {

  constructor(props) {

    super(props);

        this.state = {
          hold: true,
          navigation: {'timeout':'', 'back':'', 'enter':''}
        };



  }

  advance(){
      this.setState({hold: false});
  }

  componentDidMount() {

      var self = this;
      this.loadInterval =  setTimeout(function(){
        console.log("interval");
        self.advance()
      }, 1000);
  }

  componentWillUnmount () {

      this.loadInterval = false;
  }

  render(){

if(this.state.hold === true) {

    return (

      <Navigation>
          <SplashUIComponent />
      </Navigation>



    )

  } else {

      history.push('/Spash');

    return (

            <Redirect to='/login' push />

            )
  }



  }


}

function mapStateToProps (state, ownProps) {

  return {

        content: state.content

  }

};
const mapDispatchToProps = (dispatch)=>({

    actions: bindActionCreators(contentActions, dispatch)

});

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
