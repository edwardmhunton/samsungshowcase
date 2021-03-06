import React from 'react';
import Focusable from './Focusable.jsx';

class HorizontalList extends Focusable {

  getNextFocus(direction, focusedIndex) {
    console.log("HOZLIST");
    if (direction !== 'left' && direction !== 'right') {
      return super.getNextFocus(direction, this.indexInParent);
    }

    let nextFocus = null;
    if (direction === 'left') {
      nextFocus = this.previousChild(focusedIndex);
      if(this.children[focusedIndex].props.onBlur) this.children[focusedIndex].props.onBlur();
    } else if (direction === 'right') {
      nextFocus = this.nextChild(focusedIndex);
      if(this.children[focusedIndex].props.onBlur) this.children[focusedIndex].props.onBlur();
    }

    if (!nextFocus) {
      return super.getNextFocus(direction, this.indexInParent);
    }

    if (nextFocus.isContainer()) {
      return nextFocus.getDefaultFocus();
    }

    return nextFocus;
  }

  render() {
    const {focused, rootNode, navDefault, onFocus, onBlur, ...props} = this.props;
    return <div {...props}/>
  }
}

export default HorizontalList;
