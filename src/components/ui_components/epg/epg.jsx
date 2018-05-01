import React from 'react';
import ReactTV from 'react-tv';

import util from 'util';

import { Focusable, Grid } from '../../navigation';

import styles from './styles.js';

import data from './data.js';

import EpgTile from './epg_tile';

import EpgChannel from './epg_channel';

class ToogleItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: this.props.active
    }

  }

  render() {

    let width = this.props.meta.duration*18;
    styles.programme.width = width+'px';
    styles.programme_active.width = width+'px';


    //this.state.active ? style = Object.assign({}, styles.programme_active, styles) : '';
//        <div class={'item menu_item ' + (this.state.active ? 'item-focus' : '')}><EpgTile meta={this.props.meta}/></div>

//console.log("TILE"+util.inspect(style, false, null));
    return (
      <Focusable active={this.state.active}
                 onFocus={() => this.setState({active: true})}
                 onBlur={() => this.setState({active: false})}
                  >
        <div style={this.state.active ? styles.programme_active : styles.programme} class={'item ' + (this.state.active ? 'item-focus' : '')}><EpgTile styles={styles} meta={this.props.meta}/></div>
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

  /*  {this.data.channels.map(function (subarray, a) {

                  return subarray.channel.schedule.map(function (subsub, b) {
                    //console.log('b '+b);
                    return ( b === 0 ? <ToogleItem meta={subsub} ></ToogleItem> : <ToogleItem meta={subsub} ></ToogleItem>)

                  });
                })} */

  render() {

    console.log("List item props: "+util.inspect(this.props, false, null));



/*return subarray.channel.schedule.map(function (subsub, b) {
  //console.log('b '+b);
  return ( b === 0 ? <ToogleItem meta={subsub} ></ToogleItem> : <ToogleItem meta={subsub} ></ToogleItem>)

});*/




    return (
      <div class={"contentgroup " + (this.props.visible ? '' : 'fading-out')}>
        <div class="content" ref={(content) => { this.content = content}} >
          <div>Times </div>
          <div style={styles.epg_container} >
          <Grid rows={this.data.channels.length} columns={1}>


            {this.data.channels.map(function (subarray, a) {

              return (
                <div style={styles.channel_block} >
                <EpgChannel schedule={subarray} />
                </div>
              )


            })}



        </Grid>
        </div>
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
