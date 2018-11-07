import { takeLatest } from 'redux-saga/effects';

import * as types from '../types';
import { fetchLogIn, fetchLogOut } from './user'; 
import { fetchNotebooks, addNotebook } from './notebookSagas';

function* mySaga() {
    yield takeLatest(types.USER_LOG_IN_REQUESTED, fetchLogIn);      //log in
    yield takeLatest(types.USER_LOG_OUT_REQUESTED, fetchLogOut);    //log out
    yield takeLatest(types.FETCH_NOTEBOOKS_REQUESTED, fetchNotebooks); // get notebooks from user
    yield takeLatest(types.ADD_NOTEBOOK_REQUESTED, addNotebook); // post new notebook
}

export default mySaga;