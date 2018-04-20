import React from 'react';
import Menu from './menu';

const SidebarUIComponent = ({action, navDefault, itemDefault}) => (

              <div className="component sidebar">

            
              <Menu itemDefault={itemDefault} navDefault={navDefault} action={action} />

              </div>

)


export default SidebarUIComponent;
