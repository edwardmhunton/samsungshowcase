import * as types from './actionTypes';

export function setPreviousMenuId(menu_id) {

  console.log("content: "+content);

        return {
          type: types.SET_PREVIOUS_MENU_ID,
          menu_id
        }

}

export function setPreviousMenuItemId(menu_item_id) {

  console.log("content: "+content);

        return {
          type: types.SET_PREVIOUS_MENU_ITEM_ID,
          menu_item_id
        }

}

export function setMainMenuId(main_menu_id) {

  console.log("content: "+content);

        return {
          type: types.SET_MAIN_MENU_ID,
          main_menu_id
        }

}
