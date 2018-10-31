import { call, put, select } from 'redux-saga/effects'
import * as types from '../types'
import { BASE_API_URL } from '../constants'
import { get, change } from './apiInterface';

import reducers, * as selectors from '../reducers';
import * as actions from '../actions';

const postLogin = () => {
    fetch(url, {
        method: 'POST',
        body: {
            username,
            password,
        },
        headers: {
            'Content-Type': 'application/json',
        }
    })
      .then( response => response.json() )
}

export function* fetchLogIn(action) {
    const { username, password } = action.payload;
    const user = yield call(get, 'http://127.0.0.1:8000/auth-jwt/');
    console.log(user);
    yield put(actions.logInSuccess(user.token, user.userid, user.username));
}