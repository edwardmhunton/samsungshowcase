import React, { Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

/**
 * Each entry in the QuestionList is represtented by a QuestionListItem, which displays high-level information
 * about a question in a format that works well in a list
 //{ui_components.map(component=><ComponentWrapper key={ui_components.question_id} {...question}/>)}

 */




 const Comps = ({ui_components, family, callback}) => (
   ui_components.map((Component, index) => {
          return (

                <Component key={index} callback={callback} style={family} />

          )
     })
 );

/**
 * Display all questions in an array provided to it as a simple list
 */
class Screen extends React.Component {



  switchScreen(){

    console.log("CVB")

  }
  render(){

      return (
        <div className="screen" id={this.props.id} styles={this.props.styles.family} >
          <Comps ui_components = {this.props.ui_components} family={this.props.styles.family} />
        </div>
      )
    }
}

/**
 * Get the list of questions from the application's state
 * It is populated by a ../sagas/fetch-question(s)-saga.
 */
 const mapStateToProps = (state, ownProps) => {
   return {
     ...state
   }
 }

/**
 * Create and export a connected component
 */
export default connect(mapStateToProps)(Screen);
