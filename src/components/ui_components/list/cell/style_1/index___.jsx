import React from 'react';




const Style1 = ({styles}) => {

          return (

              <div style={styles.cell} >

                        <div style={styles.main}>

                          <div style={styles.image}></div>
                          <div style={styles.access}></div>

                        </div>
                        <div style={styles.sub}>

                          <div style={styles.top}>

                            <div style={styles.play}></div>
                            <div style={styles.icon}></div>

                          </div>
                          <div style={styles.text}>

                            <div style={styles.primary_text}>Pri txt</div>
                            <div style={styles.secondary_text}>Sec txt</div>

                          </div>
                          <div style={styles.footer}>

                              <div style={styles.duration_text}>Dur</div>

                          </div>

                        </div>


              </div>

            )

}




export default Style1;
