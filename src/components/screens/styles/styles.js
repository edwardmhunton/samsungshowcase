//import Background from '../assets/16x9_small.png';


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



  featured: {

            screen: {

              //backgroundImage: `url(${Background})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'


            },
            list_block: {
              position: 'absolute',
              top: '900px',
              transition: '0.5s',
              transitionProperty: 'all',
            	transitionDuration: '.5s',
            	transitionTimingFunction: 'cubic-bezier(0, 1, 0.5, 1)'


            },


            list_block_active: {
              position: 'absolute',
              top: '200px',
              transition: '0.5s',
              transitionProperty: 'all',
            	transitionDuration: '.5s',
            	transitionTimingFunction: 'cubic-bezier(0, 1, 0.5, 1)'

            }




    },
    browse: {

              screen: {

                //backgroundImage: `url(${Background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'


              },
              list_block: {
                position: 'absolute',
                left: '450px',
                top: '300px',
                transition: '0.5s',
                transitionProperty: 'all',
              	transitionDuration: '.5s',
              	transitionTimingFunction: 'cubic-bezier(0, 1, 0.5, 1)'

              },


              list_block_active: {
                position: 'absolute',
                left: '0px',
                top: '300px',
                transition: '0.5s',
                transitionProperty: 'all',
              	transitionDuration: '.5s',
              	transitionTimingFunction: 'cubic-bezier(0, 1, 0.5, 1)'

              },
              sidebar: {
                position: 'absolute',
                left: '0px',
                marginRight: '47px',
                marginTop: '175px',
                width: '300px',
                height: '1020px',
                transition: '0.5s',
                transitionProperty: 'all',
              	transitionDuration: '.5s',
              	transitionTimingFunction: 'cubic-bezier(0, 1, 0.5, 1)'


              },
              sidebar_blur:{
                position: 'absolute',
                left: '-500px',
                marginRight: '47px',
                marginTop: '175px',
                width: '300px',
                height: '1020px',
                transition: '0.5s',
                transitionProperty: 'all',
              	transitionDuration: '.5s',
              	transitionTimingFunction: 'cubic-bezier(0, 1, 0.5, 1)'

              }

      },
      tvguide: {

                screen: {

                  //backgroundImage: `url(${Background})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover'


                },
                list_block: {
                  position: 'absolute',
                  //top: '600px',
                  overflowY: 'hidden',
              	  maxHeight: '1080px', /* approximate max height */

              	transitionProperty: 'all',
              	transitionDuration: '.5s',
              	transitionTimingFunction: 'cubic-bezier(0, 1, 0.5, 1)'
                }

        }





}

export default styles;
