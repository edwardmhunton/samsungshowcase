import React from 'react';
import ListItem from './list_item';

const ListUIComponent = ({action, navDefault, itemDefault, title}) => (

              <div className="component list">

               <div>{title}</div>
               <ListItem itemDefault={itemDefault} navDefault={navDefault} action={action} />

              </div>

)


export default ListUIComponent;
