import * as types from '../types';

//Notebook related actions
export const addNotebook = (
  id,
  name,
  color,
  owner
) => ({
  type: types.NOTEBOOK_ADDED,
  payload: {
    id,
    name,
    color,
    owner
  }
});

export const removeNotebook = (
  id,
) => ({
  type: types.NOTEBOOK_REMOVED,
  payload: {
    id,
  }
});

export const changeColor = (
  id,
  color
) => ({
  type: types.NOTEBOOK_COLOR_CHANGED,
  payload: {
    id,
    color,
  }
});