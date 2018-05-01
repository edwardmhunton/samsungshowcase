const styles = {

  epg_container:{

    marginTop: '100px',
    whiteSpace: 'nowrap',
    overflowX: 'scroll',
    display: 'flex',
    scrollLeft: '50px'


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
    textOverflow: 'ellipsis',
    fontSize: '30px',
    fontWeight: '900'


  },
  duration_text: {
    fontSize: '20px',
    fontWeight: '500'
  },
  programme: {
    borderRadius: '6px',
    backgroundColor: '#282628',
    color: '#FFFFFF',

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
    backgroundColor:'#DDDDDD',
    position:'fix'
  }




  }

  export default styles;
