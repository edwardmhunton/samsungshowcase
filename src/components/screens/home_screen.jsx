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
          player:false,
          navigation: {'timeout':'', 'back':'', 'enter':''}
        };

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

  transitionToPlayer(videoMetaData){

    console.log("videoMetaData: "+videoMetaData);

      //console.log('trans to P: '+util.inspect(this, false, null));

            this.setState({player: true});
            this.setState({content: videoMetaData});
            this.props.actions.setContent(videoMetaData);




  }

  render(){

if(this.state.player === false) {

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



  } else {




            if(this.state.player === true){
              this.state.player = false;
              return (
                    <Redirect to="/player" push />
              )
            }



  }

}


}

function mapStateToProps (state, ownProps) {


  return {

        content: state.content

  }

};

const mapDispatchToProps = (dispatch)=>({

    actions: bindActionCreators(contentActions, dispatch)

});


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
