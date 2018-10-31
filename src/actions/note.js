import * as types from '../types';

// Notes related actions
// notas all 
export const notesRequest = () => ({
  type: types.FETCH_NOTES_REQUESTED,
})

// notas una
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

export const removeNoteFailure = (
  id,
) => ({
  type: types.REMOVE_NOTE_FAILURE,
  payload: {
    id,
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

export const removeNoteFailure = (
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
})

export const shareNote = (
  id,
  from,
  to
) => ({
  type: types.SHARE_NOTE_REQUESTED,
  payload: {
    id,
    from,
    to
  }
});
