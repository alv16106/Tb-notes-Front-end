import { call, put, select } from 'redux-saga/effects'
import * as types from '../types'
import { BASE_API_URL } from '../constants'
import { get, change } from './apiInterface';

import reducers, * as selectors from '../reducers';
import * as actions from '../actions';

const postLogin = (url, username, password) => {
    const user = JSON.stringify({
        username: username,
        password: password,
    })
    console.log(user)
    return fetch(url, {
        method: 'POST',
        body: user,
        headers: {
            'Content-Type': 'application/json',
        }
    })
      .then( response => response.json() )
}

export function* fetchLogIn(action) {
    const { username, password } = action.payload;
    console.log(username, password);
    const user = yield call(postLogin, 'http://127.0.0.1:8000/auth-jwt/', username, password);
    console.log(user);
    yield put(actions.logInSuccess(user.token, user.userid, user.username));
}

export function* fetchLogOut(action) {
    yield put(actions.logoutSuccess());
} 