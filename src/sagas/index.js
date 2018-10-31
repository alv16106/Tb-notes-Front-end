import { takeLatest } from 'redux-saga/effects';

import * as types from '../types';
import { fetchLogIn } from './user'; 

function* mySaga() {
    yield takeLatest(types.USER_LOG_IN_REQUESTED, fetchLogIn)
}

export default mySaga;