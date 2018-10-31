import * as types from '../types';

//Notebook related actions

//fetch many
export const notebooksRequest = () => ({
  type: types.FETCH_NOTEBOOKS_REQUESTED
})

export const notebooksRequestSuccess = (notebooks) => ({
  type: types.FETCH_NOTEBOOKS_SUCCESS,
  payload: notebooks
})

//Add one
export const addNotebookRequest = (
  id,
  name,
  color,
  owner
) => ({
  type: types.ADD_NOTEBOOK_REQUESTED,
  payload: {
    id,
    name,
    color,
    owner
  }
})

export const addNotebookSuccess = (
  id
) => ({
  type: types.ADD_NOTEBOOK_SUCCESS,
  payload: id
})


//Remove
export const removeNotebookRequest = (
  id,
) => ({
  type: types.REMOVE_NOTEBOOK_REQUESTED,
  payload: id
});

export const removeNotebookSuccess = (
  id
) => ({
  type: types.REMOVE_NOTEBOOK_SUCCESS,
  payload: id
})

//UPdate

export const updateNotebookRequest = (
  id,
  newFields
) => ({
  type: types.UPDATE_NOTEBOOK_REQUESTED,
  payload: {
    id,
    newFields,
  }
});

export const updateNotebookSuccess = (updatedNota) => ({
  type: types.UPDATE_NOTEBOOK_SUCCESS,
  payload: updatedNota
})
