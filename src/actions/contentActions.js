import * as types from './actionTypes';

export function setContent(content) {

  console.log("content: "+content);

        return {
          type: types.SET_CURRENT_CONTENT,
          content
        }

}
