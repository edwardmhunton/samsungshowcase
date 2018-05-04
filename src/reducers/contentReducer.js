import initialState from './initialState';
import objectAssign from 'object-assign';


export default function contentReducer(state = [], action) {

  console.log("REDUCER CALLED: "+action.type);

      switch(action.type) {

            case 'SET_CURRENT_CONTENT':

            console.log("SET_CURRENT_CONTENT: "+action.content);
            return objectAssign({}, state, {content: action.content});

            case 'FETCHED_CONTENT':

            console.log("REQUEST_FETCH_CONTENT: ");
            state = objectAssign({}, state, {content: action.content});

            return state;




            default:
            return state;
      }

}
