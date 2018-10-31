import { combineReducers } from 'redux';

import * as types from '../types';

const token = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_FRIEND_FAILURE:
      return {...state, addFriend: true}
    case types.ADD_NOTE_FAILURE:
      return {...state, addNote: true}
    case types.ADD_NOTEBOOK_FAILURE:
      return {...state, addNotebook: true}
    case types.FETCH_NOTE_FAILURE:
      return {...state, fetchNote: true}
    case types.FETCH_NOTEBOOKS_FAILURE:
      return {...state, fetchNotebook: true}
    case types.ADD_FRIEND_FAILURE:
      return {...state, addFriend: true}
    case types.ADD_FRIEND_FAILURE:
      return {...state, addFriend: true}
    case types.ADD_FRIEND_FAILURE:
      return {...state, addFriend: true}
    case types.ADD_FRIEND_FAILURE:
      return {...state, addFriend: true} 
    default: {
      return state;
    }
  }
}