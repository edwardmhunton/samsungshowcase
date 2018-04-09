import React from 'react';
import ReactTV from 'react-tv';

import { Focusable, VerticalList } from 'react-key-navigation';

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
                 onBlur={() => this.setState({active: false})}>
        <div class={'item main_menu_item ' + (this.state.active ? 'item-focus' : '')}>TI</div>
      </Focusable>
    );
  }
};

export default class Menu extends React.Component {
  constructor() {
    super();
    this._lastFocus = null;
  }

  componentDidMount() {
    const width = (Math.floor(this.content.scrollWidth /  this.content.clientWidth ) * this.content.clientWidth) + this.content.clientWidth + this.paddingValue;
    if (this.content.getElementsByClassName('hz-list')[0]) {
      this.content.getElementsByClassName('hz-list')[0].style.width = width + 'px';
    }
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

  render() {
    return (
      <div class={"contentgroup " + (this.props.visible ? '' : 'fading-out')}>

        <div class="content" ref={(content) => { this.content = content}}>
          <VerticalList

                          onFocus={(index) => this.onFocus(index)}
                          onBlur={() => { this._lastFocus = null }}>
            <ToogleItem>TI</ToogleItem>
            <ToogleItem>TI</ToogleItem>
            <ToogleItem>TI</ToogleItem>
            <ToogleItem>TI</ToogleItem>
            <ToogleItem>TI</ToogleItem>
            <ToogleItem>TI</ToogleItem>
            <ToogleItem>TI</ToogleItem>
            <ToogleItem>TI</ToogleItem>
            <ToogleItem>TI</ToogleItem>
          </VerticalList>
        </div>
      </div>
    );
  }
}
