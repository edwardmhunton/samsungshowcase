import React from 'react';
import { connect } from 'react-redux';


const Cell = ()=>(

      //  { listItems ?
            //<div>
            //    {listItems.map(item><ListItem key={item.itemn_id} {...item}/>)}
          //  </div>
            <div className='component cell' >
              Cell
            </div>
        //}

);

const mapStateToProps = () =>({
});

/**
 * Create and export a connected component
 */
export default connect(mapStateToProps)(Cell);
