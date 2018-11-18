import { takeLatest } from 'redux-saga/effects';

import * as types from '../types';
import { fetchLogIn, fetchLogOut, postNewUser } from './user'; 
import { fetchNotebooks, addNotebook, deleteNotebook, showLoadingNotebooks, hideLoadingNotebooks } from './notebookSagas';
import { fetchNotasFromNotebook, addNote, showLoadingNotes, hideLoadingNotes, deleteNote } from './noteSagas';

function* mySaga() {
    // USER
    yield takeLatest(types.USER_LOG_IN_REQUESTED, fetchLogIn);      // log in
    yield takeLatest(types.USER_LOG_OUT_REQUESTED, fetchLogOut);    // log out
    yield takeLatest(types.USER_CREATION_REQUESTED, postNewUser);
    // NOTEBOOKS
    yield takeLatest(types.FETCH_NOTEBOOKS_REQUESTED, fetchNotebooks); // get notebooks from user
    yield takeLatest(types.ADD_NOTEBOOK_REQUESTED, addNotebook); // post new notebook
    yield takeLatest(types.REMOVE_NOTEBOOK_REQUESTED, deleteNotebook); // remover a notebook
    yield takeLatest(types.FETCH_NOTEBOOKS_REQUESTED, showLoadingNotebooks); // show load
    yield takeLatest(types.FETCH_NOTEBOOKS_SUCCESS, hideLoadingNotebooks); // hide load on success
    // NOTES
    yield takeLatest(types.CURRENT_NOTEBOOK_SETTED, fetchNotasFromNotebook); // load notes when notebook selected
    yield takeLatest(types.CURRENT_NOTEBOOK_SETTED, showLoadingNotes); // show loading
    yield takeLatest(types.FETCH_NOTES_SUCCESS, hideLoadingNotes); // hide load on success
    yield takeLatest(types.ADD_NOTE_REQUESTED, addNote); // post new note
    yield takeLatest(types.REMOVE_NOTE_REQUESTED, deleteNote); // delete notes
}

export default mySaga;