import React from 'react';
import { connect } from 'react-redux';


const List = ({listItems})=>(

      //  { listItems ?
            //<div>
            //    {listItems.map(item><ListItem key={item.itemn_id} {...item}/>)}
          //  </div>
            <div className="list">
              List
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
