const styles = {


    cell: {
       color:'#FFFFFF',
       width: '512px',
       height: '534px',
       margin: '5px',
       backgroundColor: '#000000',
       paddingRight: '10px',
       whiteSpace: 'nowrap',
       overflow: 'hidden',
       textOverflow: 'ellipsis',
       borderStyle:'solid',
       borderColor: '#000000'


    },
    cell_active: {
       color:'#FFFFFF',
       width: '512px',
       height: '534px',
       margin: '5px',
       backgroundColor: '#000000',
       paddingRight: '10px',
       whiteSpace: 'nowrap',
       overflow: 'hidden',
       textOverflow: 'ellipsis',
       borderStyle:'solid',
       borderColor: '#FFFFFF'

    },
    main: {
      position: 'relative',
      height: '288px',


    },
    image: {
      color: '#DDCCDD',
      width: '512px',
      height: '288px',
      backgroundColor: '#282628',
      float: 'left',
    ///  backgroundImage: 'url(' + require('../assets/main.png') + ')'


    },

    sub: {
        height:'160px'

    },
    top:{


    },

    text:{
      position:'relative',
      /*fontFamily: ''*/
      fontSize: '16px',
      height:'100%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'



    },
    primary_text:{
      float: 'left',
      fontSize: '44px',
      fontWeight:'900',
      width: '100%',
      height: '44px',
      marginBottom:'20px',
      overflow: 'hidden',
      textOverflow: 'ellipsis'



    },
    secondary_text:{
        float: 'left',
        fontSize: '30px',
        fontWeight:'500',
        color: '#DDDDDD',
        width: '100%',
        height: '30px',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    footer: {

    },
    duration_text:{
      position: 'absolute',
      bottom: '0',
      textAlign: 'right',
      float: 'right',
      color: '#DDDDDD',
      width: '100%',
      height: '50px',
      fontSize: '24px',
      paddingBottom: '20px',
      paddingRight: '20px'

    }



}

export default styles;
