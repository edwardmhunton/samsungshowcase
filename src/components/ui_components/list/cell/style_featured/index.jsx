import React from 'react';

import styles from './styles';




const StyleFeatured = ({active}) => {

  active ? styles.cell = styles.cell_active : styles.cell

          return (

            <div style={styles.cell} >

                      <div style={styles.main}>

                        <div style={styles.image}></div>
                        <div style={styles.duration_text}>26.32</div>

                      </div>
                      <div style={styles.sub} >






                        <div style={styles.text}>

                          <div style={styles.primary_text}>F Pri txt</div>
                          <div style={styles.secondary_text}>F Sec txt</div>

                        </div>


                      </div>


            </div>
            )

}




export default StyleFeatured;
