import React from 'react';
import ReactTV from 'react-tv';

import util from 'util';

import Cell from './cell';


import { Focusable, VerticalList, HorizontalList } from '../../navigation';

class ToogleItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: this.props.active
    }

  }

  render() {
    return (
      <Focusable active={this.state.active}
                 onFocus={() => this.setState({active: true})}
                 onBlur={() => this.setState({active: false})}
                 onEnterDown={(index) => this.props.onEnterDown(index)} >
        <div class={'item list_item ' + (this.state.active ? 'item-focus' : '')}><Cell style={'style_1'} /></div>
      </Focusable>
    );
  }
};

export default class ListItem extends React.Component {
  constructor(props) {
    super();
    //this.state = {
    //  active: this.props.active,

  //  }
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
    console.log("HOZ MENU MADE FOCUS");
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

  render() {

    console.log("List item props: "+util.inspect(this.props, false, null));


    return (
      <div class={"contentgroup " + (this.props.visible ? '' : 'fading-out')}>
        <div class="content" ref={(content) => { this.content = content}} >
          <HorizontalList itemDefault={this.props.itemDefault} navDefault={this.props.navDefault}class="hz-list"
                          style={{overflow: 'hidden', display: 'block', whiteSpace: 'nowrap'}}
                          onFocus={(index) => this.onFocus(index)}
                          onBlur={() => { this._lastFocus = null }}
                          onEnterDown={(index) => this.onEnterDown(this.props.itemDefault)} >

                          {this.titles.map((title, i) =>
                            <ToogleItem active={i === this.props.itemDefault && this.props.navDefault ? this.props.navDefault : false} onEnterDown={() => this.props.action(title, 2, i)}  title={title} />
                            )}

          </HorizontalList>
        </div>
      </div>
    );
  }
}
