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
            const { old_id, id, title, body } = action.payload;
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
            const { old_id, id, title, body } = action.payload;
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
        // FETCH
        case types.FETCH_NOTES_SUCCESS: {
            const newState = {}
            action.payload.forEach(element => {
                const { id, title, body } = element;
                newState[id] = {
                    id,
                    title,
                    body,
                };
            });
            console.log(newState);
            return newState
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
            const { old_id, id } = action.payload;
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
            const index = state.indexOf(id)
            const new_state = [
              ...state.slice(0, index),
              ...state.slice(index+1, state.length)
            ];
            return new_state;
          }
        // UPDATED
        case types.UPDATE_NOTE_SUCCESS: {
            const { old_id, id } = action.payload;
            const new_state = state;
            const i = new_state.indexOf(old_id)
            if (i !== -1) {
                new_state[i] = id;
            }
            return new_state;
        }
        // FETCH
        case types.FETCH_NOTES_SUCCESS: {
            const newState = []
            action.payload.forEach(element => {
                newState.push(element.id);
            });
            return newState
        }
        default: {
            return state;
        }
    }
}

const isLoading = (state = false, action) => {
    switch (action.type) {
        case types.TOGGLED_UP_LOADING_NOTES: {
            return true;
        }
        case types.TOGGLED_DOWN_LOADING_NOTES: {
            return false;
        }
        default: {
            return state;
        }
    }
}

const isSending = (state = false, action) => {
    switch (action.type) {
        case types.ADD_NOTE_REQUESTED: {
            return true;
        }
        case types.ADD_NOTE_SUCCESS: {
            return false;
        }
        case types.ADD_NOTE_FAILURE: {
            return false;
        }
        default: {
            return state;
        }
    }
}

//selectors
export const getNote = (state, id) => state.byId[id];
export const getNotes = (state) => state.order.map(
    id => getNote(state, id)
);
export const itsLoading = (state) => state.isLoading;
export const itsSending = (state) => state.isSending;

export default combineReducers({ 
    byId,
    order,
    isLoading,
    isSending,
});
