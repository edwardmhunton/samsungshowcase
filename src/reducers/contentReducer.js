import initialState from './initialState';
import objectAssign from 'object-assign';


export default function contentReducer(state = [], action) {

      switch(action.type) {

            case 'SET_CURRENT_CONTENT':
            console.log("SET_CURRENT_CONTENT: "+action.content);
            return [...state, Object.assign({}, action.content)];
             //return objectAssign({}, state, {content: action.content});


            default:
            return state;
      }

}
