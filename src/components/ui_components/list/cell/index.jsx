import React from 'react';

import Style1 from './style_1';
import Style2 from './style_2';
import Style3 from './style_3';
import Style4 from './style_4';

import styles from './styles';

const Cell = ({style, categoryId}) => {




console.log("firstcat");





switch (style) {
  case 'style_1':
      return   (<Style1 categoryId={categoryId}/>)
  case 'style_2':
      return   (<Style2 />)
  case 'style_3':
      return   (<Style3 />)
  case 'style_4':
      return   (<Style4 />)
    break;
  default:

}






}


export default Cell;
