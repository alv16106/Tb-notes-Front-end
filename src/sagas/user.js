import { call, put, select } from 'redux-saga/effects'
import { BASE_API_URL } from '../constants'
import { createUser, get, change } from './apiInterface';
import uuid from 'uuid-v4';

import * as actions from '../actions';
import reducers, * as selectors from '../reducers';
import { log } from 'handlebars';

const postLogin = (url, username, password) => {
    const user = JSON.stringify({
        username: username,
        password: password,
    })
    return fetch(url, {
        method: 'POST',
        body: user,
        headers: {
            'Content-Type': 'application/json',
        }
    })
      .then( response => response.json() )
}

const refresh = (url, oldJWT) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            token: oldJWT,
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .catch(e => console.log(e))
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
    try{
        const { username, password, email } = action.payload;
        const newUser = yield call(createUser, `${BASE_API_URL}/user/`, {username, password, email});
        if (newUser.username === username && newUser.password === password && newUser.email === email) {
            const notificationID = uuid();
            yield put(actions.addNotification(notificationID, '#77DD77', 'success', 'Usuario creado satisfactoriamente'));
            yield put(actions.signUpSuccess())
        }else{
            for (const [key, value] of Object.entries(newUser)) {
                const notificationID = uuid();
                
                let errors = key + ": \n";
                value.forEach(error => {
                    errors = errors + error + "\n"
                });
                yield put(actions.addNotification(notificationID, '#FF6961', 'failture', errors));
            }
        }

    }catch(e) {
        const notificationID = uuid();
        yield put(actions.addNotification(notificationID, '#FF6961', 'failture', 'No se pudo conectar con el servidor'));
    }
}

export function* refreshJWT(action){
    const { oldJWT } = action.payload;
    const newJWT = yield call(refresh, `${BASE_API_URL}/auth-jwt-refresh/`, oldJWT);
    yield put(actions.logInSuccess(newJWT.token, newJWT.userid, newJWT.username));
}

export function* fetchFriends(action) {
    const { uid, token } = yield select(selectors.getUser);

    try{
        const friends = yield call(get, `${BASE_API_URL}/user/${uid}/friends/`, token);
        const n = friends === undefined ? [] : friends;
        yield put(actions.fetchFriendsSucceed(n));
    }catch(e) {
        alert(e);
    }
}

export function* requestFriendship(action) {
    const notificationID = uuid();
    const { id, username } = action.payload;
    const { token, uid } = yield select(selectors.getUser);
    try{
        const friendship = yield call(change, `${BASE_API_URL}/user/${uid}/add-friendship/`,token, 'POST', {username:username});
        console.log(friendship);
        yield put(actions.addFriendSucces(id, friendship.id, username));
        yield put(actions.addNotification(notificationID, '#77DD77', 'success', 'Amigo añadido'));
    }catch(e){        
        yield put(actions.addFriendFailure(id))
        yield put(actions.addNotification(notificationID, '#77DD77', 'failture', 'Error al añadir amigo'));
    }
}