import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { push } from 'react-router-redux';
import history from '../../history.js';
import util from 'util';
import ReactTV from 'react-tv';

import { Focusable, VerticalList } from 'react-key-navigation';

import MenuItem from './menu_item';
//import Button from './menu_button';

/*const Image = ({focused, setFocus, focusPath}) => {
  focused = (focused) ? 'focused' : 'unfocused'
  return (
    <img
      className={focused}
      onClick={() => { setFocus() }}
      src='https://pbs.twimg.com/profile_images/922900899365732352/Ahcv30XE_400x400.jpg'
    />
  )
}*/

/*const FocusableItem = withFocusable(MenuItem)
const FocusableButton = withFocusable(Button)
const FocusableImage = withFocusable(Image)*/
class ToogleItem extends React.Component {
  constructor() {
    super();

    this.state = {
      active: false
    }
  }

  render() {
    return (
      <Focusable onFocus={() => this.setState({active: true})}
                 onBlur={() => this.setState({active: false})}>
        <div class={'item ' + (this.state.active ? 'item-focus' : '')}></div>
      </Focusable>
    );
  }
};



class Menu extends React.Component {



  constructor(props) {
    super(props);
    this.state = {hold: true};
    this._lastFocus = null;
  }

  onFocus(index) {
    console.log(index, this._lastFocus);
    if (this._lastFocus === index) {
      return;
    }

    if (this.props.onFocus) {
      this.props.onFocus();
    }

    if (this.content) {
      const items = this.content.getElementsByClassName('item');
      const offsetWidth = items[0].offsetWidth + 20;
      this.content.scrollLeft = offsetWidth * index;
    }

    this._lastFocus = index;
  }





  render(){





        return (

        <div className="component menu" >

        <p>Menu</p>
          <VerticalList class="hz-list"
                          style={{overflow: 'hidden', display: 'block'}}
                          onFocus={(index) => this.onFocus(index)}
                          onBlur={() => { this._lastFocus = null }}>

          <MenuItem focusPath='item-1'/>
          <MenuItem focusPath='item-2'/>
          <MenuItem focusPath='item-3'/>
          <MenuItem focusPath='item-4'/>
          <MenuItem focusPath='item-5'/>
          <MenuItem focusPath='item-6'/>

        </VerticalList>
            <div>

          </div>

        </div>

        )


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
export default connect(mapStateToProps)(Menu);
