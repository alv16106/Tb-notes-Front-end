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


export const addNoteRequest = noteActions.addNoteRequest;
export const shareNote = noteActions.shareNote;
export const removeNote = noteActions.removeNote;

export const addNotebookRequest = notebookActions.addNotebookRequest;
export const addNotebookSuccess = notebookActions.addNotebookSuccess;
export const removeNotebookRequest = notebookActions.removeNotebookRequest;
export const removeNotebookSuccess = notebookActions.removeNotebookSuccess;
export const updateNotebookRequest = notebookActions.updateNotebookRequest;
export const updateNotebookSuccess = notebookActions.updateNotebookSuccess;
export const notebooksRequest = notebookActions.notebooksRequest;
export const notebooksRequestSuccess = notebookActions.notebooksRequestSuccess;