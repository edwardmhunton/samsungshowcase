import React, { Component} from 'react';

//redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as contentActions from '../../actions/contentActions';
import * as menuActions from '../../actions/menuActions';

import { push } from 'react-router-redux';

//routing
import {Redirect} from 'react-router-dom';

import history from '../../history.js';

//ui_components
import MainmenuUIComponent from '../ui_components/mainmenu/mainmenu_ui_component';




import util from 'util';
//import Navigation, { VerticalList, HorizontalList } from 'react-key-navigation';
import Navigation, { VerticalList, HorizontalList } from '../navigation';


class SettingsScreen extends React.Component {

  constructor(props) {

    super(props);

        /*this.state = {
          hold: true,
          player:false,
          navigation: {'timeout':'', 'back':'', 'enter':''}
        };*/
        this.state = this.props;

        this.transitionToPlayer = this.transitionToPlayer.bind(this);
        this.transitionToScreen = this.transitionToScreen.bind(this);





  }

  advance(){
      this.setState({hold: false});
  }

  componentDidMount() {


  }

  componentWillUnmount () {

      this.loadInterval = false;
  }

  transitionToPlayer(videoMetaData, menu_id, menu_item_id ){

    console.log("videoMetaData: "+videoMetaData);

      //console.log('trans to P: '+util.inspect(this, false, null));

            //this.setState({player: true});
            this.setState({content: videoMetaData});
            history.push('/player');
            this.props.actions.setContent(videoMetaData);
            this.props.actions.setPreviousMenuId(menu_id);
            this.props.actions.setPreviousMenuItemId(menu_item_id);




  }

  transitionToScreen(screen, main_menu_id){
    console.log("Tran to screen"+screen);
    console.log("Tran to screen"+main_menu_id);
    this.props.actions.setMainMenuId(main_menu_id);
    history.push('/'+screen);
  }

  render(){

    console.log("The State in Home:"+util.inspect(this.state, false, null));
    console.log("The Props in Home:"+util.inspect(this.props, false, null));

  //  <ListUIComponent {return this.props.menu.menu_id === 2 ? navDefault: ""} action={this.transitionToPlayer} />

//if(this.state.player === false) {
//<HeroUIComponent navDefault = {this.state.menu_id === 1 ? navDefault: ""} action={this.transitionToPlayer} />


    return (

      <div className="screen" id={this.props.id}  >
        <Navigation >
      <div id="content">

      <VerticalList >

      <MainmenuUIComponent itemDefault={this.state.menu.main_menu_id} navDefault={this.state.menu.menu_id === 0 ? true :  false} onEnterDown={this.transitionToScreen} />


      <HorizontalList>

                  <VerticalList >



                  </VerticalList>



      </HorizontalList>

        </VerticalList>

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

     actions: bindActionCreators({...contentActions, ...menuActions}, dispatch)

});


export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
