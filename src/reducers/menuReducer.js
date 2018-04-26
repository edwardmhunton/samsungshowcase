import initialState from './initialState';
import objectAssign from 'object-assign';


export default function menuReducer(state = [], action) {

  console.log("MENU REDUCER CALLED: "+action.type);

      switch(action.type) {

            case 'SET_PREVIOUS_MENU_ID':
            console.log("SET_PREVIOUS_MENU_ID: "+action.menu_id);


             return objectAssign({}, state, {menu_id: action.menu_id});

             case 'SET_PREVIOUS_MENU_ITEM_ID':
             console.log("SET_PREVIOUS_MENU_ITEM_ID: "+action.menu_item_id);


              return objectAssign({}, state, {menu_item_id: action.menu_item_id});

              case 'SET_MAIN_MENU_ID':
              console.log("SET_MAIN_MENU_ID: "+action.main_menu_id);


              return objectAssign({}, state, {main_menu_id: action.main_menu_id});


            default:
            return state;
      }

}
