import { call, put, select } from 'redux-saga/effects'
import * as types from '../types';
import { BASE_API_URL } from '../constants'
import { get, post, change } from './apiInterface';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom'
=======
import uuid from 'uuid-v4';
>>>>>>> 64dd81a19f1d70d8b28e65d767a0e519997eca26

import reducers, * as selectors from '../reducers';
import * as actions from '../actions';

/* TODO:
  -API interface completa (falta API completa para eso)
   */

export function* fetchNotes(action) {
  const { uid, token } = yield select(selectors.getUser);
  console.log(`${BASE_API_URL}/user/${uid}/all-notes/`)
  try {
    const notes = yield call(get, `${BASE_API_URL}/user/${uid}/all-notes/`, token);
    const n = notes === undefined ? [] : notes;
    yield put(actions.notesFetchSuccess(n));
  } catch (e) {
    //yield put({ type: types.FETCH_NOTE_FAILTURE, payload: e });
  }
}

export function* fetchNotasFromNotebook(action) {
  const { token } = yield select(selectors.getUser);
  const currentNotebook = yield select(selectors.getCurrentNotebook);
  console.log(currentNotebook);
  if (currentNotebook === 'all' || currentNotebook === 'friends') {
    return;
  }
  const { id } = action.payload;
  try {
    const notes = yield call(get, `${BASE_API_URL}/notebook/${id}/all-notes/`, token);
    const n = notes === undefined ? [] : notes;
    console.log(n);
    yield put(actions.notesFetchSuccess(n));
  }
  catch (e) {
    //yield put({type: types.FETCH_NOTES_FAILTURE, payload: e});
  }
}

export function* showLoadingNotes(action) {
  yield put(actions.startLoadingNotes());
}

export function* hideLoadingNotes(action) {
  yield put(actions.stopLoadingNotes());
}

export function* addNote(action) {
  const notificationID = uuid();
  const { token } = yield select(selectors.getUser);
  const { id, title, body, history } = action.payload;
  const notebookId = yield select(selectors.getCurrentNotebook);
  try {
    const data = {
      title,
      body,
      owner: notebookId,
    }
    const newNote = yield call(post, `${BASE_API_URL}/note/`, token, data);
    history.push('/');
    yield put(actions.addNoteSuccess(id, newNote.id, newNote.title, newNote.body));
    yield put(actions.addNotification(notificationID, '#FF6961', 'success', 'Nota agregada'));
  } catch (e) {
    yield put(actions.addNotification(notificationID, '#FF6961', 'failture', 'No se pudo conectar con el servidor'));
    //yield put({ type: types.ADD_NOTE_FAILURE, payload: { e, id: action.payload.id } });
  }
}

export function* deleteNote(action) {
  const notificationID = uuid();
  const { token } = yield select(selectors.getUser);
  const { id } = action.payload;
  try {
    const deleted = yield call(change, `${BASE_API_URL}/note/${id}/`, token, 'DELETE', {});
    yield put(actions.removeNoteSuccess(id));
<<<<<<< HEAD
  } catch (e) {
=======
    yield put(actions.addNotification(notificationID, '#FF6961', 'success', 'Nota borrada'));
  } catch (e) { 
    yield put(actions.addNotification(notificationID, '#FF6961', 'failture', 'No se pudo conectar con el servidor'));
>>>>>>> 64dd81a19f1d70d8b28e65d767a0e519997eca26
    //yield put({type: types.REMOVE_FRIEND_FAILTURE, payload: e});
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





export function* shareNota(action) {
  try {
    const added = yield call(change, `${BASE_API_URL}/nota/`, 'POST', {title: action.payload.title, content: action.payload.content});
    yield put({ type: types.SHARE_NOTE_SUCCESS, payload: {message: ''} });
 } catch (e) { 
   yield put({type: types.SHARE_NOTE_FAILTURE, payload: e});
 }
}*/