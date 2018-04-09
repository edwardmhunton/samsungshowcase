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
        <div class={'item list_item ' + (this.state.active ? 'item-focus' : '')}>TI</div>
      </Focusable>
    );
  }
};

export default class ListItem extends React.Component {
  constructor() {
    super();
    this._lastFocus = null;
    this.paddingValue = 20;
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
      const items = this.content.getElementsByClassName('item');
      const offsetWidth = items[0].offsetWidth + this.paddingValue;
      this.content.scrollLeft = offsetWidth * index;
    }

    this._lastFocus = index;
  }

  render() {
    return (
      <div class={"contentgroup " + (this.props.visible ? '' : 'fading-out')}>
        <div class="content" ref={(content) => { this.content = content}}>
          <HorizontalList class="hz-list"
                          style={{overflow: 'hidden', display: 'block', whiteSpace: 'nowrap'}}
                          onFocus={(index) => this.onFocus(index)}
                          onBlur={() => { this._lastFocus = null }}>
            <ToogleItem/>
            <ToogleItem>2</ToogleItem>
            <ToogleItem>3</ToogleItem>
            <ToogleItem>4</ToogleItem>
            <ToogleItem>5</ToogleItem>
            <ToogleItem>6</ToogleItem>
            <ToogleItem>7</ToogleItem>
            <ToogleItem>8</ToogleItem>
            <ToogleItem>9</ToogleItem>
            <ToogleItem>10</ToogleItem>
            <ToogleItem>11</ToogleItem>
            <ToogleItem>12</ToogleItem>
              <ToogleItem>13</ToogleItem>
              <ToogleItem>14</ToogleItem>
              <ToogleItem>15</ToogleItem>
              <ToogleItem>16</ToogleItem>
              <ToogleItem>17</ToogleItem>
              <ToogleItem>18</ToogleItem>
              <ToogleItem>19</ToogleItem>
              <ToogleItem>20</ToogleItem>
              <ToogleItem>21</ToogleItem>
              <ToogleItem>22</ToogleItem>
              <ToogleItem>23</ToogleItem>
              <ToogleItem>24</ToogleItem>
          </HorizontalList>
        </div>
      </div>
    );
  }
}
