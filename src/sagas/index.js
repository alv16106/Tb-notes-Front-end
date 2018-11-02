import { takeLatest } from 'redux-saga/effects';

import * as types from '../types';
import { fetchLogIn, fetchLogOut } from './user'; 

function* mySaga() {
    yield takeLatest(types.USER_LOG_IN_REQUESTED, fetchLogIn);      //log in
    yield takeLatest(types.USER_LOG_OUT_REQUESTED, fetchLogOut);    //log out
}

export default mySaga;