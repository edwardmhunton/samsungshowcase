import React from 'react';
import ListItem from './list_item';

import styles from './styles.js';

const ListUIComponent = ({action, navDefault, itemDefault, title, style, categoryId, cell_style, content}) => (

               <div style={style} className="component">

               <div style={styles.list_title}>{title}</div>
               <ListItem content={content} cell_style={cell_style} categoryId={categoryId} style={styles} itemDefault={itemDefault} navDefault={navDefault} action={action} />

              </div>

)


export default ListUIComponent;
