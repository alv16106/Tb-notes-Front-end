import { combineReducers } from 'redux';

import * as types from '../types';

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_NOTEBOOK_REQUESTED:{
      const { id, name, color } = action.payload;
      return {
        ...state,
        [id]: {
          id,
          name,
          color
        }
      }
    }
    
    case types.FETCH_NOTEBOOKS_SUCCESS: {
      
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
    
    default: {
          return state;
    }
  }
}

const notebookList = combineReducers({byId, order});
export default notebookList;