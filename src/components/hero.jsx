import React from 'react';
import { connect } from 'react-redux';


const Hero = ({listItems, style})=>(
    <div className={'component hero '+style} >
          Hero
    </div>
);

const mapStateToProps = ({listItems})=>({
    listItems
});

/**
 * Create and export a connected component
 */
export default connect(mapStateToProps)(Hero);
