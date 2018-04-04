import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { push } from 'react-router-redux';
import history from '../../history.js';
import util from 'util';



const Button = ({focused, setFocus, focusPath}) => {
  focused = (focused) ? 'btn-focused' : 'btn-unfocused'
  return (
    <div
      className={focused}
    >
      Log on console
    </div>
  )
}

/**
 * Create and export a connected component
 */
export default Button;
