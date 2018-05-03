import React from 'react';

import styles from './styles.js';



const ModalUIComponent = ({style}) => (




                <div style={style} >

                        <div style={styles.modal_dialoge}>
                          <div style={styles.modal_top}>
                            <div style={styles.modal_text}>Are you sure you want to exit the app?</div>
                          </div>
                          <div style={styles.modal_bottom}>
                            <div style={styles.modal_choice_blur}>Yes</div>
                            <div style={styles.modal_choice_active}>No</div>
                          </div>
                        </div>
                </div>

)


export default ModalUIComponent;
