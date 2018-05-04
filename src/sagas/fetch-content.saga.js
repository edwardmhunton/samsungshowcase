import { put, take } from 'redux-saga/effects';

import fetch from 'isomorphic-fetch';

export default function * () {

  while (true) {

        yield take('REQUEST_FETCH_CONTENT');
        const raw = yield fetch('/api/content');
        const json  = yield raw.json();
        const content = json.entry;
        console.log("Got content", content);
        yield put({type: `FETCHED_CONTENT`, content});
  }


}
