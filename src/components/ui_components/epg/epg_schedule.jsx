import React from 'react';

import EpgTile from './epg_tile';

/*<div style={styles.time} onEnterDown={onEnterDown}>{meta.duration}</div>
<div style={styles.show_name} >{meta.programme_name}</div>
*/

const EpgSchedule = ({schedule}) => (


                <div >
                  {schedule.map(function (subarray, a) {

                    return (
                      <EpgTile />
                    )


                  })}


                </div>



)


export default EpgSchedule;
