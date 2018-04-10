import React from 'react';
import ReactTV from 'react-tv';

import { Focusable, VerticalList, HorizontalList } from 'react-key-navigation';

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
        <div class={'item list_item ' + (this.state.active ? 'item-focus' : '')}>{this.props.title}</div>
      </Focusable>
    );
  }
};

export default class ListItem extends React.Component {
  constructor() {
    super();
    this._lastFocus = null;
    this.paddingValue = 10;
    this.titles = ["Film 1", "Film 2","Film 3","Film 4","Film 5","Film 6","Film 7","Film 8","Film 9","Film 10","Film 11","Film 12","Film 13","Film 14","Film 15"];

  }



  componentDidMount() {
    const width = (Math.floor(this.content.scrollWidth /  this.content.clientWidth ) * this.content.clientWidth) + this.content.clientWidth + 20;
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
      console.log("FOC");
      const items = this.content.getElementsByClassName('item');
      const offsetWidth = items[0].offsetWidth + this.paddingValue;
      this.content.scrollLeft = offsetWidth * index;
        console.log("FOC"+  this.content.scrollLeft);
    }

    this._lastFocus = index;
  }

  /*  {this.titles.map((title, i) =>
      <ToogleItem title={title} onFocus={() => this.changeFocusTo(i)} visible={this.state.active !== null ? i >= this.state.active : true}/>
    )}

    */

  render() {
    return (
      <div class={"contentgroup " + (this.props.visible ? '' : 'fading-out')}>
        <div class="content" ref={(content) => { this.content = content}}>
          <HorizontalList class="hz-list"
                          style={{overflow: 'hidden', display: 'block', whiteSpace: 'nowrap'}}
                          onFocus={(index) => this.onFocus(index)}
                          onBlur={() => { this._lastFocus = null }}>

                          {this.titles.map((title, i) =>
                              <ToogleItem title={title} />
                            )}

          </HorizontalList>
        </div>
      </div>
    );
  }
}
