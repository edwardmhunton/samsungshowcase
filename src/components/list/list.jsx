import React from 'react';
import { connect } from 'react-redux';
import Cell from './cell';


const List = ({listItems})=>(

      //  { listItems ?
            //<div>
            //    {listItems.map(item><ListItem key={item.itemn_id} {...item}/>)}
          //  </div>
            <div className='component list' >
            <p> List</p>
              <ul>
              <Cell />
              <Cell />
              <Cell />
              <Cell />
              <Cell />
              <Cell />
              <Cell />
              </ul>
            </div>
        //}

);

const mapStateToProps = ({listItems}) =>({
    listItems
});

/**
 * Create and export a connected component
 */
export default connect(mapStateToProps)(List);
