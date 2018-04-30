import React from 'react';

import styles from './styles';

const EpgTile = ({width, meta}) => {

            styles.programme.width = width

            return (

                <li style={styles.programme} >

                    <div>{meta.duration}</div>
                    <div>{meta.programme_name}</div>


                </li>

              )



}


export default EpgTile;
