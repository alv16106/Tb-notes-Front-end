import * as types from '../types';
import * as noteActions from './note';
import * as notebookActions from './notebook';

//General acions
export const signUpRequest = (
    username,
    password,
    email
) => ({
    type: types.USER_CREATION_REQUESTED,
    payload: {
        username,
        password,
        email
    }
})

export const refreshJWT = (
    oldJWT
) => ({
    type: types.REFRESH_JWT,
    payload: {
        oldJWT
    }
})

export const signUpSuccess = (
) => ({
    type: types.USER_CREATION_SUCCESS,
    payload: {}
})

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

export const fetchFriendsRequest = () => ({
    type: types.FRIENDS_FETCH_REQUESTED,
})

export const fetchFriendsSucceed = ( friends ) => ({
    type: types.FRIENDS_FETCH_SUCCESS,
    payload: { friends },
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

export const startLoadingFriends = () => ({
    type: types.TOGGLED_UP_LOADING_FRIENDS,
});

export const stopLoadingFriends = () => ({
    type: types.TOGGLED_DOWN_LOADING_FRIENDS,
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

export const showFriendForm = () => ({
    type: types.SHOW_POPUP_FRIENDS,
})

export const hideFriendForm = () => ({
    type: types.HIDE_POPUP_FRIENDS,
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

export const addNotification = (
    id,
    color,
    type,
    text,
) => ({
    type: types.ADD_NOTIFICATION,
    payload: {
        id,
        color,
        type,
        text,
    }
})

export const dismissNotification = (id) => ({
    type: types.DISMISS_NOTIFICATION,
    payload: id
})


export const notesFetchRequest = noteActions.notesFetchRequest;
export const notesFetchSuccess = noteActions.notesFetchSuccess;
export const notesFetchFromFriendRequest = noteActions.notesFetchFromFriendRequest;
export const startLoadingNotes = noteActions.startLoadingNotes;
export const stopLoadingNotes = noteActions.stopLoadingNotes;
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
export const startLoadingNotebooks = notebookActions.startLoadingNotebooks;
export const stopLoadingNotebooks = notebookActions.stopLoadingNotebooks;
export const removeNotebookRequest = notebookActions.removeNotebookRequest;
export const removeNotebookSuccess = notebookActions.removeNotebookSuccess;
export const updateNotebookRequest = notebookActions.updateNotebookRequest;
export const updateNotebookSuccess = notebookActions.updateNotebookSuccess;
export const notebooksRequest = notebookActions.notebooksRequest;
export const notebooksRequestSuccess = notebookActions.notebooksRequestSuccess;