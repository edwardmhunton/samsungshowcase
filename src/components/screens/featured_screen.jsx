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
import LogoUIComponent from '../ui_components/logo/logo_ui_component';

import MainmenuUIComponent from '../ui_components/mainmenu/mainmenu_ui_component';
import ListUIComponent from '../ui_components/list/list_ui_component';

import ShowUIComponent from '../ui_components/show/show_ui_component';
import ModalUIComponent from '../ui_components/modal';

import VideoFirst from '../ui_components/player/video_first';



// stylesheet

import styles from './styles/styles.js';

import genericKeys from './genericKeys.js';
import CommonMethods from './../utils/utils.js';



import util from 'util';

import Navigation, { VerticalList, HorizontalList } from '../navigation';


class FeaturedScreen extends React.Component {

  constructor(props) {

    super(props);


        this.state = this.props;


        this.transitionToPlayer = CommonMethods.transitionToPlayer.bind(this);
        this.transitionToScreen = CommonMethods.transitionToScreen.bind(this);

        this.setFeaturedActiveFalse = this.setFeaturedActiveFalse.bind(this);
        this.setFeaturedActiveTrue = this.setFeaturedActiveTrue.bind(this);

  }

  setFeaturedActiveFalse(){
    console.log('setFeaturedActive False');
    this.setState({ featuredActive: false});

  }
  setFeaturedActiveTrue(){
    console.log('setFeaturedActive True');
    this.setState({ featuredActive: true});

  }


  componentDidMount() {

    this.setState({ featuredActive: false});
    window.addEventListener('keydown', genericKeys.onKeyDown.bind(this));

  }

  componentWillUnmount () {

    window.removeEventListener('keydown', genericKeys.onKeyDown.bind(this));

  }



  render(){

    console.log("test in featured");



    return (

      <div className="screen" style={styles.featured.screen} id={this.props.id}  >
      <ModalUIComponent style={this.state.modalActive ? styles.modal_active : styles.modal_blur} />
      <VideoFirst content={this.state.content.content[0]} />
      <Navigation >
          <div id="content" className={this.state.hudVisible} >

          <VerticalList >
          <LogoUIComponent />
          <MainmenuUIComponent onBlur={this.setFeaturedActiveTrue} itemDefault={this.state.menu.main_menu_id} navDefault={this.state.menu.menu_id === 0 ? true :  false} onEnterDown={this.transitionToScreen} />


            <HorizontalList>

                    <VerticalList onBlur={this.setFeaturedActiveFalse} >

                        <div style={this.state.featuredActive ? styles.featured.list_block_active : styles.featured.list_block} >
                          <ShowUIComponent  content={this.state.content.content[0]} />
                          <ListUIComponent  content={this.state.content} cell_style={'style_featured'} categoryId={0} style={styles.featured.list} itemDefault={this.state.menu.menu_item_id} navDefault={this.state.menu.menu_id === 1 ? true :  false} action={this.transitionToPlayer} title={'NEW EPISODES'} />
                          <ListUIComponent  content={this.state.content} cell_style={'style_featured'} categoryId={0} style={styles.featured.list} itemDefault={this.state.menu.menu_item_id} navDefault={this.state.menu.menu_id === 2 ? true :  false} action={this.transitionToPlayer} title={'MOST POPULAR SHOWS'} />
                        </div>
                  </VerticalList>
            </HorizontalList>
          </VerticalList>
          </div>
      </Navigation>
    </div>



    )

}


}

function mapStateToProps (state, ownProps){

  console.log("MSTP called home"+util.inspect(state, false, null));

  return {
      menu: state.menu,
      content: state.content
  }



};

const mapDispatchToProps = (dispatch)=>({

     actions: bindActionCreators({...contentActions, ...menuActions}, dispatch)

});


export default connect(mapStateToProps, mapDispatchToProps)(FeaturedScreen);
