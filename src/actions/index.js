import * as types from '../types';
import * as noteActions from './note';
import * as notebookActions from './notebook';

//General acions
export const addFriend = (
  friend,
) => ({
  type: types.ADD_FRIEND_REQUESTED,
  payload: {
    friend
  }
});

export const removeFriend = (
  friend,
) => ({
  type: types.REMOVE_FRIEND_REQUESTED,
  payload: {
    friend,
  }
});

export const showError = (
  errorCode,
  errorMsg
) = ({
  type: types.ERROR_RAISED,
  payload: {
    errorCode,
    errorMsg,
  }
});

export const showSucceed = (
  succedMsg
) = ({
  type: types.REQUEST_SUCCEDED,
  payload: {
    succedMsg,
  }
});

export const authUser = (
  username,
  password
) => ({
  type: types.USER_LOGIN_REQUEST,
  payload: {
    username,
    password
  }
});


export const addNote = noteActions.addNote;
export const shareNote = noteActions.shareNote;
export const remoeNote = noteActions.removeNote;

export const addNotebook = notebookActions.addNotebook;
export const removeNotebook = notebookActions.removeNotebook;
export const changeColor = notebookActions.changeColor;