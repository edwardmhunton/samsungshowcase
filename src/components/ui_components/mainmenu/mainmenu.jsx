import React from 'react';
import ReactTV from 'react-tv';

import util from 'util';

import { Focusable, VerticalList, HorizontalList } from '../../navigation';

import styles from './styles.js';

class ToogleItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: this.props.active
    }

  }

  render() {
   console.log("main memu props"+util.inspect(this.props, focus, null));
  //  console.log("styles.mainmenu_item"+util.inspect(styles.mainmenu_item, focus, null));
    let style = Object.assign({}, styles.mainmenu_item, this.props.styles );

    this.state.active ? style = Object.assign({}, styles.item_focus, style) : '';

      console.log("menustyle"+util.inspect(style, focus, null));
    return (
      <Focusable active={this.state.active}
                 onFocus={() => this.setState({active: true})}
                 onBlur={() => this.setState({active: false})}
                 onEnterDown={(index) => this.props.onEnterDown(this.props.title, this.props.id)} >
                 <div style={style} class={'item menu_item ' + (this.state.active ? 'item_focus' : '')}>{this.props.title}</div>
      </Focusable>
    );
  }
};

export default class MainMenu extends React.Component {
  constructor(props) {
    super();

    this._lastFocus = null;
    this.paddingValue = 10;
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
      //this.content.scrollLeft = offsetWidth * index;
        console.log("FOC"+  this.content.scrollLeft);
    }

    this._lastFocus = index;
  }

  render() {

    console.log("MenuProps: "+util.inspect(this.props, false, null));


    return (
      <div class={"contentgroup " + (this.props.visible ? '' : 'fading-out')}>
        <div class="content" ref={(content) => { this.content = content}} >
          <HorizontalList itemDefault={this.props.itemDefault} navDefault={this.props.navDefault} class="hz-list"

                          onFocus={(index) => this.onFocus(index)}
                          onBlur={() => { this._lastFocus = null }}
                          onEnterDown={(index) => this.onEnterDown(this.props.itemDefault)} >

                            <ToogleItem  active={this.props.itemDefault === 1 ? true : false} onEnterDown={this.props.onEnterDown} styles={styles.featured} id={1} title={'FEATURED'} />
                            <ToogleItem  active={this.props.itemDefault === 2 ? true : false} onEnterDown={this.props.onEnterDown} styles={styles.browse} id={2} title={'BROWSE'} />
                            <ToogleItem  active={this.props.itemDefault === 3 ? true : false} onEnterDown={this.props.onEnterDown} styles={styles.tvguide} id={3} title={'TV GUIDE'} />
                            <ToogleItem  active={this.props.itemDefault === 4 ? true : false} onEnterDown={this.props.onEnterDown} styles={styles.settings} id={4} title={'SETTINGS'} />


          </HorizontalList>
        </div>
      </div>
    );
  }
}
