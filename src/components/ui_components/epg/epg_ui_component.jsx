import React from 'react';

import Epg from './epg.jsx';

const EpgUIComponent = ({onEnterDown}) => (


                <div className="component epg">

                    <Epg onEnterDown={onEnterDown} />


                </div>



)


export default EpgUIComponent;