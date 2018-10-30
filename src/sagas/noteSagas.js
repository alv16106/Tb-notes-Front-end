import { call, put } from 'redux-saga/effects'
import * as types from '../types'
import { BASE_API_URL } from '../constants'
import { get, change } from './apiInterface';

/* TODO:
  -API interface completa (falta API completa para eso)
   */

export function* fetchNotasFromNotebook(action) {
  try {
    const notas = yield call(get, `${BASE_API_URL}/cuaderno/${action.payload.id}/all-notes/`);
    yield put({ type: types.FETCH_NOTES_SUCCESS, payload: notas });
  }
  catch (e) { 
    yield put({type: types.FETCH_NOTES_FAILTURE, payload: e});
  }
}

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
}