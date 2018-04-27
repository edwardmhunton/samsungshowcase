//import Background from '../assets/16x9_small.png';


const styles = {

  featured: {

            screen: {

              //backgroundImage: `url(${Background})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'


            },
            list_block: {
              position: 'absolute',
              top: '700px'

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
              list: {
                float:'left',
                width: '1400px'

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
