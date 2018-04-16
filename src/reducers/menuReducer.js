import initialState from './initialState';
import objectAssign from 'object-assign';


export default function menuReducer(state = [], action) {

  console.log("MENU REDUCER CALLED: "+action.type);

      switch(action.type) {

            case 'SET_PREVIOUS_MENU_ID':
            console.log("SET_PREVIOUS_MENU_ID: "+action.menu_id);


             return objectAssign({}, state, {menu_id: action.menu_id});


            default:
            return state;
      }

}
