import React from 'react';

import EpgSchedule from './epg_schedule';

import styles from './styles';


const EpgChannel = ({schedule}) => (


                <div style={styles.channel}>

                    <div style={styles.channel_logo}></div><EpgSchedule schedule={schedule}/>


                </div>



)


export default EpgChannel;
