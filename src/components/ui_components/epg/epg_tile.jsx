import React from 'react';

import styles from './styles';

import { Focusable } from '../../navigation';


class EpgTile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: this.props.active
    }


    this.paddingValue = 30;
  }



  render() {


    styles.programme.width = this.props.meta.duration*8;

    let style = styles.programme;

    console.log("State Tile: "+this.state.active);


    this.state.active ? style = Object.assign({}, style, styles.programme_focus) : '';

    return (
      <Focusable active={this.props.active}
                 onFocus={() => this.setState({active: true})}
                 onBlur={() => this.setState({active: false})}
                 onEnterDown={(index) => this.props.onEnterDown(index)} >


                     <div  style={style} >

                         <div style={styles.duration_text}>{this.props.meta.duration}</div>
                         <div style={styles.programme_text}>{this.props.meta.programme_name}</div>


                     </div>


      </Focusable>
    );
  }
};

export default EpgTile;
