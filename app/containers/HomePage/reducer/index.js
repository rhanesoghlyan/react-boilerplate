/*
 * HomeReducer
 */

import produce from 'immer';

import { CHANGE_USERNAME } from '../constants';

// The initial state of the App
export const initialState = {
  username: '',
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USERNAME:
        draft.username = action.username;
        break;
    }
  });

export default homeReducer;
