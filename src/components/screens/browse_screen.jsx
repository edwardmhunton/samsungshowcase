import React, { Component} from 'react';

//redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as contentActions from '../../actions/contentActions';
import * as menuActions from '../../actions/menuActions';
import * as categoryActions from '../../actions/categoryActions';

import { push } from 'react-router-redux';

//routing
import {Redirect} from 'react-router-dom';

import history from '../../history.js';

//ui_components
import SidebarUIComponent from '../ui_components/sidebar/sidebar_ui_component';
import Menu from '../ui_components/sidebar/menu';

import ListUIComponent from '../ui_components/list/list_ui_component';
import MainmenuUIComponent from '../ui_components/mainmenu/mainmenu_ui_component';
import LogoUIComponent from '../ui_components/logo/logo_ui_component';



import styles from './styles/styles.js';



import util from 'util';
//import Navigation, { VerticalList, HorizontalList } from 'react-key-navigation';
import Navigation, { VerticalList, HorizontalList } from '../navigation';


class BrowseScreen extends React.Component {

  constructor(props) {

    super(props);

        /*this.state = {
          hold: true,
          player:false,
          navigation: {'timeout':'', 'back':'', 'enter':''}
        };*/
        this.state = this.props;
      //this.state = {};

        this.transitionToPlayer = this.transitionToPlayer.bind(this);
        this.transitionToScreen = this.transitionToScreen.bind(this);
        this.categorySwitch = this.categorySwitch.bind(this);





  }

  advance(){
      this.setState({hold: false});
  }

  componentDidMount() {


  }

  componentWillUnmount () {

      this.loadInterval = false;
  }

  componentWillReceiveProps(newProps) {
      this.setState({
        category: newProps.category
      })
    }

  transitionToPlayer(videoMetaData, menu_id, menu_item_id ){

    console.log("videoMetaData: "+videoMetaData);

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

  categorySwitch(category_id){
    console.log("switch browse category "+category_id);
    this.props.actions.setBrowseCategoryId(category_id);

  }

  render(){

    console.log("The State in Browse:"+util.inspect(this.state, false, null));
    console.log("The Props in Browse:"+util.inspect(this.props, false, null));

  //  <ListUIComponent {return this.props.menu.menu_id === 2 ? navDefault: ""} action={this.transitionToPlayer} />

//if(this.state.player === false) {
//<HeroUIComponent navDefault = {this.state.menu_id === 1 ? navDefault: ""} action={this.transitionToPlayer} />


    return (

      <div className="screen" style={styles.browse.screen} id={this.props.id}  >
        <Navigation >
      <div id="content">

      <VerticalList>
      <LogoUIComponent />
      <MainmenuUIComponent itemDefault={this.state.menu.main_menu_id} navDefault={this.state.menu.menu_id === 0 ? true :  false} onEnterDown={this.transitionToScreen} />


      <HorizontalList>

                <SidebarUIComponent itemDefault={this.state.category.category_id} navDefault={this.state.menu.menu_id === 0 ? true :  false} action={this.categorySwitch} />


                <div >

                  <VerticalList >


                    <ListUIComponent categoryId={this.state.category.category_id} style={styles.browse.list} itemDefault={this.state.menu.menu_item_id} navDefault={this.state.menu.menu_id === 2 ? true :  false} action={this.transitionToPlayer} />

                    <ListUIComponent categoryId={this.state.category.category_id} style={styles.browse.list} itemDefault={this.state.menu.menu_item_id} navDefault={this.state.menu.menu_id === 2 ? true :  false} action={this.transitionToPlayer} />

                    <ListUIComponent categoryId={this.state.category.category_id}  style={styles.browse.list} itemDefault={this.state.menu.menu_item_id} navDefault={this.state.menu.menu_id === 2 ? true :  false} action={this.transitionToPlayer} />


              </VerticalList>

                </div>

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

  console.log("MSTP called Browse"+util.inspect(state, false, null));

  return {
      menu: state.menu,
      category: state.category
  }



};

const mapDispatchToProps = (dispatch)=>({

     actions: bindActionCreators({...contentActions, ...menuActions, ...categoryActions}, dispatch)

});


export default connect(mapStateToProps, mapDispatchToProps)(BrowseScreen);
