import React from 'react';

import MainMenu from './mainmenu.jsx';

const MainmenuUIComponent = ({onEnterDown, itemDefault}) => (


                <div className="component mainmenu">


                    <MainMenu itemDefault={itemDefault} onEnterDown={onEnterDown} />


                </div>



)


export default MainmenuUIComponent;
