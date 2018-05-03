import createReactClass from 'create-react-class';

import history from '../../history.js';


const CommonMethods = createReactClass({

        statics: {

          transitionToScreen: function(screen, main_menu_id){
            console.log("Tran to screen"+screen);
            console.log("Tran to screen"+main_menu_id);
            this.props.actions.setMainMenuId(main_menu_id);
            history.push('/'+screen);
          },
          transitionToPlayer: function(videoMetaData, menu_id, menu_item_id ){
            this.setState({content: videoMetaData});
            history.push('/player');

            this.props.actions.setContent(videoMetaData);
            this.props.actions.setPreviousMenuId(menu_id);
            this.props.actions.setPreviousMenuItemId(menu_item_id);
          }



        },
        render() {
        }




});

export default CommonMethods;
