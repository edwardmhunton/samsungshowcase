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
              list_block: {
                position: 'absolute',
                left: '347px',
                top: '150px',
                transition: '0.5s',
                transitionProperty: 'all',
              	transitionDuration: '.5s',
              	transitionTimingFunction: 'cubic-bezier(0, 1, 0.5, 1)'

              },


              list_block_active: {
                position: 'absolute',
                left: '0px',
                transition: '0.5s',
                transitionProperty: 'all',
              	transitionDuration: '.5s',
              	transitionTimingFunction: 'cubic-bezier(0, 1, 0.5, 1)'

              },
              sidebar: {
                position: 'absolute',
                left: '0px',
                marginRight: '47px',
                marginTop: '28px',
                width: '300px',
                height: '1020px',
                transition: '0.5s',
                transitionProperty: 'all',
              	transitionDuration: '.5s',
              	transitionTimingFunction: 'cubic-bezier(0, 1, 0.5, 1)'


              },
              sidebar_blur:{
                position: 'absolute',
                left: '-375px',
                marginRight: '47px',
                marginTop: '28px',
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
