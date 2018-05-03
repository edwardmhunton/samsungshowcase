import React, { Component} from 'react';

//redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as contentActions from '../../../actions/contentActions';
import * as menuActions from '../../../actions/menuActions';


import history from '../../../history.js';

import styles from './styles.js';

//import Background from './images/video_image.png';


import Video from './video/small.mp4';



import util from 'util';
//import Navigation, { VerticalList, HorizontalList } from 'react-key-navigation';
import Navigation, { VerticalList, HorizontalList } from '../../navigation';


class VideoFirst extends React.Component {

  constructor(props) {

    super(props);






  }

  // <img src={ require('./images/video_image.png') } />



  render(){

  //  styles.video_first.backgroundImage = `url(${Background})`;

  let vid = `${Video}`;


    return (

      <div style={styles.video_first}  >
        <video src={vid} type="video/mp4" autoplay width='1960px' loop></video>

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


export default connect(mapStateToProps, mapDispatchToProps)(VideoFirst);
