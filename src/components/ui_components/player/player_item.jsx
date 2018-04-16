import React from 'react';
import ReactTV from 'react-tv';

import { Focusable, VerticalList, HorizontalList } from 'react-key-navigation';

class ToogleItem extends React.Component {
  constructor() {
    super();

    this.state = {
      active: false
    }


    this.paddingValue = 30;
  }

  render() {
    return (
      <Focusable onFocus={() => this.setState({active: true})}
                 onBlur={() => this.setState({active: false})}
                 onEnterDown={(index) => this.props.onEnterDown(index)} >
        <div class={'item main_menu_item ' + (this.state.active ? 'item-focus' : '')}>{this.props.title}</div>
      </Focusable>
    );
  }
};

export default class PlayerItem extends React.Component {
  constructor(props) {
    super();
    this._lastFocus = null;
    this.state = {
      hold:true
    }

  }

  onKeyDown(event){
    switch (event.code) {
      case 'Backspace':

      this.props.actions.previous();

      case 'Enter':


        break;
      default:

    }
  }

  onKeyUp(){
    console.log('u: '+event);
  }

  componentDidMount() {
  /*  const width = (Math.floor(this.content.scrollWidth /  this.content.clientWidth ) * this.content.clientWidth) + this.content.clientWidth + this.paddingValue;
    this.content.overflow = 'hidden';
    if (this.content.getElementsByClassName('hz-list')[0]) {
      this.content.getElementsByClassName('hz-list')[0].style.width = width + 'px';
    }*/
    window.addEventListener('keydown', this.onKeyDown.bind(this));
    window.addEventListener('keyup', this.onKeyUp.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.onKeyUp.bind(this));
    window.removeEventListener('keydown', this.onKeyDown.bind(this));
  }

  onEnterDown(index) {
    console.log("Enter captured: "+util.inspect(this.props, false, null));
    this.setState({hold: false});


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
    return (
      <div class={"contentgroup " + (this.props.visible ? '' : 'fading-out')}>

        <div class="content" ref={(content) => { this.content = content}}>
          <VerticalList class="vt-list"
            style={{ display: 'block', position:'absolute', top: '0', width: '200px', marginLeft:'45px', marginTop:'50px'}}


                          onFocus={(index) => this.onFocus(index)}
                          onBlur={() => { this._lastFocus = null }}

                          >

                              <ToogleItem />

          </VerticalList>
        </div>
      </div>
    );
  }
}
