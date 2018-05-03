

const genericKeys = {

        onKeyDown: function(event){
          console.log('keycaughtsss');
          switch (event.code) {
            case 'ArrowDown':

              this.setState({ featuredActive: true});

              break;

            case 'Enter':

             this.setState({ modalActive: false});


            break;

            case 'Backspace':


             this.setState({ modalActive: true});
             //genericActions.toggleModal(true);


            break;
            default:

          }
        }



}


export default genericKeys;
