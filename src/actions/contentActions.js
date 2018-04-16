import * as types from './actionTypes';

export function setContent(content) {

  console.log("content: "+content);

        return {
          type: types.SET_CURRENT_CONTENT,
          content
        }

}

export function setPreviousMenuId(menu_id) {

  console.log("content: "+content);

        return {
          type: types.SET_PREVIOUS_MENU_ID,
          menu_id
        }

}
