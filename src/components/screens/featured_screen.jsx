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
import ListUIComponent from '../ui_components/list/list_ui_component';

// stylesheet

import styles from './styles/styles.js';

//import Background from './assets/16x9_small.png';




import util from 'util';
//import Navigation, { VerticalList, HorizontalList } from 'react-key-navigation';
import Navigation, { VerticalList, HorizontalList } from '../navigation';


class FeaturedScreen extends React.Component {

  constructor(props) {

    super(props);


        this.state = this.props;

        this.transitionToPlayer = this.transitionToPlayer.bind(this);





  }



  componentDidMount() {


  }

  componentWillUnmount () {

      this.loadInterval = false;
  }

  transitionToPlayer(videoMetaData, menu_id, menu_item_id ){
    this.setState({content: videoMetaData});
    history.push('/player');
    this.props.actions.setContent(videoMetaData);
    this.props.actions.setPreviousMenuId(menu_id);
    this.props.actions.setPreviousMenuItemId(menu_item_id);
  }

  transitionToScreen(screen){
    console.log("Tran to screen"+screen);
    history.push('/'+screen);
  }

  render(){

    console.log("Styles: "+util.inspect(styles, false, null));
  //  console.log("Background: "+util.inspect(Background, false, null));
    /*let styles = {
      backgroundImage: `url(${Background})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }*/

//style = Object.assign({}, styles, style);


    return (

      <div className="screen" style={styles.featured.screen} id={this.props.id}  >
      <Navigation >
          <div id="content">
            <HorizontalList>

                    <VerticalList >
                          <MainmenuUIComponent itemDefault={0} navDefault={this.state.menu.menu_id === 0 ? true :  false} onEnterDown={this.transitionToScreen} />

                        <div style={styles.featured.list_block} >
                          <ListUIComponent  style={styles.featured.list} itemDefault={this.state.menu.menu_item_id} navDefault={this.state.menu.menu_id === 1 ? true :  false} action={this.transitionToPlayer} title={'NEW EPISODES'} />
                          <ListUIComponent  style={styles.featured.list} itemDefault={this.state.menu.menu_item_id} navDefault={this.state.menu.menu_id === 2 ? true :  false} action={this.transitionToPlayer} title={'MOST POPULAR SHOWS'} />
                        </div>
                  </VerticalList>
            </HorizontalList>
          </div>
      </Navigation>
    </div>



    )

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


export default connect(mapStateToProps, mapDispatchToProps)(FeaturedScreen);
