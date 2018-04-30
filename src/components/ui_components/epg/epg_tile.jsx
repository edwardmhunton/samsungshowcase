import React from 'react';

//import styles from './styles';

const EpgTile = ({onEnterDown, meta, styles}) => (


                <div >

                    <div style={styles.time} onEnterDown={onEnterDown}>{meta.duration}</div>
                    <div style={styles.show_name} >{meta.programme_name}</div>


                </div>



)


export default EpgTile;
