import React from 'react';
import ListItem from './list_item';

const ListUIComponent = ({action, navDefault, itemDefault, title, style}) => (

              <div style={style} className="component">

               <div>{title}</div>
               <ListItem style={style} itemDefault={itemDefault} navDefault={navDefault} action={action} />

              </div>

)


export default ListUIComponent;
