import React from 'react';
import ListItem from './list_item';

import styles from './styles.js';

const ListUIComponent = ({action, navDefault, itemDefault, title, style, categoryId}) => (

               <div style={style} className="component">

               <div style={styles.list_title}>{title}</div>
               <ListItem categoryId={categoryId} style={styles} itemDefault={itemDefault} navDefault={navDefault} action={action} />

              </div>

)


export default ListUIComponent;
