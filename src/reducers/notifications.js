import { combineReducers } from 'redux';

import * as types from '../types';

const notifications = (state = [], action) => {
  switch (action.type) {
    case types.ADD_NOTIFICATION:
      return [action.payload, ...state];

    case types.DISMISS_NOTIFICATION:
      return state.filter(toast => toast.id !== action.payload);

    default:
      return state;
  }
}

export default combineReducers({ 
  notifications,
});
