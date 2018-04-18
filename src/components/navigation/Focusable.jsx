import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Focusable extends Component {
  treePath = [];
  children = [];
  indexInParent = 0;
  focused = null;

  constructor(props, context) {
    super(props, context);
    console.log("My FOCUSs");
    //this.indexInParent = this.props.indexInParent;
  }

  isContainer() {
    return this.children.length > 0;
  }

  getParent() {
    return this.context.parentFocusable;
  }

  addChild(child) {
    //console.log(child);
    console.log("addCHILDs");
    this.children.push(child);
    return this.children.length - 1;
  }

  removeChild(child) {
    this.children.splice(child.indexInParent, 1);

    if (this.props.rootNode) {
      const currentFocusedPath = this.context.navigationComponent.currentFocusedPath;
      const index = currentFocusedPath.indexOf(child);

      if (index >= 0) {
        const next = currentFocusedPath[index - 1].getDefaultFocus();
        this.context.navigationComponent.focus(next);
      }
    }
  }

  getDefaultChild() {
    console.log("DEF CHILD");
    if(this.props.active){
      this.indexInParent;
    } else {
        return 0;
    }

  }

  getNextFocusFrom(direction) {
    return this.getNextFocus(direction, this.indexInParent);
  }

  getNextFocus(direction, focusedIndex) {
    if (!this.getParent()) {
      return null;
    }

    return this.getParent().getNextFocus(direction, focusedIndex);
  }

  getDefaultFocus() {
    console.log("DEF FOCUS");
    if (this.isContainer())
      return this.children[this.getDefaultChild()].getDefaultFocus();

    return this;
  }

  buildTreePath() {
    this.treePath.unshift(this);

    let parent = this.getParent();
    while (parent) {
      this.treePath.unshift(parent);
      parent = parent.getParent();
    }
  }

  focus() {
    this.treePath.map(component => {
      if (component.props.onFocus)
        component.props.onFocus(this.indexInParent);
    });
  }

  blur() {
    if (this.props.onBlur) {
      this.props.onBlur(this.indexInParent);
    }
  }

  nextChild(focusedIndex) {
    if (this.children.length === focusedIndex + 1) {
      return null;
    }

    return this.children[focusedIndex + 1];
  }

  previousChild(focusedIndex) {
    if (focusedIndex - 1 < 0) {
      return null;
    }

    return this.children[focusedIndex - 1];
  }

  // React Methods
  getChildContext() {
    return {parentFocusable: this};
  }

  componentWillMount() {
    if (this.props.rootNode) {
      this.context.navigationComponent.setRoot(this);
    }

    if (this.context.parentFocusable) {
      this.buildTreePath();
      this.indexInParent = this.getParent().addChild(this);
      console.log("this.indexInParent: "+this.indexInParent);
      if(this.props.active){
        console.log("focxy");
        this.focus();
      }
      //let test = 5;
      //this.getParent().addChild(this);
    }

    if (this.props.navDefault) {
      this.context.navigationComponent.setDefault(this);
    }
  }

  componentWillUnmount() {
    if (this.context.parentFocusable) {
      this.getParent().removeChild(this);
    }
  }

  render() {
    const {focused, rootNode, navDefault, onFocus, onBlur, ...props} = this.props;
    return <span {...props}/>
  }
}

Focusable.contextTypes = {
  parentFocusable: PropTypes.object,
  navigationComponent: PropTypes.object,
};

Focusable.childContextTypes  = {
  parentFocusable: PropTypes.object,
};

Focusable.defaultProps = {
  rootNode: false,
  navDefault: false,
  onFocus: PropTypes.function,
  onBlur: PropTypes.function
}

export default Focusable;
