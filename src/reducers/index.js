import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import * as types from '../types';

import notes, * as fromNotes from './notes';
import notebooks, * as fromNotebooks from './notebooks';
import user, * as fromUser from './user';

//selectors
// user y friends
export const getUser = (state) => fromUser.getUser(state.user);
export const getFriend = (state, id) => fromUser.getFriend(state.user, id);
export const getFriends = (state) => fromUser.getFriends(state.user);
// notebooks
export const getNotebook = (state, id)=> fromNotebooks.getNotebook(state.notebook, id);
export const getNotebooks = (state) => fromNotebooks.getNotebooks(state.notebooks);
// notes
export const getNote = (state, id)=> fromNotes.getNote(state.notes, id);
export const getNotes = (state) => fromNotes.getNotes(state.notes);

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

export default combineReducers({
    user,
    notebookFormShowing,
    notes,
    notebooks,
    currentNote,
    currentNotebook,
    form: formReducer,
});

