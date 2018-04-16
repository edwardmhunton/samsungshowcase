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

        /*this.state = {
          hold: true,
          player:false,
          navigation: {'timeout':'', 'back':'', 'enter':''}
        };*/

        this.transitionToPlayer = this.transitionToPlayer.bind(this);





  }

  advance(){
      this.setState({hold: false});
  }

  componentDidMount() {


  }

  componentWillUnmount () {

      this.loadInterval = false;
  }

  transitionToPlayer(videoMetaData, menu_id){

    console.log("videoMetaData: "+videoMetaData);

      //console.log('trans to P: '+util.inspect(this, false, null));

            //this.setState({player: true});
            this.setState({content: videoMetaData});
            history.push('/player');
            this.props.actions.setContent(videoMetaData);
            this.props.actions.setPreviousMenuId(menu_id);




  }

  render(){

    console.log("The State:"+util.inspect(this.state, false, null));
    console.log("The Props:"+util.inspect(this.props, false, null));

  //  <ListUIComponent {return this.props.menu.menu_id === 2 ? navDefault: ""} action={this.transitionToPlayer} />

//if(this.state.player === false) {
//<HeroUIComponent navDefault = {this.state.menu_id === 1 ? navDefault: ""} action={this.transitionToPlayer} />


    return (

      <div className="screen" id={this.props.id}  >
        <Navigation >
      <div id="content">
      <HorizontalList>

                <SidebarUIComponent navDefault={this.props.menu.menu_id === 0 ? true :  false} action={this.transitionToPlayer} />


                <div >

                  <VerticalList >
                    <HeroUIComponent  navDefault={this.props.menu.menu_id === 1 ? true :  false} action={this.transitionToPlayer} />

                    <ListUIComponent  navDefault={this.props.menu.menu_id === 2 ? true :  false} action={this.transitionToPlayer} />
                  </VerticalList>

                </div>


      </HorizontalList>

      </div>
      </Navigation>
    </div>



    )



  //} else {




        /*    if(this.state.player === true){
              this.state.player = false;
              return (
                    <Redirect to="/player" push />
              )
            }*/



//  }

}


}

function mapStateToProps (state, ownProps){

  console.log("MSTP called home"+util.inspect(state, false, null));

  return {
      menu: state.menu
  }



};

const mapDispatchToProps = (dispatch)=>({

    actions: bindActionCreators(contentActions, dispatch)

});


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
