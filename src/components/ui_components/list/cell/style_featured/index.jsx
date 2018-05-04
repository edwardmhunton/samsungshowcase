import React from 'react';

import styles from './styles';




const StyleFeatured = ({active, meta}) => {

  active ? styles.cell = styles.cell_active : styles.cell

          return (

            <div style={styles.cell} >

                      <div style={styles.main}>

                        <img src={meta.media_group[0].media_item[0].src} style={styles.image}></img>
                        <div style={styles.duration_text}>26.32</div>

                      </div>
                      <div style={styles.sub} >






                        <div style={styles.text}>

                          <div style={styles.primary_text}>{meta.title}</div>
                          <div style={styles.secondary_text}>{meta.summary}</div>

                        </div>


                      </div>


            </div>
            )

}




export default StyleFeatured;
