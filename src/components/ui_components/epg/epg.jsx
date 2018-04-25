import React from 'react';
import ReactTV from 'react-tv';

import util from 'util';

import { Focusable, Grid } from '../../navigation';

import styles from './styles.js';

import data from './data.js';

class ToogleItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: this.props.active
    }

  }

  render() {
   //console.log("data: "+util.inspect(data.channels[0].channel.scedule[0].programme.duration, focus, null));
  //  console.log("styles.mainmenu_item"+util.inspect(styles.mainmenu_item, focus, null));
    //let style = Object.assign({}, styles.mainmenu_item, this.props.styles );

  //  this.state.active ? style = Object.assign({}, styles.item_focus, style) : '';

      //console.log("style"+util.inspect(style, focus, null));
    //  onEnterDown={(index) => this.props.onEnterDown(this.props.title)}
    return (
      <Focusable active={this.state.active}
                 onFocus={() => this.setState({active: true})}
                 onBlur={() => this.setState({active: false})}
                  >
                 <div class={'item menu_item ' + (this.state.active ? 'item-focus' : '')}>{this.props.title}</div>
      </Focusable>
    );
  }
};

export default class Epg extends React.Component {
  constructor(props) {
    super();

    this._lastFocus = null;
    this.paddingValue = 10;
    this.data = data;
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
      /*console.log("FOC");
      const items = this.content.getElementsByClassName('item');
      const offsetWidth = items[0].offsetWidth + this.paddingValue;
      //this.content.scrollLeft = offsetWidth * index;
        console.log("FOC"+  this.content.scrollLeft);*/
    }

    this._lastFocus = index;
  }

  render() {

    console.log("List item props: "+util.inspect(this.props, false, null));


    return (
      <div class={"contentgroup " + (this.props.visible ? '' : 'fading-out')}>
        <div class="content" ref={(content) => { this.content = content}} >

          <Grid rows={this.data.channels.length} columns={this.data.channels[0].channel.schedule.length}>

            {this.data.channels.map(function (subarray) {
                          return subarray.channel.schedule.map(function (subsub) {
                            return (
                              <ToogleItem title={subsub.programme_name}>

                              </ToogleItem>
                            )
                          });
                        })}
        </Grid>
        </div>
      </div>
    );
  }
}
/*{Array.from(Array(this.data.channels).keys()).map((v, i) => {
  <ToogleItem key={i} onFocus={() => console.log('focus ' + i)} onBlur={() => console.log('blur ' + i)} onEnterDown={() => console.log('enter ' + i)}>
    Element {i}
  </ToogleItem>
 })}
//Array(10000).keys()
/*{Array.from(Array(100).keys()).map((v, i) => {
  return (
    <ToogleItem key={i} onFocus={() => console.log('focus ' + i)} onBlur={() => console.log('blur ' + i)} onEnterDown={() => console.log('enter ' + i)}>
      Element {i}
    </ToogleItem>
  );
})}*/
