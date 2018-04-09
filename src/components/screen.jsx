import React, { Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import util from 'util';

import Hero from './hero/hero';
import List from './list/list';
import Sidebar from './sidebar/sidebar';

import Navigation, { VerticalList, HorizontalList } from 'react-key-navigation'


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




  render(){

    console.log("BIG LOGS"+ util.inspect(this.props.ui_components, false, null));

    if(this.props.ui_components[0].params.component_type === 'sidebar'){ /// rubbish code - change!!

      return (

      <Navigation>
        <div className="screen" id={this.props.id} styles={this.props.styles.family} >
        <div id="content">
        <HorizontalList>

                    <Sidebar />

                  <div id="main">

                    <VerticalList>
                      <Hero />
                      <List />
                      </VerticalList>

                  </div>


        </HorizontalList>
        </div>
      </div>
      </Navigation>

    )

    } else {

      return (

            <div className="screen" id={this.props.id} styles={this.props.styles.family} >
            <div id="content">

                          <Comps  ui_components = {this.props.ui_components} family={this.props.styles.family} />

            </div>
          </div>


        )

    }




    }
}

/**
 * Get the list of questions from the application's state
 * It is populated by a ../sagas/fetch-question(s)-saga.
 */
 //state, ownProps
 const mapStateToProps = ()=>({

 });

/**
 * Create and export a connected component
 */
export default connect(mapStateToProps)(Screen);
