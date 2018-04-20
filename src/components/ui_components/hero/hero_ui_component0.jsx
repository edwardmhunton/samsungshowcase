import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { push } from 'react-router-redux';
import history from '../../../history.js';
import util from 'util';

import HeroItem from './hero_item';

import Navigation, { VerticalList, HorizontalList } from '../../navigation';

//import List from './List';

class Hero extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: null,
      hold: true
    }
  }

  changeFocusTo(index) {
    this.setState({active: index});
  }

  onBlurLists() {
    this.setState({active: null});
  }



  advance(){
      this.setState({hold: false});
  }

  componentDidMount() {

    var self = this;

  }

  componentWillUnmount () {


  }

  onFocus(index) {
    console.log(index, this._lastFocus);
    console.log("HERO MADE FOCUS");

    if (this._lastFocus === index) {
      return;
    }

    if (this.props.onFocus) {
      this.props.onFocus();
    }

    if (this.content) {
      console.log('MENU')
      const items = this.content.getElementsByClassName('item');
      const offsetHeight = items[0].offsetHeight - 440;
      const target = this.content.getElementsByClassName("vt-list");
      target[0].style.top = offsetHeight*index+"px";
          console.log('MENU'+offsetHeight*index);
    }

    this._lastFocus = index;
  }



  render() {

    //console.log("MSTP called hero"+util.inspect(this.state, false, null));
  //  console.log("MSTP called hero"+util.inspect(this.props, false, null));



          if(this.state.hold){

            let i = 1;

            return (

              <div className="component hero">

                <HorizontalList  navDefault={this.props.navDefault} onBlur={() => this.onBlurLists()} onFoucs={() => this.onFocus()}>

                  <HeroItem title={""} active={this.props.navDefault} action={this.props.action} onFocus={() => this.changeFocusTo(i)} visible={this.state.active !== null ? i >= this.state.active : true}/>

                </HorizontalList>



              </div>


            )

          }




  }


}



const mapStateToProps = (state, ownProps) => {
  return {
    ...state
  }
}

/**
 * Create and export a connected component
 */
export default connect(mapStateToProps)(Hero);
