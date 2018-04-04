import React from 'react';
import { connect } from 'react-redux';


const Grid = ({listItems})=>(
    <div>
        <p>Grid</p>
    </div>
);

const mapStateToProps = ({listItems})=>({
    listItems
});

/**
 * Create and export a connected component
 */
export default connect(mapStateToProps)(Grid);
