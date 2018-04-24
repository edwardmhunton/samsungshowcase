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
    console.log("main memu props"+util.inspect(this.props.styles, focus, null));
    console.log("styles.mainmenu_item"+util.inspect(styles.mainmenu_item, focus, null));
    const style = Object.assign({}, styles.mainmenu_item, this.props.styles );
      console.log("style"+util.inspect(style, focus, null));
    return (
      <Focusable active={this.state.active}
                 onFocus={() => this.setState({active: true})}
                 onBlur={() => this.setState({active: false})}
                 onEnterDown={(index) => this.props.onEnterDown(index)} >
                 <div style={style} class={'item menu_item ' + (this.state.active ? 'item-focus' : '')}>{this.props.title}</div>
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

    console.log("List item props: "+util.inspect(this.props, false, null));


    return (
      <div class={"contentgroup " + (this.props.visible ? '' : 'fading-out')}>
        <div class="content" ref={(content) => { this.content = content}} >
          <HorizontalList itemDefault={this.props.itemDefault} navDefault={this.props.navDefault}class="hz-list"
                          style={{overflow: 'hidden', display: 'block', whiteSpace: 'nowrap'}}
                          onFocus={(index) => this.onFocus(index)}
                          onBlur={() => { this._lastFocus = null }}
                          onEnterDown={(index) => this.onEnterDown(this.props.itemDefault)} >


                            <ToogleItem  styles={styles.logo} title={'logo'} />
                            <ToogleItem  styles={styles.featured} title={'featured'} />
                            <ToogleItem  styles={styles.browse} title={'browse'} />
                            <ToogleItem  styles={styles.tvguide} title={'tvguide'} />
                            <ToogleItem  styles={styles.settings} title={'settings'} />


          </HorizontalList>
        </div>
      </div>
    );
  }
}
