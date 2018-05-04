import React from 'react';

import MainMenu from './mainmenu.jsx';

const MainmenuUIComponent = ({onEnterDown, itemDefault, visible}) => (


                <div className={"component mainmenu "+visible}>


                    <MainMenu itemDefault={itemDefault} onEnterDown={onEnterDown} />


                </div>



)


export default MainmenuUIComponent;
