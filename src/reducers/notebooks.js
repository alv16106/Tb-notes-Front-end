import { combineReducers } from 'redux';

import * as types from '../types';

const byId = (state = {}, action) => {
  switch (action.type) {
    //ADD A NOTEBOOK
    case types.ADD_NOTEBOOK_REQUESTED:{
      const { id, name, color } = action.payload;
      return {
        ...state,
        [id]: {
          id,
          name,
          color,
          confirmed: false
        }
      }
    }
    //ADD A NOTEBOOK FAILED
    case types.ADD_NOTEBOOK_FAILURE: {
      const { id } = action.payload;
      const new_state = state;
      delete new_state[id];
      return new_state; 
    }
    //ADD A NOTEBOOK SUCCEDED
    case types.ADD_NOTEBOOK_SUCCESS: {
      const { oldID, id } = action.payload;
      const newState = { ...state };
      delete newState[oldID];
      newState[id] = {...state[oldID], id:id, confirmed: true};
      return newState;
    }
    //FETCH ALL NOTEBOOKS BY USER SUCCEDED
    case types.FETCH_NOTEBOOKS_SUCCESS: {
      const newState = {}
      action.payload.forEach(element => {
        const { id, name, color } = element;
        newState[id] = {
          id,
          name,
          color,
          confirmed: true,
        };
      });
      return newState
    }
    //REMOVE  A NOTEBOOK SUCCEDED
    case types.REMOVE_NOTEBOOK_SUCCESS: {
      const newState = state;
      delete newState[action.payload];
      return newState;
    }

    //UPDATE A NOTEBOOK SUCCEDED
    case types.UPDATE_NOTEBOOK_SUCCESS: {
      const { id } = action.payload;
      const newState = { ...state };
      newState [id] = action.payload;
      return newState;
    }

    default: {
      return state;
    }
  }
}

const order = (state = [], action) => {
  switch (action.type) {
    case types.ADD_NOTEBOOK_REQUESTED: {
      const { id } = action.payload;
      return [
        ...state,
        id
      ]
    }

    case types.ADD_NOTEBOOK_FAILURE: {
      const id = action.payload;
      const index = state.indexOf(id)
      const new_state = [
        ...state.slice(0, index),
        ...state.slice(index+1, state.length)
      ];
      return new_state;
  }

    case types.ADD_NOTEBOOK_SUCCESS: {
      const { oldID, id } = action.payload;
      const newState = [...state];
      newState[state.indexOf(oldID)] = id;
      return newState;
    }

    case types.FETCH_NOTEBOOKS_SUCCESS: {
      const newState = []
      action.payload.forEach(element => {
        newState.push(element.id);
      });
      return newState
    }

    case types.REMOVE_NOTEBOOK_SUCCESS: {
      const { id } = action.payload;
      const index = state.indexOf(id)
      const new_state = [
        ...state.slice(0, index),
        ...state.slice(index+1, state.length)
      ];
      return new_state;
    }
    
    default: {
      return state;
    }
  }
}

const isLoading = (state = false, action) => {
  switch (action.type) {
      case types.TOGGLED_UP_LOADING_NOTEBOOKS: {
          return true;
      }
      case types.TOGGLED_DOWN_LOADING_NOTEBOOKS: {
        return false;
      }
      default: {
          return state;
      }
  }
}

//selectors
export const getNotebook = (state, id) => state.byId[id];
export const getNotebooks = (state) => state.order.map(
    id => getNotebook(state, id)
);
export const itsLoading = (state) => state.isLoading;

const notebookList = combineReducers({
  byId,
  order,
  isLoading,
});
export default notebookList;
