import { call, put } from 'redux-saga/effects'
import * as types from '../types'
import { BASE_API_URL } from '../constants'
import { get, change } from './apiInterface';

export function* fetchNotebooksFromUser(action) {
  try {
    const Notebooks = yield call(get, `${BASE_API_URL}/Notebook/`);
    yield put({ type: types.ALL_NOTES_FETCH_SUCCESS, payload: {message: ''} });
  }
  catch (e) { 
    yield put({type: types.ERROR_RAISED, payload: e});
  }
}

export function* fetchNotebook(action) {
  try {
    const Notebook = yield call(get, `${BASE_API_URL}/Notebook/${action.payload.id}/`);
    yield put({type: types.REQUEST_SUCCEDED, payload: Notebook});
  } catch (e) { 
    yield put({type: types.ERROR_RAISED, payload: e});
  }
}

export function* updateNotebook(action) {
  try {
    const Notebook = yield call(get, `${BASE_API_URL}/Notebook/${action.payload.id}/`);
    yield put({type: types.REQUEST_SUCCEDED, payload: Notebook});
  } catch (e) {
    yield put({type: types.ERROR_RAISED, payload: e});
  }
}

export function* deleteNotebook(action) {
  try {
    const deleted = yield call(change, `${BASE_API_URL}/Notebook/${action.payload.id}/`, 'DELETE');
    yield put({type: types.REQUEST_SUCCEDED, payload: action.payload.id});
  } catch (e) { 
    yield put({type: types.ERROR_RAISED, payload: e});

  }
}

export function* addNotebook(action) {
  try {
    const added = yield call(change, `${BASE_API_URL}/Notebook/`, 'POST', {title: action.payload.title, content: action.payload.content});
    yield put({type: types.REQUEST_SUCCEDED, payload: {oldID: action.payload.id, ...added}});
 } catch (e) { yield put({type: types.ERROR_RAISED, payload: e});
 }
}


//AUN NO SABEMOS SI SHARE NOTEBOOK ES UNA FUNCIONALIDAD
/* export function* shareNotebook(action) {
  try {
    const added = yield call(change, `${BASE_API_URL}/chisme/`, 'POST', {title: action.payload.title, content: action.payload.content});
    yield put({type: types.REQUEST_SUCCEDED, payload: {oldID: action.payload.id, ...added}});
 } catch (e) { yield put({type: types.ERROR_RAISED, payload: e});
 }
} */