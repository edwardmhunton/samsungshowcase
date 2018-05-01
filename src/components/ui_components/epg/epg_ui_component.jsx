import React from 'react';

import Epg from './epg.jsx';

import styles from './styles.js';

const EpgUIComponent = ({onEnterDown}) => (


                <div style={styles.epg_container} >
                    <Epg onEnterDown={onEnterDown} />


                </div>



)


export default EpgUIComponent;
