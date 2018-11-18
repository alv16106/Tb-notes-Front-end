import * as types from '../types';

// Notes related actions
// NOTES
//fetch
export const notesFetchRequest = () => ({
  type: types.FETCH_NOTES_REQUESTED,
})

export const notesFetchSuccess = ( notes ) => ({
  type: types.FETCH_NOTES_SUCCESS,
  payload: notes 
})

export const loadingNotes = () => ({
  type: types.TOGGLED_LOADING_NOTES,
})

// NOTE
// fetch
export const noteRequest = ( id ) => ({
  type: types.FETCH_NOTE_REQUESTED,
  payload: { id }
})
export const noteSuccess = (
  id, 
  title,
  body,
) => ({
  type: types.FETCH_NOTE_SUCCESS,
  payload: {
    id,
    title,
    body,
  }
})

// add
export const addNoteRequest = (
  id,
  title,
  body,
) => ({
  type: types.ADD_NOTE_REQUESTED,
  payload: {
    id,
    title,
    body,
  }
});
export const addNoteSuccess = (
  old_id,
  id,
  title,
  body,
) => ({
  type: types.ADD_NOTE_SUCCESS,
  payload: {
    old_id,
    id,
    title,
    body,
  }
});
export const addNoteFail = (id) => ({
  type: types.ADD_FRIEND_FAILURE,
  payload: { id }
})

// remove
export const removeNoteRequest = (
  id,
) => ({
  type: types.REMOVE_NOTE_REQUESTED,
  payload: {
    id,
  }
});
export const removeNoteSuccess = (
  id,
) => ({
  type: types.REMOVE_NOTE_SUCCESS,
  payload: {
    id,
  }
})

//share
export const shareNoteRequest = (
  id,
  from,
  to,
) => ({
  type: types.SHARE_NOTE_REQUESTED,
  payload: {
    id,
    from,
    to
  }
})

//update
export const updateNoteRequest = () => ({
  type: types.UPDATE_NOTE_REQUESTED,
})
export const updateNoteSuccess = (
  old_id, id, title, body
) => ({
  type: types.UPDATE_NOTE_REQUESTED,
  payload: {
    old_id,
    id,
    title,
    body
  }
})
