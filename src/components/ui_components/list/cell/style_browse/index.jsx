import React from 'react';

import styles from './styles';

import util from 'util';





const StyleBrowse = ({active, categoryId}) => {
  //styles.image.backgroundImage = 'url(' + require('../assets/16X9_small.png') + ')';

  let style = styles;

          return (

            <div style={styles.cell} >

                      <div style={styles.main}>

                        <div style={active ? styles.image_active : styles.image }></div>

                      </div>
                      <div style={styles.sub} >






                        <div style={styles.text}>

                          <div style={styles.primary_text}>{'Its Always Sunny In Hackney: '+categoryId}</div>


                        </div>


                      </div>


            </div>
            )

}




export default  StyleBrowse;
