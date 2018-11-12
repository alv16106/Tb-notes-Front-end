import { combineReducers } from 'redux';

import * as types from '../types';

const byId = (state = {}, action) => {
    switch (action.type) {
        // se se obtuvo bien se cambia el estado completo
        case types.FETCH_NOTE_SUCCESS: {
            const { notes } = action.payload;
            return notes;
        }
        // ADD
        case types.ADD_NOTE_REQUESTED: {
            const { id, title, body } = action.payload;
            return {
                ...state,
                [id]: {
                    id,
                    title,
                    body
                }
            }
        }
        case types.ADD_NOTE_SUCCESS: {
            const {old_id, id, title, body} = action.payload;
            const new_note = {
                id,
                title,
                body,
            }
            const new_state = state;
            delete new_state[old_id];
            return {
                ...new_state,
                [new_note.id]: {
                    ...new_note,
                }
            }
        }
        case types.ADD_NOTE_FAILURE: {
          const { id } = action.payload;
          const new_state = state;
          delete new_state[id];
          return new_state; 
        }
        // REMOVED
        case types.REMOVE_NOTE_SUCCESS: {
            const { id } = action.payload;
            const new_state = state;
            delete new_state[id];
            return new_state; 
        }
        // UPDATED
        case types.UPDATE_NOTE_SUCCESS: {
            const {old_id, id, title, body} = action.payload;
            const new_note = {
                id,
                title,
                body,
            }
            const new_state = state;
            delete new_state[old_id];
            return {
                ...new_state,
                [new_note.id]: {
                    ...new_note,
                }
            }
        }
        default: {
            return state;
        }
    }
}

const order = (state = [], action) => {
    switch (action.type) {
        // se se obtuvo bien se cambia el estado completo
        case types.FETCH_NOTE_SUCCESS: {
            const notes = action.payload;
            const new_state = [];
            notes.forEach(note => new_state.push(note.id));
            return new_state;
        }
        // ADD
        case types.ADD_NOTE_REQUESTED: {
            const { id } = action.payload;
            return [
                ...state,
                id,
            ]
        }
        case types.ADD_NOTE_SUCCESS: {
            const {old_id, id} = action.payload;
            const new_state = state;
            const i = new_state.indexOf(old_id)
            if (i !== -1) {
                new_state[i] = id;
            }
            return new_state;
        }
        case types.ADD_NOTE_FAILURE: {
            const { id } = action.payload;
            const new_state = state;
            delete new_state[id];
            return new_state;
        }
        // REMOVED
        case types.REMOVE_NOTE_SUCCESS: {
            const { id } = action.payload;
            const new_state = state;
            delete new_state[id];
            return new_state; 
        }
        // UPDATED
        case types.UPDATE_NOTE_SUCCESS: {
            const {old_id, id} = action.payload;
            const new_state = state;
            const i = new_state.indexOf(old_id)
            if (i !== -1) {
                new_state[i] = id;
            }
            return new_state;
        }
        default: {
            return state;
        }
    }
}

//selectors
export const getNote = (state, id) => state.byId[id];
export const getNotes= (state) => state.order.map(
    id => getNote(state, id)
);

export default combineReducers({ byId, order });