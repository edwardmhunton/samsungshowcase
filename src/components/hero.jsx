import React from 'react';
import { connect } from 'react-redux';


const Hero = ({listItems, style})=>(
    <div nv-scope="hero" className={'component hero '+style} >
        <p>  Hero </p>
    </div>
);

const mapStateToProps = ({listItems})=>({
    listItems
});

/**
 * Create and export a connected component
 */
export default connect(mapStateToProps)(Hero);
