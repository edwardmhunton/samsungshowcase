import React from 'react';
import ReactTV from 'react-tv';
import VideoManager from '../player/player_manager';
import util from 'util';



import { Focusable, VerticalList, HorizontalList } from '../../navigation';

class ToogleItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: this.props.active
    }


    this.paddingValue = 30;
  }

  render() {
    return (
      <Focusable active={this.props.active}
                 onFocus={() => this.setState({active: true})}
                 onBlur={() => this.setState({active: false})}
                 onEnterDown={(index) => this.props.onEnterDown(index)} >
        <div class={'item main_menu_item ' + (this.state.active ? 'item-focus' : '')}>{this.props.title}</div>
      </Focusable>
    );
  }
};

export default class Menu extends React.Component {
  constructor(props) {
    super();
    this._lastFocus = null;
    this.titles = ["Entertainment", "Comedy","Sports","Kids"];

    this.state = {
      hold:true
    }

  }

  componentDidMount() {
    const width = (Math.floor(this.content.scrollWidth /  this.content.clientWidth ) * this.content.clientWidth) + this.content.clientWidth + this.paddingValue;
    this.content.overflow = 'hidden';
    if (this.content.getElementsByClassName('hz-list')[0]) {
      this.content.getElementsByClassName('hz-list')[0].style.width = width + 'px';
    }
  }

  onEnterDown(index) {
    console.log("Enter captured: "+util.inspect(this.props, false, null));

    this.setState({hold: false});


  }

  onFocus(index) {
    console.log(index, this._lastFocus);
    console.log("VERT MENU MADE FOCUS");

    if (this._lastFocus === index) {
      return;
    }

    if (this.props.onFocus) {
      this.props.onFocus();
    }

    if (this.content) {
      console.log('MENUx')
    /*  const items = this.content.getElementsByClassName('item');
      const offsetHeight = items[index].offsetHeight - 440;
      const target = this.content.getElementsByClassName("vt-list");
      target[0].style.top = offsetHeight*index+"px";
      console.log('MENU'+offsetHeight*index);*/
    }

    this._lastFocus = index;
  }

  render() {

    console.log("menu props: "+util.inspect(this.props, false, null));

    return (
      <div class={"contentgroup " + (this.props.visible ? '' : 'fading-out')}>

        <div class="content" ref={(content) => { this.content = content}}>
          <VerticalList  itemDefault={this.props.itemDefault} navDefault={this.props.navDefault} class="vt-list"
            style={{ display: 'block', width: '200px', marginLeft:'0px', marginTop:'5px'}}


                          onFocus={(index) => this.onFocus(index)}
                          onBlur={() => { this._lastFocus = null }}
                          onEnterDown={(index) => this.onEnterDown(this.props.itemDefault)} >

                          {this.titles.map((title, i) =>
                              <ToogleItem active={i === this.props.itemDefault && this.props.navDefault ? this.props.navDefault : false} onEnterDown={() => this.props.action(i)}  title={title} />
                            )}
          </VerticalList>
        </div>
      </div>
    );
  }
}
