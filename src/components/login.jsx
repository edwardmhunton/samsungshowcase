import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import history from '../history.js';






class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hold: true};
  }

  handleSubmit(event){

      event.preventDefault();

      console.log('sub')

      this.setState({hold: false});




  }

  render(){

console.log("hold"+this.state.hold);

//component login

      if(this.state.hold){

        return (

        <div className="component login mx-auto">
            Login <br/>
            <form onSubmit={this.handleSubmit.bind(this)}   >

            <p>Enter your details</p>
            <input type='text'/>
            <input type='submit' />

            </form>


      </div>

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
export default connect(mapStateToProps)(Login);
