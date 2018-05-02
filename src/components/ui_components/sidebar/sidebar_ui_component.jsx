import React from 'react';
import Menu from './menu';

import styles from './styles.js';

const SidebarUIComponent = ({action, navDefault, itemDefault}) => (

              <div style={styles.side_menu}>


              <Menu itemDefault={itemDefault} navDefault={navDefault} action={action} />

              </div>

)


export default SidebarUIComponent;
