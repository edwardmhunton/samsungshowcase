const styles = {


  modal_blur: {

    width: '-webkit-fill-available',
    height: '-webkit-fill-available',
    backgroundColor: 'rgba(15, 15, 15, 0.8)',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '9999',
    display: 'none'


  },
  modal_active: {

    width: '-webkit-fill-available',
    height: '-webkit-fill-available',
    backgroundColor: 'rgba(15, 15, 15, 0.8)',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '9999',
    display: 'block'

  },
  modal_dialoge: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    height: '495px',
    backgroundColor: '#212022',
    borderRadius: '10px',
    boxShaddow: '0 8px 40px 0 rgba(0, 0, 0, 0.5)',


  },
  modal_top: {
    height: '300px',
    width: '84%',
    paddingLeft: '150px',
    paddingTop: '100px'

  },
  modal_text:{
    fontSize: '40px',
    fontWeight: '900',
    color: '#FFFFFF',
    textAlign: 'center'

  },
  modal_bottom: {
    display: 'inlineBlock',
    height: '150px',
    paddingLeft: '100px'

  },
  modal_choice_blur: {
      textAlign: 'center',
    float: 'left',
    width: '280px',
    height: '90px',
    padding: '10px',
    borderRadius: '4px',
    backgroundColor: '#000000',
    fontSize: '32px',
    fontWeight: '900'

  },
  modal_choice_active: {
      textAlign: 'center',
    float: 'left',
    width: '280px',
    height: '90px',
    padding: '10px',
    borderRadius: '4px',
    backgroundColor: '#FFFFFF',
    fontSize: '32px',
    fontWeight: '900'

  },

}

export default styles;
