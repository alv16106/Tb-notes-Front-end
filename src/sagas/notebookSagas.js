import { call, put, select } from 'redux-saga/effects'
import * as types from '../types'
import { BASE_API_URL } from '../constants'
import { post, change } from './apiInterface';

import reducers, * as selectors from '../reducers';
import * as actions from '../actions';

export const get = (url, token) => {
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    },
  })
    .then( response => response.json() )
    .catch( error => error );
}

export function* fetchNotebooks(action) {
  try {
    const { token, uid } = yield select(selectors.getUser);
    const Notebooks = yield call(get, `${BASE_API_URL}/user/${uid}/all-notebooks/`, token);
    yield put(actions.notebooksRequestSuccess(Notebooks));
  }
  catch (e) { 
    //yield put({type: types.FETCH_NOTEBOOKS_FAILURE, payload: e});
  }
}

export function* addNotebook(action) {
  try {
    const { id, name, color } = action.payload;
    const { token, uid } = yield select(selectors.getUser);
    const data = {
      name,
      color,
      owner: uid,
    }
    console.log(data);
    const added = yield call(post, `${BASE_API_URL}/notebook/`, token, data );
    console.log(added);
    yield put(actions.addNotebookSuccess(id, added.id));
 } catch (e) { 
    //yield put({type: types.ADD_NOTEBOOK_FAILURE, payload: { e, id: action.payload.id }});
 }
}

export function* deleteNotebook(action) {
  const { id } = action.payload;
  const { token } = yield select(selectors.getUser);
  try {
    const deleted = yield call(change, `${BASE_API_URL}/notebook/${id}/`, token, 'DELETE');
    yield put(actions.removeNotebookSuccess(id));
  } catch (e) { 
    //yield put({type: types.REMOVE_FRIEND_FAILURE, payload: e});
  }
}

/*
export function* fetchNotebook(action) {
  try {
    const Notebook = yield call(get, `${BASE_API_URL}/Notebook/${action.payload.id}/`);
    yield put({ type: types.FETCH_NOTEBOOK_SUCCESS, payload: Notebook });
  } catch (e) { 
    yield put({type: types.FETCH_NOTEBOOK_FAILURE, payload: e});
  }
}

export function* updateNotebook(action) {
  try {
    const Notebook = yield call(get, `${BASE_API_URL}/Notebook/${action.payload.id}/`);
    yield put({ type: types.UPDATE_NOTEBOOK_SUCCESS, payload: {message: ''} });
  } catch (e) {
    yield put({type: types.UPDATE_NOTEBOOK_FAILURE, payload: e});
  }
}

export function* deleteNotebook(action) {
  try {
    const deleted = yield call(change, `${BASE_API_URL}/Notebook/${action.payload.id}/`, 'DELETE');
    yield put({ type: types.REMOVE_NOTEBOOK_SUCCESS, payload: {message: ''} });
  } catch (e) { 
    yield put({type: types.REMOVE_FRIEND_FAILURE, payload: e});

  }
}

//AUN NO SABEMOS SI SHARE NOTEBOOKBOOK ES UNA FUNCIONALIDAD
/* export function* shareNotebook(action) {
  try {
    const added = yield call(change, `${BASE_API_URL}/chisme/`, 'POST', {title: action.payload.title, content: action.payload.content});
    yield put({type: types.REQUEST_SUCCEDED, payload: {oldID: action.payload.id, ...added}});
 } catch (e) { yield put({type: types.ERROR_RAISED, payload: e});
 }
} */