import React from 'react';

import EpgTile from './epg_tile';

import styles from './styles.js';

/*<div style={styles.time} onEnterDown={onEnterDown}>{meta.duration}</div>
<div style={styles.show_name} >{meta.programme_name}</div>
*/

const EpgSchedule = ({schedule}) => (


                <ul style={styles.schedule}>
                  {schedule.channel.schedule.map(function (subarray, a) {

                    return (
                      <EpgTile width={subarray.duration*18} meta={subarray}/>
                    )


                  })}


                </ul>



)


export default EpgSchedule;
