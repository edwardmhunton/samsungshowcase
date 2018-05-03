import React from 'react';

import Style1 from './style_1';
import Style2 from './style_2';
import Style3 from './style_3';
import Style4 from './style_4';
import StyleFeatured from './style_featured';
import StyleBrowse from './style_browse';

import styles from './styles';

const Cell = ({style, categoryId, active}) => {









switch (style) {
  case 'style_1':
      return   (<Style1 active={active} categoryId={categoryId} />)
  case 'style_2':
      return   (<Style2 />)
  case 'style_3':
      return   (<Style3 />)
  case 'style_4':
      return   (<Style4 />)
  case 'style_featured':
        return (<StyleFeatured active={active} />)
 case 'style_browse':
        return (<StyleBrowse categoryId={categoryId} active={active} />)
    break;
  default:

}






}


export default Cell;
