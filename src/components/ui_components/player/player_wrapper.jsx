import React from 'react';

import PlayerItem from './player_item';

const PlayerWrapper = ({content, actions}) => (


                <div>

                  <h4>Player Wrapper {content}</h4>
                  <PlayerItem actions={actions}/>


              </div>



)


export default PlayerWrapper;
