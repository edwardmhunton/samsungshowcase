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
import EpgUIComponent from '../ui_components/epg/epg_ui_component';
import LogoUIComponent from '../ui_components/logo/logo_ui_component';


import MainmenuUIComponent from '../ui_components/mainmenu/mainmenu_ui_component';

import ModalUIComponent from '../ui_components/modal';


import genericKeys from './genericKeys.js';
import CommonMethods from './../utils/utils.js';

import styles from './styles/styles.js';



import util from 'util';
//import Navigation, { VerticalList, HorizontalList } from 'react-key-navigation';
import Navigation, { VerticalList, HorizontalList } from '../navigation';


class TvGuideScreen extends React.Component {

  constructor(props) {

    super(props);


        this.state = this.props;

        this.transitionToPlayer = CommonMethods.transitionToPlayer.bind(this);
        this.transitionToScreen = CommonMethods.transitionToScreen.bind(this);






  }

  advance(){
      this.setState({hold: false});
  }

  componentDidMount() {

    window.addEventListener('keydown', genericKeys.onKeyDown.bind(this));

  }

  componentWillUnmount () {

    window.removeEventListener('keydown', genericKeys.onKeyDown.bind(this));
  }


  render(){


    return (

      <div className="screen" id={this.props.id}  >
      <ModalUIComponent style={this.state.modalActive ? styles.modal_active : styles.modal_blur} />
      <Navigation >
      <div id="content">
      <VerticalList >
        <LogoUIComponent />
      <MainmenuUIComponent itemDefault={this.state.menu.main_menu_id} navDefault={this.state.menu.menu_id === 0 ? true :  false} onEnterDown={this.transitionToScreen} />
      <HorizontalList>
            <VerticalList>
                <EpgUIComponent />
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


export default connect(mapStateToProps, mapDispatchToProps)(TvGuideScreen);
