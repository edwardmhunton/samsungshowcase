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
import LoginUIComponent from '../ui_components/login/login_ui_component';

import util from 'util';
import Navigation, { VerticalList, HorizontalList } from 'react-key-navigation';

class HomeScreen extends React.Component {

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


  }

  componentWillUnmount () {

      this.loadInterval = false;
  }

  render(){

if(this.state.hold) {

    return (

      <Navigation>

      </Navigation>



    )

  } else {

      history.push('/login');

    return (

            <Redirect to='/home' push />

            )
  }



  }


}

const mapStateToProps = ()=>({

});

export default connect(mapStateToProps)(HomeScreen);
