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

export const logoutRequest = () => ({
    type: types.USER_LOG_OUT_REQUESTED,
})

export const logoutSuccess = () => ({
    type: types.USER_LOG_OUT_SUCCESS,
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

export const showNotebookForm = () => ({
    type: types.SHOW_NOTEBOOK_FORM,
})

export const hideNotebookForm = () => ({
    type: types.HIDE_NOTEBOOK_FORM,
})

export const setCurrentNotebook = (id) => ({
    type: types.CURRENT_NOTEBOOK_SETTED,
    payload: { id }
})

export const setCurrentNote = (id) => ({
    type: types.CURRENT_NOTE_SETTED,
    payload: { id }
})


export const notesRequest = noteActions.notesRequest;
export const notesRequestSuccess = noteActions.notesRequestSuccess;
export const noteRequest = noteActions.noteRequest;
export const noteSuccess = noteActions.noteSuccess;

export const addNoteRequest = noteActions.addNoteRequest;
export const addNoteSuccess = noteActions.addNoteSuccess;
export const addNoteFail = noteActions.addNoteFail;
export const removeNoteRequest = noteActions.removeNoteRequest;
export const removeNoteSuccess = noteActions.removeNoteSuccess;
export const shareNoteRequest = noteActions.shareNoteRequest;
export const updateNoteRequest = noteActions.updateNoteRequest;
export const updateNoteSuccess = noteActions.updateNoteSuccess;

export const addNotebookRequest = notebookActions.addNotebookRequest;
export const addNotebookSuccess = notebookActions.addNotebookSuccess;
export const removeNotebookRequest = notebookActions.removeNotebookRequest;
export const removeNotebookSuccess = notebookActions.removeNotebookSuccess;
export const updateNotebookRequest = notebookActions.updateNotebookRequest;
export const updateNotebookSuccess = notebookActions.updateNotebookSuccess;
export const notebooksRequest = notebookActions.notebooksRequest;
export const notebooksRequestSuccess = notebookActions.notebooksRequestSuccess;