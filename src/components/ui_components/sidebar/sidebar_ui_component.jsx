import React from 'react';
import Menu from './menu';

const SidebarUIComponent = ({action}) => (

              <div className="component sidebar">

              <h4>Sidebar</h4>
              <Menu action={action} />

              </div>

)


export default SidebarUIComponent;
