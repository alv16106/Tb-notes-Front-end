import { call, put } from 'redux-saga/effects'
import * as types from '../types'
import { BASE_API_URL } from '../constants'
import { get, change } from './apiInterface';

/* TODO:
  -API interface completa (falta API completa para eso)
   */

export function* fetchNotasFromNotebook(action) {
  try {
    const notas = yield call(get, `${BASE_API_URL}/nota/`);
    yield put({ type: types.FETCH_NOTES_SUCCESS, payload: notas });
  }
  catch (e) { 
    yield put({type: types.FETCH_NOTES_FAILTURE, payload: e});
  }
}

export function* fetchNota(action) {
  try {
    const nota = yield call(get, `${BASE_API_URL}/nota/${action.payload.id}/`);
    yield put({ type: types.REQUEST_SUCCEDED, payload: {message: ''} });
  } catch (e) { 
    yield put({type: types.ERROR_RAISED, payload: e});
  }
}

export function* updateNota(action) {
  try {
    const nota = yield call(get, `${BASE_API_URL}/nota/${action.payload.id}/`);
    yield put({ type: types.UPDATE_NOTE_SUCCESS, payload: {message: ''} });
  } catch (e) {
    yield put({type: types.UPDATE_NOTE_FAILTURE, payload: e});
  }
}

export function* deleteNota(action) {
  try {
    const deleted = yield call(change, `${BASE_API_URL}/nota/${action.payload.id}/`, 'DELETE');
    yield put({ type: types.REQUEST_SUCCEDED, payload: {message: ''} });
  } catch (e) { 
    yield put({type: types.ERROR_RAISED, payload: e});

  }
}

export function* addNota(action) {
  try {
    const added = yield call(change, `${BASE_API_URL}/nota/`, 'POST', {title: action.payload.title, content: action.payload.content});
    yield put({ type: types.REQUEST_SUCCEDED, payload: {message: ''} });
 } catch (e) { yield put({type: types.ERROR_RAISED, payload: e});
 }
}

export function* shareNota(action) {
  try {
    const added = yield call(change, `${BASE_API_URL}/nota/`, 'POST', {title: action.payload.title, content: action.payload.content});
    yield put({ type: types.REQUEST_SUCCEDED, payload: {message: ''} });
 } catch (e) { yield put({type: types.ERROR_RAISED, payload: e});
 }
}