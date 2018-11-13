import { takeLatest } from 'redux-saga/effects';

import * as types from '../types';
import { fetchLogIn, fetchLogOut, postNewUser } from './user'; 
import { fetchNotebooks, addNotebook, deleteNotebook } from './notebookSagas';
import { fetchNotasFromNotebook, addNote } from './noteSagas';

function* mySaga() {
    yield takeLatest(types.USER_LOG_IN_REQUESTED, fetchLogIn);      // log in
    yield takeLatest(types.USER_LOG_OUT_REQUESTED, fetchLogOut);    // log out
    yield takeLatest(types.FETCH_NOTEBOOKS_REQUESTED, fetchNotebooks); // get notebooks from user
    yield takeLatest(types.ADD_NOTEBOOK_REQUESTED, addNotebook); // post new notebook
    yield takeLatest(types.USER_CREATION_REQUESTED, postNewUser)
    yield takeLatest(types.CURRENT_NOTEBOOK_SETTED, fetchNotasFromNotebook); // load notes when notebook selected
    yield takeLatest(types.REMOVE_NOTEBOOK_REQUESTED, deleteNotebook); // remover a notebook
    yield takeLatest(types.ADD_NOTE_REQUESTED, addNote); // post new note
}

export default mySaga;