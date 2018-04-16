import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import history from '../../history.js';

import LoginUIComponent from '../ui_components/login/login_ui_component';

import Navigation, { VerticalList, HorizontalList } from 'react-key-navigation';







class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hold: true};

    this.handleSubmit = this.handleSubmit.bind(this);


  }

  handleSubmit(event){

      console.log('sub');



      this.setState({hold: false});




  }

  render(){

console.log("hold"+this.state.hold);

//component login

      if(this.state.hold){

        return (

          <Navigation>
              <LoginUIComponent onSubmit={() => { this.handleSubmit() }} />
          </Navigation>

    )



      } else {

        console.log("made it");

          history.push('/login');

        return (

          <Redirect to="/home" push />

        )

      }

    }

  }

const mapStateToProps = ()=>({

});

/**
 * Create and export a connected component
 */
export default connect(mapStateToProps)(LoginScreen);
