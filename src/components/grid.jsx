import React from 'react';
import { connect } from 'react-redux';


const Grid = ({listItems})=>(
    <div>
        Grid
    </div>
);

const mapStateToProps = ({listItems})=>({
    listItems
});

/**
 * Create and export a connected component
 */
export default connect(mapStateToProps)(Grid);
