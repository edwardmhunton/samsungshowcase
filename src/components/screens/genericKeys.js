import history from '../../history.js';

const genericKeys = {

        onKeyDown: function(event){
          console.log('keycaughtsss');
          switch (event.code) {
            case 'ArrowDown':

              this.setState({ featuredActive: true});

              break;

            case 'Enter':

            console.log('inEnter');

              if(this.state.modalActive === true){
                 this.setState({ modalActive: false});
              } else if(this.state.featuredActive === false) {
                 this.setState({ hudVisible: 'hideThis'});
              }




            break;

            case 'Backspace':


            if(this.state.modalActive === true){
               this.setState({ modalActive: false});
            } else if(this.state.featuredActive === false) {
               this.setState({ hudVisible: ''});
            }






            break;
            default:

          }
        }



}


export default genericKeys;
