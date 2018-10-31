import { combineReducers } from 'redux';

import * as types from '../types';


const token = (state = '', action) => {
    switch (action.type) {
        case types.USER_LOG_IN_SUCCESS: {
            const { token } = action.payload;
            return token;
        }
        default: {
            return state;
        }
    }
}

//friend list
const byId = (state = {}, action) => {
    switch (action.type) {

        case types.ADD_FRIEND_REQUESTED: {
            const { id, username } = action.payload;
            return {
                ...state,
                [id]: {
                    id,
                    username
                }
            }
        }
        
        case types.ADD_FRIEND_SUCCESS: {
            const { old_id, id, username } = action.payload;

            const new_state = state;
            delete new_state[old_id];

            return {
                ...state,
                [id]: {
                    id,
                    username
                }
            }
        }

        case types.ADD_FRIEND_FAILURE: {
            const { id } = action.payload;
            const new_state = state;
            delete new_state[id];
            return new_state;
        }

        case types.REMOVE_FRIEND_SUCCESS: {
            const { id } = action.payload;
            const new_state = state;
            delete new_state[id];
            return new_state;
        }

        default: {
            return state;
        }
    }
}

const order = (state = [], action) => {
    switch (action.type) {

        case types.ADD_FRIEND_REQUESTED: {
            const { id } = action.payload;
            return [
                ...state,
                id
            ]
        }
        
        case types.ADD_FRIEND_SUCCESS: {
            const { old_id, id } = action.payload;
            const new_state = state;
            const i = new_state.indexOf(old_id)
            if (i !== -1) {
                new_state[i] = id;
            }
            return new_state;
        }

        case types.ADD_FRIEND_FAILURE: {
            const { id } = action.payload;
            const new_state = state;
            delete new_state[id];
            return new_state;
        }

        case types.REMOVE_FRIEND_SUCCESS: {
            const { id } = action.payload;
            const new_state = state;
            delete new_state[id];
            return new_state;
        }

        default: {
            return state;
        }
    }
}

const friendList = combineReducers({byId, order});

export default combineReducers({
    token,
    friendList
}); 