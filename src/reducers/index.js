import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import * as types from '../types';

import notes from './notes';
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

export default combineReducers({
    user,
    notebookFormShowing,
    notes,
    notebooks,
    form: formReducer,
});

