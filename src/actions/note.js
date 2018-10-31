import * as types from '../types';

// Notes related actions
// NOTES
//fetch
export const notesRequest = () => ({
  type: types.FETCH_NOTES_REQUESTED,
})

export const notesRequestSuccess = ( notes ) => ({
  type: types.FETCH_NOTES_SUCCESS,
  payload: { notes }
})

// NOTE
// fetch
export const noteRequest = (id) => ({
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
  id,
  title,
  body,
) => ({
  type: types.ADD_NOTE_SUCCESS,
  payload: {
    id,
    title,
    body,
  }
});

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
  type: types.ADD_NOTE_SUCCESS,
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
export const updateNoteRequest = (
  id, title, body
) => ({
  type: types.UPDATE_NOTE_REQUESTED,
  payload: {
    id,
    title,
    body
  }
})
export const updateNoteSuccess = () => ({
  type: types.UPDATE_NOTE_SUCCESS,
})


//NOTEBOOKS
//fetch 
export const fetchNotebooksRequest = () => ({
  
})