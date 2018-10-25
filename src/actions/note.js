import * as types from '../types';

//Notes related actions
export const addNote = (
  id,
  title,
  body,
  notebook
) => ({
  type: types.ADD_NOTE_REQUESTED,
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
  type: types.REMOVE_NOTE_REQUESTED,
  payload: {
    id,
  }
});

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
