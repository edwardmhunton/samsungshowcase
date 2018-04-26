import initialState from './initialState';
import objectAssign from 'object-assign';


export default function categoryReducer(state = [], action) {

  console.log("REDUCER CALLED: "+action.type);

      switch(action.type) {

             case 'SET_CURRENT_CATEGORY':
             console.log("SET_CURRENT_CATEGORY: "+action.category_id);


              return objectAssign({}, state, {category_id: action.category_id});


            default:
            return state;
      }

}
