import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as contentActions from '../../actions/contentActions';


import history from '../../history.js';

import util from 'util';


import LoginUIComponent from '../ui_components/login/login_ui_component';

import Navigation, { VerticalList, HorizontalList } from '../navigation';







class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hold: true};

    this.handleSubmit = this.handleSubmit.bind(this);


  }

  handleSubmit(event){

        this.setState({hold: false});

}

  render(){

      if(this.state.hold){

        return (

          <Navigation>
              <LoginUIComponent onSubmit={() => { this.handleSubmit() }} />
          </Navigation>

    )



      } else {


          history.push('/login');

        return (

          <Redirect to="/featured" push />

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

  export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
