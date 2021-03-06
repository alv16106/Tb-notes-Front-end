import { call, put, select } from 'redux-saga/effects'
import * as types from '../types'
import { BASE_API_URL } from '../constants'
import { get, change } from './apiInterface';

import reducers, * as selectors from '../reducers';
import * as actions from '../actions';

/* TODO:
  -API interface completa (falta API completa para eso)
   */

export function* fetchNotasFromNotebook(action) {
  const { token } = yield select(selectors.getUser);
  const { id } = action.payload;
  try {
    const notes = yield call(get, `${BASE_API_URL}/notebook/${id}/all-notes/`, token);
    const n = notes === undefined ? [] : notes;
    console.log(n);
    yield put(actions.notesRequestSuccess(n));
  }
  catch (e) { 
    //yield put({type: types.FETCH_NOTES_FAILTURE, payload: e});
  }
}
/*
export function* fetchNota(action) {
  try {
    const nota = yield call(get, `${BASE_API_URL}/nota/${action.payload.id}/`);
    yield put({ type: types.FETCH_NOTE_SUCCESS, payload: nota });
  } catch (e) { 
    yield put({type: types.FETCH_NOTE_FAILTURE, payload: e});
  }
}

export function* updateNota(action) {
  try {
    const nota = yield call(change, `${BASE_API_URL}/nota/${action.payload.id}/`, 'PUT', action.payload);
    yield put({ type: types.UPDATE_NOTE_SUCCESS, payload: {message: ''} });
  } catch (e) {
    yield put({type: types.UPDATE_NOTE_FAILTURE, payload: e});
  }
}

export function* deleteNota(action) {
  try {
    const deleted = yield call(change, `${BASE_API_URL}/nota/${action.payload.id}/`, 'DELETE');
    yield put({ type: types.REMOVE_NOTE_SUCCESS, payload: {message: ''} });
  } catch (e) { 
    yield put({type: types.REMOVE_FRIEND_FAILTURE, payload: e});

  }
}

export function* addNota(action) {
  try {
    const added = yield call(change, `${BASE_API_URL}/nota/`, 'POST', {title: action.payload.title, content: action.payload.content});
    yield put({ type: types.ADD_NOTE_SUCCESS, payload: {message: ''} });
 } catch (e) { 
   yield put({type: types.ADD_NOTE_FAILTURE, payload: { e, id: action.payload.id }});
 }
}

export function* shareNota(action) {
  try {
    const added = yield call(change, `${BASE_API_URL}/nota/`, 'POST', {title: action.payload.title, content: action.payload.content});
    yield put({ type: types.SHARE_NOTE_SUCCESS, payload: {message: ''} });
 } catch (e) { 
   yield put({type: types.SHARE_NOTE_FAILTURE, payload: e});
 }
}*/