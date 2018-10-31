import * as types from '../types';
import * as noteActions from './note';
import * as notebookActions from './notebook';

//General acions
export const logInRequest = (
    username,
    password,
) => ({
    type: types.USER_LOG_IN_REQUESTED,
    payload: {
        username,
        password,
    }
})

export const logInSuccess = (
    token,
    id,
    username
) => ({
    type: types.USER_LOG_IN_SUCCESS,
    payload: {
        token,
        id,
        username
    }
})

export const logout = () => ({
    type: types.USER_LOG_OUT_REQUESTED,
})

export const addFriendRequest = (
    id,
    username,
) => ({
    type: types.ADD_FRIEND_REQUESTED,
    payload: {
        id,
        username
    }
});

export const addFriendFailure = (
    id,
) => ({
    type: types.ADD_FRIEND_SUCCESS,
    payload: {
        id,
    }
});

export const addFriendSucces = (
    old_id,
    id,
    username,
) => ({
    type: types.ADD_FRIEND_SUCCESS,
    payload: {
        old_id,
        id,
        username,
    }
});

export const removeFriendRequest = (
    id,
) => ({
    type: types.REMOVE_FRIEND_REQUESTED,
    payload: {
        id
    }
});

export const removeFriendSuccess = (
    id
) => ({
    type: types.ADD_FRIEND_FAILURE,
    payload: {
        id
    }
})

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