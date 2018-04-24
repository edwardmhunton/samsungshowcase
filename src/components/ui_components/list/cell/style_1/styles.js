const styles = {


    cell: {
       color:'#FFFFFF',
       width: '476px',
       height: '375px',
       margin: '5px',
       backgroundColor: '#000000',

    },
    main: {
      position: 'relative',
      height: '267px'

    },
    image: {
      color: '#DDCCDD',
      height: '267px',
      width: '476px',
      clear: 'both',
      float: 'left',
      //backgroundImage: 'url(' + require('../assets/main.png') + ')'


    },
    access: {
      height: '40px',
      width: '40px',
      position: 'absolute',
      top: '0px',
      right: '0px',
      zIndex: '99',
      //backgroundImage: 'url(' + require('../assets/inapp_ribbon_image3x.png') + ')',


    },
    sub: {
        height:'108px'

    },
    top:{


    },
    play: {
      height: '32px',
      width: '32px',
      position: 'absolute',
      bottom: '0px',
      left: '0px',
      zIndex: '100',
      //backgroundImage: 'url(' + require('../assets/generic_item_atom_video3x.jpg') + ')'
    },
    icon:{
      height: '35px',
      width: '40px',
      position: 'absolute',
      bottom: '0px',
      right: '0px',
      zIndex: '101',
      //backgroundImage: 'url(' + require('../assets/ChannelLogo3x.png') + ')',
      backgroundRepeat: 'no-repeat',
      marginRight:'5px',
      marginTop:'10px'

    },
    text:{
      position:'relative',
      /*fontFamily: ''*/
      fontSize: '16px',
      height:'50px'



    },
    primary_text:{
      float: 'left',
      width: '100%',
      height: '18px'


    },
    secondary_text:{
        float: 'left',
        color: '#DDDDDD',
        width: '100%',
        height: '18px'
    },
    footer: {

    },
    duration_text:{
      float: 'left',
      color: '#DDDDDD',
      width: '100%',
      height: '18px',
      fontSize: '14px'

    }



}

export default styles;
