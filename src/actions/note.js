import * as types from '../types';

//Notes related actions
export const addNote = (
  id,
  title,
  body,
  notebook
) => ({
  type: types.NOTE_ADDED,
  payload: {
    id,
    title,
    body,
    notebook
  }
});


export const removeNote = (
  id,
) => ({
  type: types.NOTE_REMOVED,
  payload: {
    id,
  }
});

export const shareNote = (
  id,
  from,
  to
) => ({
  type: types.NOTE_REMOVED,
  payload: {
    id,
    from,
    to
  }
});
