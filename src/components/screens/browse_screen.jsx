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

import ModalUIComponent from '../ui_components/modal';




import styles from './styles/styles.js';

import genericKeys from './genericKeys.js';
import CommonMethods from './../utils/utils.js';



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

        this.transitionToPlayer = CommonMethods.transitionToPlayer.bind(this);
        this.transitionToScreen = CommonMethods.transitionToScreen.bind(this);

        this.categorySwitch = this.categorySwitch.bind(this);
        this.setBrowseActiveFalse = this.setBrowseActiveFalse.bind(this);
        this.setBrowseActiveTrue = this.setBrowseActiveTrue.bind(this);

  }

  advance(){
      this.setState({hold: false});
  }

  componentDidMount() {
    this.setState({ browseActive: false});
    window.addEventListener('keydown', genericKeys.onKeyDown.bind(this));


  }

  componentWillUnmount () {

    window.removeEventListener('keydown', genericKeys.onKeyDown.bind(this));

  }

  componentWillReceiveProps(newProps) {
      this.setState({
        category: newProps.category
      })
    }


  categorySwitch(category_id){
    console.log("switch browse category "+category_id);
    this.props.actions.setBrowseCategoryId(category_id);

  }
  setBrowseActiveFalse(){
    console.log('setBrowseActive False');
    this.setState({ browseActive: false});

  }
  setBrowseActiveTrue(){
    console.log('setBrowseActive True');
    this.setState({ browseActive: true});

  }
  onKeyDown(event){
    console.log('keycaughts'+event.code);
    switch (event.code) {
      case 'ArrowRight':

        //this.setState({ browseActive: true});

      case 'Enter':


        break;
      default:

    }
  }

  render(){


    return (

      <div className="screen" style={styles.browse.screen} id={this.props.id}  >
      <ModalUIComponent style={this.state.modalActive ? styles.modal_active : styles.modal_blur} />
      <Navigation >
      <div id="content">

      <VerticalList >
      <LogoUIComponent />
      <MainmenuUIComponent itemDefault={this.state.menu.main_menu_id} navDefault={this.state.menu.menu_id === 0 ? true :  false} onEnterDown={this.transitionToScreen} />


      <HorizontalList >

              <div style={this.state.browseActive ? styles.browse.sidebar_blur : styles.browse.sidebar}>

                <SidebarUIComponent  onBlur={this.setBrowseActiveFalse} onFocus={this.setBrowseActiveTrue} itemDefault={this.state.category.category_id} navDefault={this.state.menu.menu_id === 0 ? true :  false} action={this.categorySwitch} />

              </div>

                  <VerticalList onBlur={this.setBrowseActiveFalse} onFocus={this.setBrowseActiveTrue}>

                    <div style={this.state.browseActive ? styles.browse.list_block_active : styles.browse.list_block} >

                    <ListUIComponent cell_style={'style_browse'} categoryId={this.state.category.category_id} style={styles.browse.list} itemDefault={this.state.menu.menu_item_id} navDefault={this.state.menu.menu_id === 2 ? true :  false} action={this.transitionToPlayer} />

                    <ListUIComponent cell_style={'style_browse'} categoryId={this.state.category.category_id} style={styles.browse.list} itemDefault={this.state.menu.menu_item_id} navDefault={this.state.menu.menu_id === 2 ? true :  false} action={this.transitionToPlayer} />

                    <ListUIComponent cell_style={'style_browse'} categoryId={this.state.category.category_id}  style={styles.browse.list} itemDefault={this.state.menu.menu_item_id} navDefault={this.state.menu.menu_id === 2 ? true :  false} action={this.transitionToPlayer} />
                  </div>

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

  console.log("MSTP called Browse"+util.inspect(state, false, null));

  return {
      menu: state.menu,
      category: state.category
  }



};

const mapDispatchToProps = (dispatch) =>({

     actions: bindActionCreators({...contentActions, ...menuActions, ...categoryActions}, dispatch)

});


export default connect(mapStateToProps, mapDispatchToProps)(BrowseScreen);
