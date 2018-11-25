import { call, put } from 'redux-saga/effects'
import { BASE_API_URL } from '../constants'
import { createUser } from './apiInterface';
import * as actions from '../actions';
import uuid from 'uuid-v4';

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
    const notificationID = uuid();
    try{
        const { username, password } = action.payload;
        const user = yield call(postLogin, `${BASE_API_URL}/auth-jwt/`, username, password);
        if (!user.non_field_errors) {
            yield put(actions.logInSuccess(user.token, user.userid, user.username));
            yield put(actions.addNotification(notificationID, '#77DD77', 'success', 'Ha ingresado'));
        }else{
            yield put(actions.addNotification(notificationID, '#FF6961', 'failture', 'Usuario o Contraseña incorrectos'));
        }
    } catch (e){
        yield put(actions.addNotification(notificationID, '#FF6961', 'failture', 'No se pudo conectar con el servidor'));
    }
    

}

export function* fetchLogOut(action) {
    yield put(actions.logoutSuccess());
} 

export function* postNewUser(action){
    const notificationID = uuid();
    const { username, password, email } = action.payload;
    const newUser = yield call(createUser, `${BASE_API_URL}/user/`, {username, password, email});
    console.log(newUser);
    
    yield put(actions.signUpSuccess())
}