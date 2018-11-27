import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import * as types from '../types';

import notes, * as fromNotes from './notes';
import notebooks, * as fromNotebooks from './notebooks';
import user, * as fromUser from './user';
import notifications from './notifications'

// notebook form
const notebookFormShowing = (state = false, action) => {
    switch(action.type) {
        case types.SHOW_NOTEBOOK_FORM: {
            return true;
        }
        case types.HIDE_NOTEBOOK_FORM: {
            return false;
        }
        default: {
            return state;
        }
    }
}

//currents 
const currentNotebook = (state = -1, action) => {
    switch(action.type) {
        case types.CURRENT_NOTEBOOK_SETTED: {
            const { id } = action.payload;
            return id;
        }
        default: {
            return state;
        }
    }
}

const currentNote = (state = -1, action) => {
    switch(action.type) {
        case types.CURRENT_NOTE_SETTED: {
            const { id } = action.payload;
            return id;
        }

        default: {
            return state;
        }
    }
}

//selectors
// user y friends
export const getUser = (state) => fromUser.getUser(state.user);
export const getFriend = (state, id) => fromUser.getFriend(state.user, id);
export const getFriends = (state) => fromUser.getFriends(state.user);
export const itsFriendsLoading = (state) => fromUser.itsFriendsLoading(state.user);
export const isShowingFriendsPopup = (state) => fromUser.isShowingFriendsPopup(state.user);
// notebooks
export const getNotebook = (state, id)=> fromNotebooks.getNotebook(state.notebook, id);
export const getNotebooks = (state) => fromNotebooks.getNotebooks(state.notebooks);
export const itsNotebooksLoading = (state) => fromNotebooks.itsLoading(state.notebooks);
// notes
export const getNote = (state, id)=> fromNotes.getNote(state.notes, id);
export const getNotes = (state) => fromNotes.getNotes(state.notes);
export const itsNotesLoading = (state) => fromNotes.itsLoading(state.notes);
export const itsNoteSending = (state) => fromNotes.itsSending(state.notes);
// currents 
export const getCurrentNote = (state) => state.currentNote;
export const getCurrentNotebook = (state) => state.currentNotebook; 
export const getCurrentNoteFull = (state) => {
    if (getCurrentNote(state) !== undefined || getCurrentNote(state) !== -1){
        const note = getNote(state, getCurrentNote(state));
        if (note !== undefined) {
            return note;
        }
    } 

    return "";
    
}



export default combineReducers({
    user,
    notebookFormShowing,
    notes,
    notebooks,
    currentNote,
    currentNotebook,
    notifications,
    form: formReducer,
});

