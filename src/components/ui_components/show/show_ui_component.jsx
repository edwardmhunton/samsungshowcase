import React from 'react';

import styles from './styles.js';



const ShowUIComponent = ({content, visible}) => (


            <div style={styles.show} className={visible}>
               <div style={styles.show_logo}></div>
               <div style={styles.show_title}>{content.title}</div>
               <div style={styles.show_description}>{content.summary}</div>
            </div>


)


export default ShowUIComponent;
