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
import SidebarUIComponent from '../ui_components/sidebar/sidebar_ui_component';
import Menu from '../ui_components/sidebar/menu';

import HeroUIComponent from '../ui_components/hero/hero_ui_component';
import ListUIComponent from '../ui_components/list/list_ui_component';




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

      <div className="screen" id={this.props.id}  >
        <Navigation >
      <div id="content">
      <HorizontalList>

                <SidebarUIComponent action={this.transitionToPlayer} />


                <div >

                  <VerticalList>
                    <HeroUIComponent />
                    <ListUIComponent />
                  </VerticalList>

                </div>


      </HorizontalList>

      </div>
      </Navigation>
    </div>



    )



  }

}


}

const mapStateToProps = ()=>({

});

export default connect(mapStateToProps)(HomeScreen);
