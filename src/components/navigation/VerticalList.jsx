import Focusable from './Focusable.jsx';
import util from 'util';


class VerticalList extends Focusable {
  defaultChange = false;
  getNextFocus(direction, focusedIndex) {

    /*if(this.props.itemDefault && !this.defaultChange && direction === 'down'){
      focusedIndex = focusedIndex+this.props.itemDefault;
      this.defaultChange = true;
    } else if(this.props.itemDefault && !this.defaultChange && direction === 'up') {
      focusedIndex = focusedIndex-this.props.itemDefault;
      this.defaultChange = true;
    }*/

    if(this.props.itemDefault && !this.defaultChange){
      focusedIndex = this.props.itemDefault;
      this.defaultChange = true;
    }


    if (direction !== 'up' && direction !== 'down') {
      return super.getNextFocus(direction, this.indexInParent);
    }

  //  let nextFocus = null;
      console.log("VERTLIST");
      let nextFocus = null;

    if (direction === 'up') {
      nextFocus = this.previousChild(focusedIndex);
    } else if (direction === 'down') {
      nextFocus = this.nextChild(focusedIndex);
    }

    if (!nextFocus) {
      return super.getNextFocus(direction, this.indexInParent);
    }

    if (nextFocus.isContainer()) {
      return nextFocus.getDefaultFocus();
    }

    return nextFocus;
  }
/*  getDefaultChild() {
    console.log("DEF CHILD vert");
    if(this.props.itemDefault){
      return this.props.itemDefault;
    } else {
        return 0;
    }
  }*/
  /*  getDefaultFocus() {
      console.log("DEF focus vert");
      if (this.isContainer())
        return this.children[this.props.itemDefault].getDefaultFocus();

      return this;
    }*/


}

export default VerticalList;
