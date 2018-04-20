import React from 'react';
import HeroItem from './hero_item';

const HeroUIComponent = ({action, navDefault, itemDefault}) => (

              <div className="component hero">

              
              <HeroItem itemDefault={itemDefault} navDefault={navDefault} action={action} />

              </div>

)


export default HeroUIComponent;
