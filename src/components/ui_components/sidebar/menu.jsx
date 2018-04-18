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
      <Focusable active={this.props.active} onFocus={() => this.setState({active: true})}
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
    this.titles = ["Film 1", "Film 2","Film 3","Film 4","Film 5","Film 6","Film 7","Film 8","Film 9","Film 10","Film 11","Film 12","Film 13","Film 14","Film 15"];

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
    console.log("MENU MADE FOCUS");

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
          <VerticalList  newDefault={2} navDefault={this.props.navDefault} class="vt-list"
            style={{ display: 'block', position:'absolute', top: '0', width: '200px', marginLeft:'45px', marginTop:'50px'}}


                          onFocus={(index) => this.onFocus(index)}
                          onBlur={() => { this._lastFocus = null }}

                          >
                          {this.titles.map((title, i) =>
                              <ToogleItem active={i === 2 ? this.props.navDefault : false} onEnterDown={() => this.props.action(title, 0)}  title={title} />
                            )}
          </VerticalList>
        </div>
      </div>
    );
  }
}
