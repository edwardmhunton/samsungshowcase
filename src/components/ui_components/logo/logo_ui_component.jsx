import React from 'react';

import styles from './styles.js';



const LogoUIComponent = ({visible}) => (

               <div style={styles} className={"component "+visible}>
               LOGO
               </div>

)


export default LogoUIComponent;
