const styles = {

  epg_container:{

    marginTop: '100px',
    whiteSpace: 'nowrap',
    overflowX: 'scroll'

  },

  channel: {

    display: '-webkit-inline-box',
    whiteSpace: 'normal',
    width: '200000px'



  },
  schedule: {
    position:'relative',
    width: '100%'
    /*whiteSpace: 'nowrap'*/


  },
  programme_text: {


    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'


  },
  programme: {
    borderRadius: '6px',
    backgroundColor: '#282628',
    color: '#FFFFFF',
    /*borderStyle: 'solid',
    borderColor: '#FFFFFF',*/
    /*display: 'inlineBlock',*/
    float: 'left',
    height: '150px',
    padding:'5px',
    display:'inlineBlock'

  },
  programme_focus: {
    borderRadius: '6px',
    backgroundColor: '#FFFFFF',
    color: '#000000',
    /*borderStyle: 'solid',
    borderColor: '#FFFFFF',*/
    height: '150px',
    padding:'5px'

  },
  channel_logo: {
    height: '150px',
    width: '150px',
    backgroundColor:'#DDDDDD'
  }




  }

  export default styles;
