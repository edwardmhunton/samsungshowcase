import React from 'react';
import ListItem from './list_item';

const ListUIComponent = ({action, navDefault, itemDefault}) => (

              <div className="component list">

            
              <ListItem itemDefault={itemDefault} navDefault={navDefault} action={action} />

              </div>

)


export default ListUIComponent;
