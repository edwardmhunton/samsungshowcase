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
                 onBlur={() => this.setState({active: false})}>
        <div class={'item main_menu_item ' + (this.state.active ? 'item-focus' : '')}>{this.props.title}</div>
      </Focusable>
    );
  }
};

export default class Menu extends React.Component {
  constructor() {
    super();
    this._lastFocus = null;
    this.titles = ["Film 1", "Film 2","Film 3","Film 4","Film 5","Film 6","Film 7","Film 8","Film 9","Film 10","Film 11","Film 12","Film 13","Film 14","Film 15"];

  }

  componentDidMount() {
    const width = (Math.floor(this.content.scrollWidth /  this.content.clientWidth ) * this.content.clientWidth) + this.content.clientWidth + this.paddingValue;
    this.content.overflow = 'hidden';
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
      console.log('MENU')
      const items = this.content.getElementsByClassName('item');
      const offsetHeight = items[0].offsetHeight - 440;
      const target = this.content.getElementsByClassName("vt-list");
      target[0].style.top = offsetHeight*index+"px";
          console.log('MENU'+offsetHeight*index);
    }

    /*if (this.content) {
      console.log("FOC");
      const items = this.content.getElementsByClassName('item');
      const offsetWidth = items[0].offsetWidth + this.paddingValue;
      this.content.scrollLeft = offsetWidth * index;
        console.log("FOC"+  this.content.scrollLeft);
    }*/

    this._lastFocus = index;
  }

  render() {
    return (
      <div class={"contentgroup " + (this.props.visible ? '' : 'fading-out')}>

        <div class="content" ref={(content) => { this.content = content}}>
          <VerticalList class="vt-list"
            style={{ display: 'block', position:'absolute', top: '0', width: '200px'}}


                          onFocus={(index) => this.onFocus(index)}
                          onBlur={() => { this._lastFocus = null }}>
                          {this.titles.map((title, i) =>
                              <ToogleItem title={title} />
                            )}
          </VerticalList>
        </div>
      </div>
    );
  }
}
