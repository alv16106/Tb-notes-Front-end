import { call, put } from 'redux-saga/effects'
import { BASE_API_URL } from '../constants'
import { createUser } from './apiInterface';
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
      .catch( e => console.log(e))
}

export function* fetchLogIn(action) {
    const { username, password } = action.payload;
    console.log(username, password);
    const user = yield call(postLogin, `${BASE_API_URL}/auth-jwt/`, username, password);
    console.log(user);
    yield put(actions.logInSuccess(user.token, user.userid, user.username));
    yield put(actions.notebooksRequest());

}

export function* fetchLogOut(action) {
    yield put(actions.logoutSuccess());
} 

export function* postNewUser(action){
    const { username, password, email } = action.payload;
    const newUser = yield call(createUser, `${BASE_API_URL}/user/`, {username, password, email});
    yield put(actions.signUpSuccess())
}