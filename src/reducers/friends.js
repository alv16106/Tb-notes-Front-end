import { combineReducers } from 'redux';
import * as types from '../types';


//friend list
const byId = (state = {}, action) => {
    switch (action.type) {

        case types.FRIENDS_FETCH_SUCCESS: {
            const { friends } = action.payload;
            const newState = {}
            friends.forEach(element => {
                const { id, username, } = element;
                newState[id] = {
                    id,
                    username,
                };
            });
            return newState
        }

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

        case types.FRIENDS_FETCH_SUCCESS: {
            const { friends } = action.payload;
            const new_state = [];
            friends.forEach(friend => new_state.push(friend.id));
            return new_state;
        }

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

const isLoading = (state = false, action) => {
    switch (action.type) {
        case types.TOGGLED_UP_LOADING_FRIENDS: {
            return true;
        }
        case types.TOGGLED_DOWN_LOADING_FRIENDS: {
            return false;
        }
        default: {
            return state;
        }
    }
}

const isPopupShowing = (state = false, action) => {
    switch (action.type) {
        case types.SHOW_POPUP_FRIENDS: {
            return true;
        }
        case types.HIDE_POPUP_FRIENDS: {
            return false;
        }
        default: {
            return state;
        }
    }
}

//selectors
export const getFriend = (state, id) => state.byId[id];
export const getFriends = (state) => state.order.map(
    id => getFriend(state, id)
);
export const itsLoading = (state) => state.isLoading;
export const isShowingFriendsPopup = (state) => state.isPopupShowing;

export default combineReducers({
    byId,
    order,
    isLoading,
    isPopupShowing
})
