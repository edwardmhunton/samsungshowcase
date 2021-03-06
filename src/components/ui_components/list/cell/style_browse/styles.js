const styles = {


    cell: {
       color:'#FFFFFF',
       width: '417px',
       height: '360px',
       marginRight: '20px',
       borderStyle: 'none',
       borderColor: '#000000'

    },
    cell_active: {
       color:'#DDDDDD',
       width: '417px',
       height: '360px',
       marginRight: '20px',


       /*backgroundColor: '#000000',*/

    },
    main: {
      position: 'relative',
      height: '234px'

    },
    image: {
      color: '#DDCCDD',
      width: '417px',
      height: '234px',
      backgroundColor: '#282628',
      float: 'left',
      borderStyle: 'none',
      borderColor: '#DDDDDD'

    },
    image_active: {
      color: '#DDCCDD',
      width: '417px',
      height: '234px',
      backgroundColor: '#282628',
      float: 'left',
      borderStyle: 'solid',
      borderColor: '#FFFFFF'

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




    },
    primary_text:{
      float: 'left',
      fontSize: '44px',
      fontWeight:'900',
      width: '100%',
      height: '44px',
      marginBottom:'10px',
      overflowWrap: 'normal',
      whiteSpace: 'normal'



    },
    secondary_text:{
        float: 'left',
        fontSize: '30px',
        fontWeight:'900',
        color: '#DDDDDD',
        width: '100%',
        height: '30px'
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
      height: '18px',
      fontSize: '24px',
      paddingBottom: '20px',
      paddingRight: '20px'

    }



}

export default styles;
